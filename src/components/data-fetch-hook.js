/*
 * @Author: yer
 * @Date: 2023-01-12 13:59:00
 * @LastEditors: yer
 * @LastEditTime: 2023-01-13 15:43:41
 * @FilePath: /react-test/src/components/data-fetch-hook.js
 * @Description:
 *
 * Copyright (c) 2023 by yer yerb993@gmail.com, All Rights Reserved.
 */

import { useState } from "react";
import { Spin } from "antd";
import useFetchHook from "../hooks/use-fetch-hook";

/**
 * @参考: https://www.robinwieruch.de/react-hooks-fetch-data/
 */
export const DataFetchHook = () => {
  const [{ data, isLoading, isError }, doFetch] = useFetchHook(
    "https://hn.algolia.com/api/v1/search?query=redux",
    { hits: [] }
  );
  const [query, setQuery] = useState("redux");

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>
          <Spin />
        </div>
      ) : (
        <ul>
          {data.hits.map((hit) => (
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() =>
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
    </div>
  );
};

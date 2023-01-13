/*
 * @Author: yer
 * @Date: 2022-12-04 17:34:49
 * @LastEditors: yer
 * @LastEditTime: 2022-12-04 17:51:11
 * @FilePath: /react-test/src/test-component/react-get-data.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

import { useEffect, useState } from "react";

// query url: https://hn.algolia.com/api/v1/search?query=your-query
export function GetDataDemo(props) {
  const [datas, setData] = useState([]);
  const [query, setQuery] = useState("react");

  useEffect(() => {
    let ignore = false;
    async function getData() {
      const {
        data: { hits: result },
      } = await fetch("https://hn.algolia.com/api/v1/search?query=" + query);
      if (!ignore) setData(result);
    }
    getData();
    return () => (ignore = true);
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {datas.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

/*
 * @Author: yer
 * @Date: 2023-01-13 15:32:45
 * @LastEditors: yer
 * @LastEditTime: 2023-01-13 15:40:37
 * @FilePath: /react-test/src/hooks/use-fetch-hook.js
 * @Description:
 *
 * Copyright (c) 2023 by yer yerb993@gmail.com, All Rights Reserved.
 */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useFetchHook = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);
  return [{ data, isLoading, isError }, setUrl];
};

export default useFetchHook;

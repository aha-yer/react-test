/*
 * @Author: yer
 * @Date: 2023-01-13 15:32:45
 * @LastEditors: yer
 * @LastEditTime: 2023-01-13 16:06:53
 * @FilePath: /react-test/src/hooks/use-fetch-hook.js
 * @Description:
 *
 * Copyright (c) 2023 by yer yerb993@gmail.com, All Rights Reserved.
 */
import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useFetchHook = (initialUrl, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  const [url, setUrl] = useState(initialUrl);
  const isFirst = useRef(true);

  useEffect(() => {
    // 组件被卸载后不需要更新
    let didCancel = false;
    // 第一次不加载
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    async function fetchData() {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILED" });
        }
      }
    }
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};

export default useFetchHook;

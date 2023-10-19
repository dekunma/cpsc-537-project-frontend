import { useState, useMemo, useRef, useEffect } from "react";
import axios, { AxiosError, CancelTokenSource, AxiosResponse } from "axios";
import ApiClient from "./apiClient";

export interface RequestConfigCreator<TReq, TResp> {
  (args: TReq): any;
  TReq: TReq;
  TResp: TResp;
}

interface RequestOptions<TReq, TResp> {
  defaultData?: AxiosResponse<TResp>;
  onSuccess?: (
    data: TResp,
    params: TReq,
    requestConfig?: AxiosResponse<TResp>
  ) => void;
  onFail?: (error: TResp, params: TReq, axiosResp: AxiosError) => void;
  onFinally?: () => void;
}

interface ApiResponseWrapper<TData> {
  data: TData;
  message: string | null;
  code: number;
}

export const useRequest = <
  T extends RequestConfigCreator<T["TReq"], T["TResp"]>
>(
  requestConfigCreator: T,
  options?: RequestOptions<T["TReq"], T["TResp"]>
): readonly [
  (params: T["TReq"]) => Promise<AxiosResponse<T["TResp"]>>,
  AxiosResponse<T["TResp"]>,
  boolean,
  Error | undefined
] => {
  const { defaultData } = options || {};
  const optionsRef = useRef(options);
  const [data, setData] = useState<AxiosResponse<T["TResp"]> | undefined>(
    defaultData
  );
  const [status, setStatus] = useState({ loading: false, error: undefined });
  const sourceRef = useRef<CancelTokenSource | null>(null);

  const cancelRequest = () => {
    if (sourceRef.current != null) {
      sourceRef.current.cancel();
    }
  };

  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => () => cancelRequest(), []);

  const request = useMemo(() => {
    return (params: T["TReq"]) => {
      cancelRequest();
      sourceRef.current = axios.CancelToken.source();
      setStatus({ loading: true, error: undefined });
      const requestConfig = requestConfigCreator(params);
      Object.assign(requestConfig, { cancelToken: sourceRef.current.token });
      return ApiClient.request(requestConfig)
        .then((resp: AxiosResponse<T["TResp"]>) => {
          sourceRef.current = null;

          setData(resp);
          setStatus({ loading: false, error: undefined });
          optionsRef.current?.onSuccess &&
            optionsRef.current?.onSuccess(resp.data, params, resp);

          return Promise.resolve(resp);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }

          sourceRef.current = null;

          setStatus({ loading: false, error: err.response?.data });
          optionsRef.current?.onFail &&
            optionsRef.current?.onFail(err.response?.data, params, err);
          return Promise.reject(err.response);
        })
        .finally(() => {
          optionsRef.current?.onFinally && optionsRef.current?.onFinally();
        });
    };
  }, [requestConfigCreator]);

  return [request, data, status.loading, status.error] as const;
};

import axios, { AxiosRequestConfig } from "axios";

export const request = ({
  url,
  method,
  params={},
  headers={},
}: AxiosRequestConfig) => {
  const axios_obj: AxiosRequestConfig = {
    url,
    method,
    params,
    headers: {
      Authorization: `Bearer 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`,
      ...headers,
    },
  };
  return axios(axios_obj)
};

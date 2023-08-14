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

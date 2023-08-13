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

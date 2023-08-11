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

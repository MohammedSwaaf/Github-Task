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

import Axios, {type AxiosRequestConfig, type AxiosResponse} from 'axios';
import appendFormData, {type FormData} from '../utils/appendFormData';

const BASE_URL = 'https://www.azki.com/api/product/';

export const api = Axios.create({
  baseURL: BASE_URL,
});

const request = {
  get: <T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> => {
    return api.get(endpoint, options);
  },
  post: (
    endpoint: string,
    data?: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.post(
      endpoint,
      options?.headers?.['Content-Type'] === 'multipart/form-data'
        ? appendFormData(data as FormData)
        : Object.assign({}, data),
      options,
    );
  },
  put: (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.put(endpoint, data, options);
  },
  delete: (
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.delete(endpoint, options);
  },
  options: (
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.options(endpoint, options);
  },
};

export default request;

import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface gtRequestInterceptors<T = AxiosResponse> {
  // 传递的拦截器
  requestInterceptor?: (confing: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  // 响应拦截器
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
export interface GTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: gtRequestInterceptors<T>;
  showLoading?: boolean;
}

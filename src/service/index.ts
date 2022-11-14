// service统一出口
import { BASE_URL, TIME_OUT } from './request/config';
import GTRequest from './request';
const gtRequest = new GTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '123';
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      console.log('请求成功拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截');
      return err;
    },
    responseInterceptor: (config) => {
      console.log('响应成功拦截');
      return config;
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截');
      return err;
    },
  },
});
export default gtRequest;

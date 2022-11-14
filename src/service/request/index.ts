import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { gtRequestInterceptors, GTRequestConfig } from "@/service/request/type";
import { ElLoading } from "element-plus";
import { LoadingOptionsResolved } from "element-plus/lib/components/loading/src/types";
import { resolve } from "path";
const DEAFULT_LOADING = false;
class GTRequest {
  instance: AxiosInstance;
  interceptors?: gtRequestInterceptors;
  loading?: any;
  showLoading: boolean;
  constructor(config: GTRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    console.log(config);
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    this.instance.interceptors.request.use(
      (config) => {
        // 所有实例都有的请求拦截器
        if (this.showLoading) {
          this.loading = ElLoading.service({
            text: "拼命加载中，请稍后...",
            background: "rgba(0, 0, 0, 0.7)",
            spinner: "el-icon-loading",
          });
        }
        return config;
      },
      (err) => {
        // 所有的实例都有的请求失败拦截器
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close();
        }, 2000);
        // 所有实例都有的响应拦截器
        const data = res.data;
        if (res.data.status === -1001) {
          console.log("请求失败 ~~");
        } else {
          return res.data;
        }
      },
      (err) => {
        this.loading?.close();
        // 所有实例都有的响应失败拦截器
        if (err.response.status === 404) {
          console.log("404错误");
        }
        return err;
      }
    );
  }

  request<T>(config: GTRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1:单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      // 2:判断是否需要showLoading
      if (config.showLoading === true) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //将showLoading设置为true，否则会影响下一次请求
          this.showLoading = DEAFULT_LOADING;
          // 将结果返回出去
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING;
          reject(err);
        });
    });
  }
  get<T>(config: GTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
}
export default GTRequest;

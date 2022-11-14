/*
 * @Descripttion:
 * @Author: 长乾
 * @Date: 2022-05-09 16:36:23
 * @LastEditors: zj
 * @LastEditTime: 2022-05-19 18:21:46
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [vue()],
  server: {
    https: false, //是否开启https
    open: true, //是否自动在浏览器打开
    port: 9000, //端口号
    host: '0.0.0.0',
    //跨域处理
    proxy: {
      '/api': {
        target: 'http://localhost:8000', //后台接口
        changeOrigin: true,
        // secure:false,//如果是https接口， 需要配置这个参数
        // ws:true,//websocket支持
        // 截取api，并用api代替
        // rewrite:(path)=>path.replace(/^\/api/,"/api"),
      },
    },
  },
});

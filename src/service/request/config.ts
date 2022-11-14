let BASE_URL = '';
const TIME_OUT = 10000;
let BASE_NAME = '';
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org';
  BASE_NAME = 'GT';
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org';
  BASE_NAME = 'formal';
}
export { BASE_URL, BASE_NAME, TIME_OUT };

import axios from 'axios'
// export default axios.create({
//     baseURL:process.env.baseUrl
// });
if(process.server){
  axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}
// axios.defaults.baseURL = process.env.baseUrl;
// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    header: response.headers
  }
}, error => {
  return Promise.reject(error)
});

export default axios

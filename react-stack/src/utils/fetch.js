import axios from 'axios'

let baseURL = 'https://cnodejs.org/api/v1'

// 创建axios实例
const fetch = axios.create({
  baseURL: baseURL,
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token') || ''
  return config
})

// 封装响应拦截器
fetch.interceptors.response.use((response) => {
  if (response.data && response.data.success) {
    return response.data.data
  } else {
    console.log('网络异步，请稍后再试')
  }
}, (error) => {
  // 请求失败
  return Promise.reject(error)
})

export default fetch

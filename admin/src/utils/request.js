import axios from 'axios'
import { Message } from 'element-ui'
import { store } from '@/store'
import { getToken } from './auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  // 请求发出前的拦截设置
  
})
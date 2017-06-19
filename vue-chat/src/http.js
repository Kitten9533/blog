// axios重新封装，添加拦截器
import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router/index'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token.accessToken) {
      config.headers.Authorization = 'token ' + store.state.token.accessToken
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
  )

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 当返回 token信息时，覆盖token
    if (response.status === 200) {
      store.commit(types.LOGIN, response.data.accessToken)
      console.log(store.state.token.accessToken)
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
  )

export default axios

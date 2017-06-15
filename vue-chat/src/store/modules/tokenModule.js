import * as types from '../types'
export default{
  state: {
    test: 'tokenModule.test',
    accessToken: 'aa'
  },
  mutations: {
    [types.LOGIN]: (state, accessToken) => {
      state.accessToken = accessToken
      localStorage.accessToken = accessToken
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('accessToken')
      state.accessToken = null
    }
  }
}

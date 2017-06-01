export default{
  state: {
    wInnerHeight: window.innerHeight,
    count: 0
  },
  getters: {
    getWInnerHeight (state) {
      return state.wInnerHeight
    }
  },
  mutations: {
    change (state) {
      state.wInnerHeight = window.innerHeight
      // alert(state.wInnerHeight)
    },
    add (state) {
      alert('haha')
    }
  },
  actions: {
    setHeight (state) {
      // state.wInnerHeight = window.innerHeight
      // alert('setHeight')
    }
  }
}

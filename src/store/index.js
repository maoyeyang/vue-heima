import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    car: JSON.parse(localStorage.getItem('car') || '[]')
  },
  mutations: {
    addToCar (state, goodsinfo) {
      let flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return flag
        }
      })
      if (!flag) {
        console.log(goodsinfo)
        state.car.unshift(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo (state, goodsinfo) {
      state.car.some(item => {
        if (parseInt(item.id) === goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar (state, id) {
      state.car.some((item, i) => {
        if (parseInt(item.id) === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected (state, {
      id,
      val
    }) {
      state.car.some(item => {
        if (parseInt(item.id) === id) {
          item.selected = val
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount (state) {
      let counts = 0
      state.car.forEach(item => {
        counts += item.count
      })
      return counts
    },
    getGoodsCount (state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getSelectedCountAndAmount (state) {
      let o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

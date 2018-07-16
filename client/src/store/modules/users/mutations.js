// import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.LIST] (state, data) {
    state.list = data
  },

  [types.CREATE] (state, data) {
    state.list.unshift(data)
  },

  [types.REMOVE] (state, id) {
    console.log(state.list.indexOf(id))
  }
}

import Vue from 'vue'
import * as types from './mutation-types'

export const list = ({ commit }) => {
  Vue.$http.get('/api/users')
    .then(res => {
      commit(types.LIST, res.data)
    })
    .catch(error => {
      commit(types.LIST, error)
    })
}

export const show = ({ commit }) => {

}

export const create = ({ commit }, data) => {
  Vue.$http.post('/api/users', data)
    .then(res => {
      commit(types.CREATE, data)
    })
    .catch(error => {
      commit(types.CREATE, error)
    })
}

export const update = ({ commit }) => {

}

export const remove = ({ commit }, id) => {
  Vue.$http.delete('/api/users/' + id)
    .then(res => {
      commit(types.REMOVE, id)
    })
    .catch(error => {
      commit(types.REMOVE, error)
    })
}

export default {
  list,
  show,
  create,
  update,
  remove
}

/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer'
import * as types from './mutation-types'

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response))
   *  })
   *  .catch(() => {
   *    console.log('Request failed...')
   *  })
   */
  const account = {
    first_name: 'Светлана',
    last_name: 'Винницкая',
    email: 'vinnickaya@gmail.com',
    phone: '+7 324 53 32 85'
  }

  commit(types.FIND, Transformer.fetch(account))
}

export const update = ({ commit }, data) => {
  commit(types.UPDATE, Transformer.send(data))
}

export default {
  find,
  update
}

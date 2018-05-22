/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { FIND, UPDATE } from './mutation-types'

export default {
  [FIND] (state, account) {
    state.email = account.email
    state.firstName = account.firstName
    state.lastName = account.lastName
    state.phone = account.phone
  },
  [UPDATE] (state, account) {
    state.email = account.email
    state.firstName = account.first_name
    state.lastName = account.last_name
    state.phone = account.phone
  }
}

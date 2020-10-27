import state from './state'
import * as mutations from './mutations'
import getRandomPhoto from './actions'

export default {
  namespaced: true,
  actions: { getRandomPhoto },
  mutations,
  state,
}

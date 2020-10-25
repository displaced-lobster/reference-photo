import state from './state'
import setImage from './mutations'
import getRandomPhoto from './actions'

export default {
  namespaced: true,
  state,
  mutations: { setImage },
  actions: { getRandomPhoto }
}

import Vue from 'vue'

export default async function getRandomPhoto({ commit }, { search }) {
  try {
    const response = await Vue.prototype.$api.getRandomPhoto({ search })
    const image = {
      alt: response.alt_discription,
      id: response.id,
      src: response.urls.regular,
      thumb: response.urls.thumb,
    }
    commit('setImage', image)
  }
  catch (error) {
    console.error(error)
  }
}

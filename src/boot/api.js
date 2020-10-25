import axios from 'axios'
import Vue from 'vue'

const functionsBase = '.netlify/functions/'

Vue.prototype.$api = {
  getRandomPhoto: () => axios.get(`${functionsBase}random-photo`).then(response => response.data)
}

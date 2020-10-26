import axios from 'axios'
import Vue from 'vue'

const functionsBase = '.netlify/functions/'

Vue.prototype.$api = {
  getRandomPhoto: ({ search } = {}) => axios.get(`${functionsBase}random-photo`, { params: { search } })
    .then(response => response.data)
}

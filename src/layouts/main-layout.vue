<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center q-pa-xs">
      <div class="row justify-evenly">
        <q-input v-model.trim="search" dark dense standout @keydown.enter="searchRandomPhoto">
          <template v-slot:after>
            <q-btn flat color="white" icon="fas fa-random" @click="getRandomPhoto" />
          </template>
          <template v-slot:before>
            <q-btn flat color="white" icon="fas fa-search" @click="searchRandomPhoto" />
          </template>
        </q-input>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'main-layout',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('image', ['getRandomPhoto']),
    searchRandomPhoto() {
      if (this.search && this.search.length >= 3) {
        this.getRandomPhoto({ search: this.search })
      }
    }
  }
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer v-model="historyDrawer" dark content-class="bg-secondary" side="right">
      <q-card v-for="image in history" flat class="bg-secondary" :key="image.id">
        <q-img class="history-img" :src="image.thumb" @click="setImage(image)" />
      </q-card>
    </q-drawer>

    <q-footer class="bg-secondary q-pa-xs">
      <div class="row justify-evenly">
        <q-input v-model.trim="search" dark dense standout @keydown.enter="searchRandomPhoto">
          <template v-slot:after>
            <q-btn flat color="primary" icon="fas fa-random" @click="getRandomPhoto" />
          </template>
          <template v-slot:before>
            <q-btn flat color="primary" icon="fas fa-search" @click="searchRandomPhoto" />
          </template>
        </q-input>
      </div>

      <q-btn flat class="history-btn" color="primary" icon="fas fa-history" @click="historyDrawer = !historyDrawer" />
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'main-layout',
  data() {
    return {
      historyDrawer: false,
      search: '',
    }
  },
  computed: {
    ...mapState('image', ['history'])
  },
  methods: {
    ...mapActions('image', ['getRandomPhoto']),
    ...mapMutations('image', ['setImage']),
    searchRandomPhoto() {
      if (this.search && this.search.length >= 3) {
        this.getRandomPhoto({ search: this.search })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.history-btn {
  position: absolute;
  right: 1rem;
  bottom: 0.25rem;
}

.history-img {
  cursor: pointer;
  max-height: 150px;
  margin: 0.5rem 0;
}
</style>

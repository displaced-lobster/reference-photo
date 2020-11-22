<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <div class="control-btns">
        <q-list separator class="bg-primary q-gutter-y-sm" style="border-radius: 10px">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="secondary" name="fas fa-search" />
              <q-popup-edit v-model="searchInput" content-class="bg-secondary">
                <q-input
                  v-model.trim="search"
                  autofocus
                  dark
                  dense
                  standout
                  placeholder="Search"
                  @keydown.enter="searchRandomPhoto"
                >
                  <template v-slot:after>
                    <q-btn flat color="primary" icon="fas fa-search" @click="searchRandomPhoto" />
                  </template>
                </q-input>
              </q-popup-edit>
            </q-item-section>
          </q-item>

          <q-item clickable @click="getRandomPhoto">
            <q-item-section avatar>
              <q-icon color="secondary" name="fas fa-random" />
            </q-item-section>
          </q-item>

          <q-item clickable @click="historyDrawer = !historyDrawer">
            <q-item-section avatar>
              <q-icon color="secondary" name="fas fa-history" />
            </q-item-section>
          </q-item>

          <q-item clickable @click="toggleFullscreen">
            <q-item-section avatar>
              <q-icon color="secondary" :name="fullscreenIcon" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-page-container>

    <q-drawer v-model="historyDrawer" dark content-class="bg-primary" side="right">
      <q-card v-for="image in history" flat class="bg-primary" :key="image.id">
        <q-img class="history-img" :src="image.thumb" @click="setImage(image)" />
      </q-card>
    </q-drawer>
  </q-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'main-layout',
  data() {
    return {
      fullscreen: false,
      historyDrawer: false,
      search: '',
      searchInput: false,
    }
  },
  computed: {
    ...mapState('image', ['history']),
    fullscreenIcon() {
      return this.fullscreen ? 'fas fa-compress-arrows-alt' : 'fas fa-expand-arrows-alt'
    }
  },
  methods: {
    ...mapActions('image', ['getRandomPhoto']),
    ...mapMutations('image', ['setImage']),
    searchRandomPhoto() {
      if (this.search && this.search.length >= 3) {
        this.getRandomPhoto({ search: this.search })
        this.search = ''
        this.searchInput = false
      }
    },
    toggleFullscreen() {
      if (this.fullscreen) {
        this.$q.fullscreen.exit().then(() => { this.fullscreen = false })
      }
      else {
        this.$q.fullscreen.request().then(() => { this.fullscreen = true })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.control-btns {
  bottom: 25vh;
  left: 5px;
  position: absolute;
  width: 55px;
}

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

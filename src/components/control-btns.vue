<template>
  <div>
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

      <q-item clickable @click="localValue = !localValue">
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'control-btns',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      fullscreen: false,
      search: '',
      searchInput: false,
    }
  },
  computed: {
    fullscreenIcon() {
      return this.fullscreen ? 'fas fa-compress-arrows-alt' : 'fas fa-expand-arrows-alt'
    },

    localValue: {
      get() {
        return this.value
      },

      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    ...mapActions('image', ['getRandomPhoto']),
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

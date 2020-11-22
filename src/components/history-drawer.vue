<template>
  <q-drawer v-model="localValue" dark content-class="bg-primary" side="right">
    <q-card v-for="image in history" flat class="bg-primary" :key="image.id">
      <q-img class="history-img" :src="image.thumb" @click="setImage(image)" />
    </q-card>
  </q-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'history-drawer',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState('image', ['history']),
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
    ...mapMutations('image', ['setImage']),
  }
}
</script>

<style lang="scss" scoped>
.history-img {
  cursor: pointer;
  max-height: 150px;
  margin: 0.5rem 0;
}
</style>

<template>
  <q-page class="flex flex-center">
    <q-img v-if="image.src" v-bind="image" contain class="image" />
    <q-icon v-else color="secondary" name="far fa-images" size="xl" />
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'page-index',
  computed: {
    ...mapState('image', ['image'])
  },
}
</script>

<style lang="scss" scoped>
.image {
  max-height: 100vh;
  max-width: 100vw;
}
</style>

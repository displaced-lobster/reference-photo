<template>
  <q-page class="flex flex-center">
    <q-img v-if="imgUrl" contain class="image" :src="imgUrl" />
    <q-btn color="primary" label="Random Photo" @click="getRandomPhoto" />
  </q-page>
</template>

<script>
export default {
  name: 'page-index',
  data() {
    return {
      imgUrl: undefined,
    }
  },
  methods: {
    async getRandomPhoto() {
      try {
        const response = await this.$api.getRandomPhoto()

        this.imgUrl = response.urls.regular
      }
      catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  max-width: 100vw;
  max-height: 90vh;
}
</style>

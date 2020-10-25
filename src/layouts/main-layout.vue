<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center">
      <q-btn color="white" flat label="Random Photo" @click="getRandomPhoto" />
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'main-layout',
  methods: {
    ...mapActions('image', ['getRandomPhoto'])
  }
}
</script>

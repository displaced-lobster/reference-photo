<template>
  <q-page class="flex flex-center">
    <q-input v-model="search" />
  </q-page>
</template>

<script>
export default {
  name: 'page-index',
  data() {
    return {
      search: ''
    }
  }
}
</script>

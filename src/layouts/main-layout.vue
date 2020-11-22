<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <control-btns v-model="historyDrawer" class="control-btns" />
    </q-page-container>
    <history-drawer v-model="historyDrawer" />
  </q-layout>
</template>

<script>
import ControlBtns from 'components/control-btns'
import HistoryDrawer from 'components/history-drawer'

export default {
  name: 'main-layout',
  components: { ControlBtns, HistoryDrawer },
  data() {
    return {
      historyDrawer: false
    }
  },
}
</script>

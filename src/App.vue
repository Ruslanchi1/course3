<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import TheNavbar from './components/TheNavbar'

export default {
  setup() {
    const store = useStore()

    onMounted( () => {
      store.dispatch('loadTasks')
    })
  },
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>

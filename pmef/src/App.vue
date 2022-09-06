<template>
  <div>
    <Navbar/>
    <MainPage/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import MainPage from "./components/MainPage.vue"

export default {
  components: {
    Navbar,
    MainPage,
  },

  setup() {

  },
}
</script>

<style>
</style>

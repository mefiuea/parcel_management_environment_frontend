<template>
  <div>
    <Navbar />
    <MainPage />
    <RegisterPage />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";
import RegisterPage from "./components/RegisterPage.vue";

export default {
  components: {
    Navbar,
    MainPage,
    RegisterPage,
  },

  setup() {},
};
</script>

<style>
</style>

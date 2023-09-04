<template>
  <NavbarRegular></NavbarRegular>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarRegular from './components/NavbarRegular.vue'

export default {
  components: {
    NavbarRegular
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fa709930, #0d00ff3f);
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>

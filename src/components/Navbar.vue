<template>
  <div class="NavbarRegular">
    <div class="NavbarRegular__item">
      <img class="NavbarRegular__logo" src="favicon.ico" alt="logo" height="50px" />
    </div>
    <div class="NavbarRegular__item">
      <ButtonRegular>
        <RouterLink class="NavbarRegular__links" to="/">Main</RouterLink></ButtonRegular
      >
      <ButtonRegular>
        <RouterLink class="NavbarRegular__links" to="/posts">Posts</RouterLink></ButtonRegular
      >
      <ButtonRegular>
        <RouterLink class="NavbarRegular__links" to="/about">About</RouterLink></ButtonRegular
      >
    </div>
  </div>
</template>

<script>
import ButtonRegular from './UI/ButtonRegular.vue'

export default { components: { ButtonRegular } }
</script>

<style>
.NavbarRegular {
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

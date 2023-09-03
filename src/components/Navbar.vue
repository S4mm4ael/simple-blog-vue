<template>
  <div class="NavbarRegular">
    <div class="NavbarRegular__item">
      <img class="NavbarRegular__logo" src="../../public/assets/svg/logo.svg" alt="logo" />
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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.NavbarRegular__item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
}
.NavbarRegular a {
  all: unset;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.NavbarRegular a:hover {
  transform: scale(1.1);
}
.NavbarRegular__logo {
  height: 60px;
  padding-bottom: 5px;
}
</style>

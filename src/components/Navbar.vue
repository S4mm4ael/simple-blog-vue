<template>
  <div class="NavbarRegular">
    <div class="NavbarRegular__item">
      <img
        class="NavbarRegular__logo"
        @click="$router.push('/')"
        src="../../public/assets/svg/logo.svg"
        alt="logo"
      />
    </div>
    <div class="NavbarRegular__item">
      <ButtonRegular @click="$router.push('/')"> Main</ButtonRegular>
      <ButtonRegular @click="$router.push('/posts')"> Posts</ButtonRegular>
      <ButtonRegular @click="$router.push('/about')"> About</ButtonRegular>
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
  font-size: 1.2rem;
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
  transition: 0.3s;
  cursor: pointer;
}
.NavbarRegular__logo:hover {
  transform: scale(1.1);
}
</style>

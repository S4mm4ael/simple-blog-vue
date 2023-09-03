<template>
  <section class="About">
    <h1>About</h1>
    <p>Hi! My name is <b>Semion</b>. I am new to Vue and this is my first study project</p>
    <p class="logo">
      <a href="https://vuejs.org/" target="”_blank”">
        <img src="/assets/svg/vue.svg" alt="vue" height="120px"
      /></a>
    </p>
    <p>Project created with a help of a great channel UlbiTV:</p>
    <p class="logo">
      <a class="blog__link" href="https://www.youtube.com/@UlbiTV" target="”_blank”">
        <img
          class="ulbi__img"
          src="/assets/img/ulbi.jpg"
          alt="Ulbi"
          height="100px"
          title="Ulbi TV"
        />
      </a>
    </p>
    <p>You can see more of my projects here:</p>
    <p class="logo">
      <a href="https://github.com/S4mm4ael" target="”_blank”">
        <img src="/assets/png/gh.png" alt="GitHub" height="80px" title="My GitHub" />
      </a>
    </p>
    <p>
      <a href="https://github.com/S4mm4ael/simple-blog-vue"></a>
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.About {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 0 10px;
  font-size: 1.3rem;
}
.logo {
  cursor: pointer;
  transition: 0.3s;
}
.logo:hover {
  transform: scale(1.1);
}
.blog__link {
  color: black;
}
.ulbi__img {
  border-radius: 50%;
}
</style>

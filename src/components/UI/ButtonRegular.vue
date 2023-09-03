<template>
  <button class="btn">
    <slot class="btn__slot"> </slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonRegular'
}
</script>

<style scoped>
.btn {
  border: 0px solid;
  height: 3rem;
  padding: 10px;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
  font-size: 1em;
  display: flex;
  align-items: center;
}
.btn:hover {
  box-shadow: rgba(0, 110, 255, 0.35) 0px 5px 15px;
}
</style>

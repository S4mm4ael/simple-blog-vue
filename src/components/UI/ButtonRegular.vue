<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonRegular'
}
</script>

<style scoped>
.btn {
  align-self: flex-end;
  border: 0px solid;
  padding: 10px;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 800;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

<template>
  <input type="text" class="input" id="" />
</template>

<script>
export default {
  name: 'InputRegular'
}
</script>

<style scoped>
.input {
  width: 100%;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
}
.input:hover,
.input:focus {
  border: 2px solid turquoise;
}
</style>

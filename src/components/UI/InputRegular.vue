<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" id="" />
</template>

<script>
export default {
  name: 'InputRegular',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  all: unset;
  width: 100%;
  cursor: pointer;
  border: 0px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
}
.input:hover,
.input:focus {
  box-shadow: rgba(0, 255, 255, 0.35) 0px 5px 15px;
}
</style>

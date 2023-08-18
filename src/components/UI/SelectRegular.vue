<template>
  <select :value="modelValue" @input="changeOption">
    <option disabled selected value="">Sort posts</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectRegular',
  props: {
    modelValue: { type: String },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  appearance: none;
  border: 0;
  outline: 0;
  width: 10em;
  height: 3rem;
  padding: 0 4em 0 1em;
  background:
    url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, #3673fd 3em, rgba(255, 255, 255, 0.2) 3em);
  font-size: 1em;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  option {
    color: inherit;
    background-color: #320a28;
  }
  &:focus {
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
}
select:hover {
  box-shadow: rgba(0, 110, 255, 0.35) 0px 5px 15px;
}
</style>

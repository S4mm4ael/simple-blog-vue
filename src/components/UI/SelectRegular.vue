<template>
  <select :modelValue="optionSelected" @change="changeOption" class="select">
    <option disabled selected value="">Sort post by</option>
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
      console.log(event)
      this.$emit('update: optionSelected', event)
    }
  }
}
</script>

<style scoped>
.select {
}
</style>

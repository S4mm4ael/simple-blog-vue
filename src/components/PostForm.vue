<template>
  <form @submit.prevent>
    <h3>Add new post</h3>
    <InputRegular
      v-model="post.title"
      @input="post.title = $event.target.value"
      class="input"
      type="text"
      placeholder="Title"
    />
    <InputRegular
      v-model="post.body"
      @input="post.body = $event.target.value"
      class="input"
      type="text"
      placeholder="Description"
    />
    <ButtonRegular class="btn" @click="createPost"> Create post </ButtonRegular>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 98%;
}

.btn {
  margin-top: 10px;
}
.btn:hover {
  box-shadow: rgba(0, 255, 255, 0.45) 0px 5px 15px;
}
</style>

<template>
  <form @submit.prevent>
    <h3>Add new post</h3>
    <input
      v-model="post.title"
      @input="post.title = $event.target.value"
      class="input"
      type="text"
      placeholder="Title"
    />
    <input
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
}

.input {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.btn {
  margin-top: 10px;
  border: 3px solid turquoise;
}
.btn:hover {
  border: 3px solid blue;
}
</style>

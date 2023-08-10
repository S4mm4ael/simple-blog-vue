<template>
  <div class="app">
    <form @submit.prevent>
      <h3>Add new post</h3>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        name=""
        id=""
        placeholder="Title"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        name=""
        id=""
        placeholder="Description"
      />
      <button class="btn" @click="createPost">Create</button>
    </form>

    <div class="post" v-for="post in posts" :key="post.id">
      <div class=""><strong>Title: </strong>{{ post.title }}</div>
      <div class=""><strong>Description: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Lorem ipsum 1' },
        { id: 2, title: 'JavaScript 2', body: 'Lorem ipsum 2' },
        { id: 3, title: 'JavaScript 3', body: 'Lorem ipsum 3' },
        { id: 4, title: 'JavaScript 4', body: 'Lorem ipsum 4' }
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.post {
  padding: 10px;

  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 10px;
  align-self: flex-end;
  padding: 10px;
  background: none;
  border: 2px solid turquoise;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 800;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.btn:hover {
  border: 2px solid forestgreen;
}
.input {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

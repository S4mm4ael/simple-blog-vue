<template>
  <div>
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
        { id: 3, title: 'JavaScript 3', body: 'Lorem ipsum 3' }
      ]
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.dislikes += 1
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
.post {
  padding: 10px;
  border: 2px solid green;
  margin-top: 10px;
}
</style>

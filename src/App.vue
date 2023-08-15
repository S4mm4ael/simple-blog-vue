<template>
  <div class="app">
    <h1>Posts page</h1>
    <ButtonRegular @click="showDialog">Create new post</ButtonRegular>
    <dialog-regular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </dialog-regular>

    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
import DialogRegular from './components/UI/DialogRegular.vue'

export default {
  components: {
    PostList,
    PostForm,
    DialogRegular
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Lorem ipsum 1' },
        { id: 2, title: 'JavaScript 2', body: 'Lorem ipsum 2' },
        { id: 3, title: 'JavaScript 3', body: 'Lorem ipsum 3' },
        { id: 4, title: 'JavaScript 4', body: 'Lorem ipsum 4' }
      ],
      dialogVisible: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}
</style>

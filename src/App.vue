<template>
  <div class="app">
    <h1>Posts page</h1>
    <div class="app__btn__wrapper">
      <ButtonRegular class="app__btn"> New btn</ButtonRegular>
      <SelectRegular v-model="selectedSort" :options="sortOptions"></SelectRegular>
    </div>
    <ButtonRegular class="app__btn" @click="showDialog">Create new post</ButtonRegular>
    <DialogRegular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </DialogRegular>
    <PostList :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <SpinnerRegular class="app__spinner" v-else>Posts is loading...</SpinnerRegular>
  </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
import axios from 'axios'

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: true,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By content' },
        { value: 'id', name: 'By time' }
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
        setTimeout(async () => {
          const response = await axios.get(url)
          this.posts = response.data
          this.isPostsLoading = false
        }, 1000)
      } catch (e) {
        alert('Error, see console for details')
        console.log(e.message)
      }
    }
  },
  mounted() {
    this.fetchPosts()
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
.app__spinner {
  margin: 0 auto;
  margin-top: 50%;
}
.app__btn__wrapper {
  display: flex;
  justify-content: space-between;
}
</style>

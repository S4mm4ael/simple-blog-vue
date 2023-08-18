<template>
  <div class="app">
    <h1>Posts page</h1>
    <div class="app__btn__wrapper">
      <SelectRegular v-model="selectedSort" :options="sortOptions" />
      <ButtonRegular class="app__btn_create" @click="showDialog">Create new post</ButtonRegular>
    </div>
    <DialogRegular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </DialogRegular>
    <PostList :posts="selectSort" @remove="removePost" v-if="!isPostsLoading" />
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
        { value: 'id', name: 'By id' }
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
  },
  computed: {
    selectSort() {
      if (this.selectedSort === 'id') {
        return [...this.posts].sort((post1, post2) => post1.id - post2.id)
      }
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    }
  }
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[this.selectedSort])
  //     })
  //   }
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fa709930, #0d00ff3f);
  background-size: 100%;
  background-repeat: no-repeat;
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

<template>
  <div class="Posts">
    <h1>Posts page</h1>
    <InputRegular
      class="Posts__search"
      v-model="searchQuery"
      placeholder="Search..."
    ></InputRegular>
    <div class="Posts__btn__wrPostser">
      <SelectRegular v-model="selectedSort" :options="sortOptions" />
      <ButtonRegular class="Posts__btn_create" @click="showDialog">Create new post</ButtonRegular>
    </div>
    <DialogRegular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </DialogRegular>
    <div v-if="!isPostsLoading">
      <PaginationRegular :pagesLimit="this.totalPages" :page="page" @update="changePage($event)" />
      <PostList :posts="searchInPost" @remove="removePost" />
      <PaginationRegular :pagesLimit="this.totalPages" :page="page" @update="changePage($event)" />
    </div>
    <SpinnerRegular class="Posts__spinner" v-else />
    <div ref="observer" class="Posts__observer"></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
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
      searchQuery: '',
      page: 1,
      pageLimit: 20,
      totalPages: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber
      this.fetchPosts()
    },
    async fetchPosts() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url, {
          params: {
            _page: this.page,
            _limit: this.pageLimit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.pageLimit)
        this.posts = response.data
      } catch (e) {
        alert('Error, see console for details')
        console.log(e.message)
      } finally {
        this.isPostsLoading = false
      }
    },
    async fetchMorePosts() {
      try {
        this
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url, {
          params: {
            _page: this.page,
            _limit: this.pageLimit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.pageLimit)
        this.posts = [...this.posts, ...response.data]
        this.page += 1
      } catch (e) {
        alert('Error, see console for details')
        console.log(e.message)
      }
    }
  },
  mounted() {
    this.fetchPosts()

    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.fetchMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  computed: {
    selectSort() {
      if (this.selectedSort === 'id') {
        return [...this.posts].sort((post1, post2) => post1.id - post2.id)
      }
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    searchInPost() {
      return this.selectSort.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style>
.Posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.Posts__spinner {
  margin: 0 auto;
  margin-top: 50%;
}
.Posts__btn__wrPostser {
  display: flex;
  justify-content: space-between;
}
.Posts__observer {
  height: 50px;
}
.Posts__search {
  width: 200px;
}
</style>

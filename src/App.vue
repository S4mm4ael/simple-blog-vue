<template>
  <div class="app">
    <h1>Posts page</h1>
    <InputRegular v-model="searchQuery" placeholder="Search..."></InputRegular>
    <div class="app__btn__wrapper">
      <SelectRegular v-model="selectedSort" :options="sortOptions" />
      <ButtonRegular class="app__btn_create" @click="showDialog">Create new post</ButtonRegular>
    </div>
    <DialogRegular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </DialogRegular>
    <PostList :posts="searchInPost" @remove="removePost" v-if="!isPostsLoading" />
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
      posts: [
        {
          userId: 1,
          id: 8,
          title: 'dolorem dolore est ipsam',
          body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
        },
        {
          userId: 1,
          id: 9,
          title: 'nesciunt iure omnis dolorem tempora et accusantium',
          body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
        },
        {
          userId: 1,
          id: 10,
          title: 'optio molestias id quia eum',
          body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
        },
        {
          userId: 2,
          id: 11,
          title: 'et ea vero quia laudantium autem',
          body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
        },
        {
          userId: 2,
          id: 12,
          title: 'in quibusdam tempore odit est dolorem',
          body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
        },
        {
          userId: 2,
          id: 13,
          title: 'dolorum ut in voluptas mollitia et saepe quo animi',
          body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
        },
        {
          userId: 2,
          id: 14,
          title: 'voluptatem eligendi optio',
          body: 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
        }
      ],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
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
  // mounted() {
  //   this.fetchPosts()
  // },
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
      console.log(this.searchQuery)
      return this.selectSort.filter((post) => post.title.includes(this.searchQuery))
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

<template>
  <div class="Posts">
    <h1>Posts page</h1>
    <InputRegular
      v-focus
      class="Posts__search"
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search..."
    ></InputRegular>
    <div class="Posts__btn__wrPostser">
      <SelectRegular
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
      <ButtonRegular class="Posts__btn_create" @click="showDialog">Create new post</ButtonRegular>
    </div>
    <DialogRegular v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </DialogRegular>
    <div v-if="!isPostsLoading">
      <PostList :posts="searchInPost" @remove="removePost($event)" />
      <PaginationRegular :pagesLimit="totalPages" :page="page" @update="changePage($event)" />
    </div>
    <SpinnerRegular class="Posts__spinner" v-else />
    <div v-intersection="fetchMorePosts" class="Posts__observer"></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ButtonRegular from '../components/UI/ButtonRegular.vue'

export default {
  components: {
    PostList,
    PostForm,
    ButtonRegular
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSelectedSort: 'post/setSelectedSort',
      setSearchQuery: 'post/setSearchQuery',
      removePost: 'post/removePost',
      createPost: 'post/createPost'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      fetchMorePosts: 'post/fetchMorePosts'
    }),
    createPost(post) {
      this.createPost(post)
      this.dialogVisible = false
    },

    showDialog() {
      this.dialogVisible = true
    },
    changePage(pageNumber) {
      this.setPage(pageNumber)
      this.fetchPosts()
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      pageLimit: (state) => state.post.pageLimit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions
    }),
    ...mapGetters({
      selectSort: 'post/selectSort',
      searchInPost: 'post/searchInPost'
    })
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

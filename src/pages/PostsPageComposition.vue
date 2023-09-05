<template>
  <div class="Posts">
    <h1>Posts page using Composition API</h1>

    <div class="Posts__btn__wrPostser">
      <InputRegular
        v-focus
        class="Posts__search"
        v-model="searchQuery"
        placeholder="Search..."
      ></InputRegular>
      <SelectRegular v-model="selectedSort" :options="sortOptions" />
      <!-- <ButtonRegular class="Posts__btn_create" @click="showDialog">Create new post</ButtonRegular> -->
    </div>

    <div v-if="!isPostsLoading">
      <PostList :posts="sortedAndSearchedPosts" />
      <!-- <PaginationRegular :pagesLimit="this.totalPages" :page="page" @update="changePage($event)" /> -->
    </div>
    <SpinnerRegular class="Posts__spinner" v-else />
    <!-- <div v-intersection="fetchMorePosts" class="Posts__observer"></div> -->
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
// import PostForm from '@/components/PostForm.vue'
import { usePosts } from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

export default {
  components: {
    PostList
    // PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By content' },
        { value: 'id', name: 'By id' }
      ]
    }
  },
  setup(props) {
    const { posts, isPostsLoading, totalPages } = usePosts(10)
    const { sortedPosts, selectedSort } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
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
  align-items: center;
}
.Posts__observer {
  height: 50px;
}
.Posts__search {
  width: 400px !important;
  height: 28px !important;
  margin-top: 0 !important;
}
</style>

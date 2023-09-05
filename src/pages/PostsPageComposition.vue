<template>
  <div class="Posts">
    <h1>Posts page using Composition API</h1>
    <!-- <InputRegular
      v-focus
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
    <div v-intersection="fetchMorePosts" class="Posts__observer"></div>-->
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import usePosts from '../hooks/usePosts'

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
      selectedSort: ''
    }
  },
  setup() {
    const { posts, totalPages, isPostsLoading } = usePosts(10)

    return { posts, totalPages, isPostsLoading }
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

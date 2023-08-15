<template>
  <div v-if="posts.length > 0">
    <h2>Posts</h2>
    <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
  </div>
  <h2 class="postList__emptyHeader" v-else>There is no posts...</h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: { PostItem }
}
</script>

<style scoped>
.postList__emptyHeader {
  color: gray;
}
</style>

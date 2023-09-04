<template>
  <div v-show="posts.length > 0">
    <h2>Posts</h2>
    <transition-group name="postList">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post.id)"
      />
    </transition-group>
  </div>
  <h2 class="postList__emptyHeader" v-show="posts.length == 0">There is no posts...</h2>
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
  emits: ['remove'],
  components: { PostItem }
}
</script>

<style scoped>
.postList__emptyHeader {
  color: gray;
}
.postList-item {
  display: inline-block;
  margin-right: 10px;
}
.postList-enter-active,
.postList-leave-active {
  transition: all 0.3s ease;
}
.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.postList-move {
  transition: transform 0.4s ease-in;
}
</style>

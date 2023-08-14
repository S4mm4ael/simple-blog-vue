<template>
  <div class="">
    <h3>List of users:</h3>
    <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
  </div>
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

<style scoped></style>

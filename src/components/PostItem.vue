<template>
  <div class="post">
    <div class="">
      <div class=""><strong>Title: </strong>{{ post.title }}</div>
      <div class=""><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <ButtonRegular class="post__btn" @click="$emit('remove', post)">Delete</ButtonRegular>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btn:hover {
  box-shadow: rgba(255, 0, 0, 0.35) 0px 5px 15px !important;
}
</style>

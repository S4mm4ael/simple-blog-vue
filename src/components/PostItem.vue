<template>
  <div class="post">
    <div class="">
      <div class=""><strong>Title: </strong>{{ post.title }}</div>
      <div class=""><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <ButtonRegular class="post__btn">Delete</ButtonRegular>
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
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btn {
  border: 3px solid orange;
}
.post__btn:hover {
  border: 3px solid orangered;
}
</style>

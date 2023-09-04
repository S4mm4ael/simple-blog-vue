<template>
  <div class="Post">
    <div class="">
      <span class="Post__id">{{ post.id }}</span>
      <div class=""><strong>Title: </strong>{{ post.title }}</div>
      <div class=""><strong>Description: </strong>{{ post.body }}</div>
      <div><b>Likes</b> = {{ $store.state.likes }}</div>
    </div>
    <div class="Post__btnWrapper">
      <ButtonRegular class="Post__btn" @click="$router.push(`/posts/${post.id}`)"
        >Open</ButtonRegular
      >
      <ButtonRegular class="Post__btn" @click="$emit('remove', post)">Delete</ButtonRegular>
    </div>
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
.Post {
  display: flex;
  position: relative;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Post__id {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: grey;
  font-size: 0.5rem;
  height: 10px;
  width: 10px;
}

.Post__btn:hover {
  box-shadow: rgba(255, 0, 0, 0.35) 0px 5px 15px !important;
}
.Post__btnWrapper {
  display: flex;
  gap: 10px;
}
</style>

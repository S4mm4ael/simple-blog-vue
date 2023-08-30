<template>
  <div class="Pagination">
    <div
      v-for="pageNumber in pagesLimit"
      @click="$emit('update', pageNumber)"
      :key="pageNumber"
      class="Pagination__Item"
      :class="{ Pagination__Item_current: page === pageNumber }"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationRegular',
  props: {
    pagesLimit: Number,
    page: Number
  },
  methods: {}
}
</script>

<style>
.Pagination {
  justify-content: center;
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
.Pagination__Item {
  height: 40px;
  width: 40px;
  font-weight: 600;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.Pagination__Item_current {
  color: purple;
  box-shadow: purple 0px 5px 15px;
}
</style>

<template>
  <div class="dialog" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="dialog__content"><slot> </slot></div>
  </div>
</template>

<script>
import toggleMixin from '../../mixins/toggleMixin'

export default {
  name: 'DialogRegular',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 1;
}
.dialog__content {
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
  min-height: 50px;
  min-width: 350px;
  padding: 20px;
}
</style>

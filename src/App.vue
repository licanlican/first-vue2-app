<template>
  <p>test</p>
  <Button> 按钮</Button>
</template>

<script>
import { ref, watchEffect, onMounted } from "vue";
import { Button } from "vant";

export default {
  name: "HelloWorld",
  components: {
    Button,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
:deep(.van-button__text) {
  color: red !important;
}
</style>


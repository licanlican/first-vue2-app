<template>
  <h1 v-for="item in data" :key="item">
    {{ `dsdsd${item}` }}
  </h1>
</template>

<script>
import { ref, watchEffect, onMounted } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    const data = ref([]);
    const index = ref(0);
    onMounted(() => {
      setInterval(() => {
        index.value = index.value + 1;
        data.value[index.value] = index.value;
      }, 2000);
    });
    watchEffect(() => {
      const idx = index.value;
      const dom = document.getElementsByTagName("h1");
      console.log(dom[idx]);
    }, {
      flush: 'post',
      onTrack(e) {
        console.log(e.target.value)
      }
    });

    return { data };
  },
};
</script>


<template>
  <div>{{ data }}</div>
  <input type="range" min="1" max="10" v-model="data" />
</template>

<script>
import { readFile } from "../engine/main";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const data = ref(null);

    onMounted(() => {
      readFile();
    });

    return {
      data,
    };
  },
};
</script>

<style></style>

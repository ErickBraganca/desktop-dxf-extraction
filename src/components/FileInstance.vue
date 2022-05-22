<template>
  <div class="file-container">
    <div class="action-container">
      <i class="fas fa-sign-out-alt" v-on:click="getContent(file)"></i>
    </div>
    <div class="data-container">
      <h3>{{ file.name }}</h3>
      <span>{{ file.date }}</span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: { file: { type: Object, required: true } },
  setup() {
    const store = useStore();

    const getContent = (file) => {
      store.dispatch("SET_READ_INSTANCE", file);
    };
    return {
      getContent,
    };
  },
};
</script>

<style scoped>
.file-container {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  font-size: 1.25rem;
  color: darkgray;
  margin: 1rem 0.5rem;
  height: 50px;
}

.action-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: slategray;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
  text-align: center;
}

.data-container {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.file-container:hover {
  background-color: #22222205;
}

.data-container h3 {
  margin-bottom: 0.5rem;
}

.file-container i {
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

.file-container i:hover {
  color: #f3e178da;
}

.file-container i:active {
  transform: scale(0.95);
}
</style>

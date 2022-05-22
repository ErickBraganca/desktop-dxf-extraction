<template>
  <main class="extract-container">
    <section class="form-container">
      <ExtractForm />
      <div class="historic-container">
        <h2>Latest Files:</h2>
        <FileInstance
          v-bind:key="index"
          v-bind:file="key"
          v-for="(key, index) in files"
        />
      </div>
    </section>
    <section class="table-container">
      <ExtractTable
        v-for="(key, index) in lists"
        v-bind:key="index"
        v-bind:list="key"
      />
    </section>
  </main>
</template>

<script>
import ExtractForm from "@/components/ExtractForm.vue";
import FileInstance from "@/components/FileInstance.vue";
import ExtractTable from "@/components/ExtractTable.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    ExtractForm,
    FileInstance,
    ExtractTable,
  },
  setup() {
    const store = useStore();
    let files = computed(() => store.getters.getLoadedFiles);
    let lists = computed(() => store.getters.getContentFile);

    return {
      files,
      lists,
    };
  },
};
</script>

<style scoped>
.extract-container {
  height: 97%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1rem;
}

.form-container {
  background: #ecf0f1;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  min-width: 200px;
  max-height: 100vh;
}

.table-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  margin: 0 1rem 0 1rem;
}

h2 {
  font-size: 1.5rem;
  color: darkgray;
  margin-left: 1rem;
}
</style>

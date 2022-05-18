<template>
  <div class="extraction-container" draggable="true">
    <form class="extract-form">
      <section class="action-field">
        <div class="options-container">
          <div class="method-container">
            <label for="method">Extraction Method:</label>
            <select class="method" id="method">
              <option>Typical Detail</option>
              <option>Individual Itens</option>
              <option>Total List</option>
            </select>
          </div>
          <div class="collection-container">
            <label for="type">Discipline:</label>
            <select class="type" id="type">
              <option>Electrical</option>
              <option>Instrumentation</option>
              <option>Structural</option>
            </select>
          </div>
          <div class="collection-container">
            <label for="type">Item Collection:</label>
            <select class="type" id="type">
              <option>Diagram</option>
              <option>Plant</option>
              <option>Equipments</option>
            </select>
          </div>
        </div>
        <fieldset class="file-container">
          <label
            class="file-content"
            for="inputFile"
            v-on:mousedown="loadFile"
            >{{ fileStatus }}</label
          >
        </fieldset>
        <div class="button-container-extract">
          <button
            type="button"
            id="buttonSend"
            class="send-button"
            v-on:click="getFile"
          >
            <i class="fas fa-sign-out-alt"></i>
          </button>
          <button type="button" id="buttonDelet" class="delet-button">
            <i class="fas fa-window-close"></i>
          </button>
          <button type="button" id="buttonClean" class="clean-button">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </section>
    </form>
    <div
      class="file-index"
      v-bind:key="index"
      v-for="(key, index) in fileLoaded"
    >
      <span>{{ key.name }}</span>
      <span>{{ key.path }}</span>
    </div>
  </div>
</template>

<script>
import { uploadFile, readFile } from "../engine/main";
import { ref } from "vue";

export default {
  setup() {
    let fileStatus = ref("Pick File");
    let fileLoaded = ref(null);

    const handleFile = {
      load: (status) => {
        if (status) {
          fileStatus.value = "File Loaded";
        }
      },
      read: (file) => {
        fileLoaded.value = file;
      },
    };

    const loadFile = () => {
      uploadFile(handleFile.load);
    };

    const getFile = () => {
      readFile(handleFile.read);
    };

    return {
      fileStatus,
      fileLoaded,
      loadFile,
      getFile,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
/*Setting configuration of extract page style*/
.extraction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ecf0f1;
  border-radius: 1rem;
}

.extract-form {
  margin-left: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: fit-content;
  max-width: 200px;
}
.form-title {
  margin-bottom: 1rem;
}

.data-extraction {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.collection-container {
  margin-top: 1rem;
}

.file-container {
  width: 100%;
  height: 100%;
}

.extraction-container label {
  font-size: 1.5rem;
  color: darkgray;
  width: 100%;
  padding: 4rem 0 4rem 0;
  margin-top: 1rem;
}

.extraction-container label:hover {
  color: rgb(100, 100, 100);
}

.extraction-container button {
  cursor: pointer;
  margin-top: 1rem;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.file-container {
  margin-right: 1rem;
}

.input-file {
  display: none;
}
.file-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ecf0f1;
  box-shadow: inset 5px 5px 9px #d9ddde, inset -5px -5px 9px #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  height: 100%;
  width: 12rem;
}
.action-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.method,
.type {
  margin-top: 0.5rem;
  background-color: #fff;
  height: 30px;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 0.25rem;
  font-size: 1.5rem;
  width: 100%;
}

.button-container-extract {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
}

.button-container-extract i {
  font-size: 2rem;
}

button:active,
.export-button:active {
  transform: scale(0.95);
}
.send-button {
  background-color: #009879;
}
.delet-button {
  background-color: #ff5100;
}
.clean-button {
  background-color: #f80;
}
.extract-table {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 450px;
  margin-top: 2rem;
  padding-top: 1rem;
}

.file-index {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
</style>

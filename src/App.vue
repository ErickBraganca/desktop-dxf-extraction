<template>
  <div class="view-container">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
  list-style: none;
  text-transform: capitalize;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  font-family: "Roboto", sans-serif;
  -webkit-app-region: drag;
}

#app {
  background-color: #313940;
}

.view-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

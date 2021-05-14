<template>
  <div id="app">
    <Grid :width="8" :height="8" />
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";

export default {
  name: "App",
  components: {
    Grid,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: black;
}
</style>

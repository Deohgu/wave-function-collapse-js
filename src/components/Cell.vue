<template>
  <div class="cell">{{ `${x} - ${y}` }}</div>
</template>

<script>
export default {
  name: "cell",
  props: {
    x: Number,
    y: Number,
  },
};
</script>

<style lang="scss">
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 2px;
  width: 50px;
  height: 50px;
}
</style>

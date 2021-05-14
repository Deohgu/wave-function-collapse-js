<template>
  <div class="grid">
    <div
      class="grid__cellRow"
      v-for="(cellcol, cellcolIndex) in height"
      :key="cellcolIndex"
    >
      <Cell
        :x="cellRowIndex"
        :y="cellcolIndex"
        v-for="(cellRow, cellRowIndex) in width"
        :key="cellRowIndex"
      />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "grid",
  props: {
    width: Number,
    height: Number,
  },
  components: { Cell },
};
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-direction: column;

  &__cellRow {
    display: flex;
  }
}
</style>

<template>
  <div class="grid">
    <div
      class="grid__cellRow"
      v-for="(cellcol, cellcolIndex) in gridGenerator(8, 8)"
      :key="cellcolIndex"
    >
      <!-- If statment inside this or the actual cell? -->
      <!-- Checks neighbours and changes original value to false (starts as true) (meaning that it does not match) -->
      <Cell
        :x="cellRow"
        :y="cellcol"
        v-for="(cellRow, cellRowIndex) in width"
        :key="cellRowIndex"
      />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";
import gridGenerator from "../utils/gridGenerator";

console.log(gridGenerator(8, 8)[0]);

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

  padding: 5px;
  border: 2px solid white;

  &__cellRow {
    display: flex;
  }
}
</style>

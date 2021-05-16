<template>
  <div class="grid">
    <div
      class="grid__cellRow"
      v-for="(cellCol, cellColIndex) in gridArray"
      :key="cellColIndex"
    >
      <Cell
        :x="cellRowIndex + 1"
        :y="cellColIndex + 1"
        v-for="(cellRow, cellRowIndex) in cellCol"
        :key="cellRowIndex"
      />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";
import gridGenerator from "../utils/gridGenerator";
// import store from "../store";
import { mapGetters } from "vuex";

// store updating testing
// console.log("store.state.water: ", store.state.identities.water);
// store.dispatch("updateIndentity", { water: { color: "pink" } });
// console.log("store.state.water: ", store.state.identities.water);

export default {
  name: "grid",
  props: {
    width: Number,
    height: Number,
  },
  data() {
    return {
      gridArray: gridGenerator(this.width, this.height),
    };
  },
  components: { Cell },
  computed: {
    ...mapGetters(["water", "coast", "land", "mountain"]),
  },
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

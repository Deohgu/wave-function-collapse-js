<template>
  <div class="grid">
    <div
      class="grid__cellRow"
      v-for="(cellRow, cellRowIndex) in gridArray"
      :key="cellRowIndex"
    >
      <Cell
        v-for="(cellCol, cellColIndex) in cellRow"
        :key="cellColIndex"
        :identitiesInCell="cellCol"
      />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell.vue";
// import gridGenerator from "@/utils/gridGenerator";
// import store from "@/store";
// import { mapGetters } from "vuex";

// store updating testing
// console.log("store.state.water: ", store.state.identities.water);
// store.dispatch("updateIndentity", { water: { colour: "pink" } });
// console.log("store.state.water: ", store.state.identities.water);

export default {
  name: "grid",
  props: {
    width: Number,
    height: Number,
  },
  components: { Cell },
  computed: {
    gridArray() {
      return this.$store.state.grid.grid;
    },
    // ...mapGetters(["identitiesArray"]),
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

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
        :y="cellRowIndex"
        :x="cellColIndex"
      />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell.vue";

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

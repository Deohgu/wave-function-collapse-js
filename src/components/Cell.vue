<template>
  <div
    class="cell"
    :class="{ 'cell--flex': identitiesInCell.length === 1 }"
    @click="traverse(gridArray, 0, 0)"
  >
    <SVGcell
      v-for="(identity, identityIndex) in identitiesInCell"
      :key="identityIndex"
      :identity="identity[0]"
    >
      <!-- {{ logToConsole(`identity[0]: ${identity[0]}`) }} -->
    </SVGcell>
  </div>
</template>

<script>
//  TODO:
//  Clean up the passing of data
//  gridArray should be acessed from the store, along with x, y?

import SVGcell from "./svgCell";

// TESTING grid traverse algorithm ///
// eslint-disable-next-line
import gridTraverse from "@/utils/gridTraverse";

export default {
  name: "cell",
  components: { SVGcell },
  props: {
    identitiesInCell: Array,
  },
  data() {
    return {
      gridArray: this.$store.state.grid.grid,
    };
  },
  methods: {
    logToConsole: (toLog) => console.log(toLog),
    // TESTING grid traverse algorithm ///
    traverse(array, x, y) {
      return gridTraverse(array, x, y);
    },
  },
};
</script>

<style lang="scss">
// TODO:
// Makes this a flexible grid to adapt based on the number of identities

.cell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 2px;
  width: 100px;
  height: 100px;

  &--flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .water {
    fill: hsl(218.02, 51.78%, 50.39%);
  }

  .coast {
    fill: hsl(41.2, 80.5%, 75.9%);
  }

  .land {
    fill: rgb(21, 160, 0);
  }

  .mountain {
    fill: hsl(0, 0%, 46.3%);
  }
}
</style>

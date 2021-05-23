// CURRENT: 2 // What a mess, I cannot render these SVGs dynamically for some
reason! // https://www.youtube.com/watch?v=FTwA-ZnQmCQ
<template>
  <div class="cell">
    <!-- <div
      class="cell__identity"
      v-for="(identity, identityIndex) in identitiesInCell"
      :key="identityIndex"
      :class="identity[0]"
      :ref="`cell${identityIndex}`"
      :style="{ 'font-size': cellWidth / 1.3 + 'px' }"
    > -->
    <!-- <img :src="identity[1].svg" :alt="identity[0]" /> -->
    <!-- {{ DOMParser.parseFromString(identity[1].svg, "image/svg+xml") }} -->
    <!-- {{ identity[1].svg }} -->
    <!-- {{ waterSvg }} -->
    <!-- <img src="`../assets/water.svg`" alt="whatever" /> -->
    <SVGcell
      v-for="(identity, identityIndex) in identitiesInCell"
      :key="identityIndex"
      :identity="identity[0]"
    >
      {{ logToConsole(`identity[0]: ${identity[0]}`) }}
    </SVGcell>
    <!-- <img
      v-for="(identity, identityIndex) in identitiesInCell"
      :key="identityIndex"
      :src="identity[0]"
      :alt="'whatever'"
    /> -->
    <!-- <img :src="water" :alt="'whatever'" /> -->
    <!-- {{ identity[1].symbol }} -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SVGcell from "./svgCell";

export default {
  name: "cell",
  components: { SVGcell },
  data() {
    return {
      cellWidth: 0,
    };
  },
  props: {
    identitiesInCell: Array,
  },
  mounted() {
    // TODO:
    // Make font-size dynamic -> https://stackoverflow.com/a/46899126/10431569
    // Each individual cell has to have a varied size.
    // Probably better to just use an svg...
    // Fonts to SVG -> https://danmarshall.github.io/google-font-to-svg-path/
    // console.log("this.$refs: ", this.$refs.cell0[0].offsetWidth);
    // this.cellWidth = this.$refs.cell0[0].offsetWidth;
  },
  methods: {
    logToConsole: (toLog) => console.log(toLog),
  },
  computed: {
    ...mapGetters(["identitiesArray"]),
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

  &__identity {
    font-size: 35px;
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

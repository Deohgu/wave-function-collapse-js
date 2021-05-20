<template>
  <div class="cell">
    <div
      class="cell__identity"
      v-for="(identity, identityIndex) in identitiesInCell"
      :key="identityIndex"
      :class="identity[0]"
      :ref="`cell${identityIndex}`"
      :style="{ 'font-size': cellWidth / 1.3 + 'px' }"
    >
      {{ identity[1].symbol }}
    </div>
    <!-- {{ logToConsole(identitiesInCell) }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "cell",
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
    this.cellWidth = this.$refs.cell0[0].offsetWidth;
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
    color: hsl(218.02, 51.78%, 50.39%);
  }

  .coast {
    color: hsl(41.2, 80.5%, 75.9%);
  }

  .land {
    color: rgb(21, 160, 0);
  }

  .mountain {
    color: hsl(0, 0%, 46.3%);
  }
}
</style>

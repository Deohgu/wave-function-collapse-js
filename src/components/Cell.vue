<template>
  <div class="cell">
    <div
      class="cell__identity"
      v-for="(identity, identityIndex) in identitiesArray"
      :key="identityIndex"
      :class="identity[0]"
    >
      {{ identity[1].symbol }}
    </div>
    <!-- {{ logToConsole(identitiesArray) }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// TESTING grid traverse algorithm ///
// eslint-disable-next-line
import gridTraverse from "@/utils/gridTraverse";
import gridGenerator from "@/utils/gridGenerator";
import store from "@/store";
// console.log(store.getters.identitiesArray);
gridTraverse(store.state.identities, gridGenerator(8, 8));
////////////

export default {
  name: "cell",
  props: {
    x: Number,
    y: Number,
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

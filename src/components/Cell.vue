<template>
  <!-- TODO: -->
  <!-- Cell maps an array containing the potential identities and displays them -->
  <!-- Identities are will not display as they are removed from the array -->
  <!-- <div class="cell">{{ `${x}:${y}` }}</div> -->
  <div class="cell">
    <div
      class="cell__identity"
      v-for="(identity, identityIndex) in identitiesArray"
      :key="identityIndex"
    >
      {{ identity[0] }}
    </div>
    {{ logToConsole(identitiesArray) }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
  background-color: white;
  margin: 2px;
  width: 100px;
  height: 100px;

  &__identity {
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  }
}
</style>

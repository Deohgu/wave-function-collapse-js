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
// Makes this a flexible grid using grid
// Items need to have a ratio of 1:1

.cell {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  // justify-content: space-evenly;
  align-content: stretch;
  // flex-wrap: wrap;
  // flex: 1;
  // justify-content: center;
  // align-items: center;
  background-color: white;
  margin: 2px;
  width: 100px;
  height: 100px;

  &__identity {
    font-size: 8px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-content: center;
    // flex: 1;
    border: 1px solid red;
    // height: 100%;
  }
}
</style>

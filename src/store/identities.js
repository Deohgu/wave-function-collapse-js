export default {
  state: () => ({
    water: {
      colour: "blue",
      rulesDescription: "Water can only be near Coast or itself",
    },
    coast: {
      colour: "light brown",
      rulesDescription: "Coast must have Land on one side and Sea on the other",
    },
    land: { colour: "green" },
    mountain: {
      colour: "dark grey",
      rulesDescription: "Mountain can only be near Land or itself",
    },
  }),
  mutations: {
    updateWater(state, payload) {
      for (const property in payload) {
        // https://eslint.org/docs/rules/no-prototype-builtins
        if (Object.prototype.hasOwnProperty.call(state.water, property)) {
          state.water[property] = payload[property];
        } else {
          console.log(`Water does not containt ${property}`);
        }
      }
    },
    updateCoast(state, payload) {
      state.coast = payload;
    },
    updateLand(state, payload) {
      state.land = payload;
    },
    updateMountain(state, payload) {
      state.mountain = payload;
    },
  },
  actions: {
    updateIndentities({ commit }, payload) {
      for (const property in payload) {
        // https://eslint.org/docs/rules/no-prototype-builtins
        if (Object.prototype.hasOwnProperty.call(state.water, property)) {
          state.water[property] = payload[property];
          commit("");
        } else {
          console.log(`Water does not containt ${property}`);
        }
      }
    },
  },
};

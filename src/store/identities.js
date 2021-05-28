export default {
  // grass/land: ░ / ⵘ /   Use the other for the trees
  state: () => ({
    water: {
      colour: "blue",
      rulesDescription: "Water can only be near Coast or itself",
      rules: {
        north: ["water", "coast"],
        east: ["water", "coast"],
        south: ["water", "coast"],
        west: ["water", "coast"],
      },
      symbol: "≈",
    },
    coast: {
      colour: "light brown",
      rulesDescription: "Coast must have Land on one side and Sea on the other",
      rules: {
        //  Will need to be refactored to a Standardised way
        //    Have it in a way that conditionally it can be piped to another loop in an if statement
        north: ["water && south: land", "land && south: water"],
        east: ["water && west: land", "land && west: water"],
        south: ["water && north: land", "land && north: water"],
        west: ["water && east: land", "land && east: water"],
      },
      symbol: "◢",
    },
    land: {
      colour: "green",
      symbol: "↟",
      rulesDescription: "Land can be next to itselt, mountains or coast",
      rules: {
        north: ["coast", "land", "mountain"],
        east: ["coast", "land", "mountain"],
        south: ["coast", "land", "mountain"],
        west: ["coast", "land", "mountain"],
      },
    },
    mountain: {
      colour: "dark grey",
      rulesDescription: "Mountain can only be near Land or itself",
      rules: {
        north: ["land", "mountain"],
        east: ["land", "mountain"],
        south: ["land", "mountain"],
        west: ["land", "mountain"],
      },
      symbol: "◮",
    },
  }),
  mutations: {
    waterUpdate(state, payload) {
      state.water = { ...state.water, ...payload };
      // console.log("waterUpdate : ", state, payload);
    },
    coastUpdate(state, payload) {
      state.coast = payload;
    },
    landUpdate(state, payload) {
      state.land = payload;
    },
    mountainUpdate(state, payload) {
      state.mountain = payload;
    },
  },
  actions: {
    /**
     * @param {Object} payload - Object with one key being one of the existing states to update, i.e: water, coast, etc.
     */
    updateIndentity({ commit, state }, payload) {
      // Check if payload state exists
      for (const newState in payload) {
        if (Object.prototype.hasOwnProperty.call(state, newState)) {
          const addToState = {};
          // Check if payload properties exist in state
          for (const newStateProp in payload[newState]) {
            if (
              Object.prototype.hasOwnProperty.call(
                state[newState],
                newStateProp
              )
            ) {
              addToState[newStateProp] = payload[newState][newStateProp];
            } else {
              console.log(
                `ERROR! ${newStateProp} does not exist in ${newState}.`
              );
            }
          }
          // TODO:
          // If equal to original state do not commit
          commit(`${newState}Update`, addToState);
        } else {
          console.log(`ERROR! ${newState} is not a valid identity.`);
        }
      }
    },
  },
  getters: {
    identitiesArray: (state) => Object.entries(state),
  },
};

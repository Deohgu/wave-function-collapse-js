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
  // TODO:
  // Reduce these to just one that update based on the payload
  // Or reduce the actions just to one?
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
      // console.log("state in updateIdentities : ", state);
      // Check if payload state exists
      for (const newState in payload) {
        // console.log("Error logging : ", state, newState);
        if (Object.prototype.hasOwnProperty.call(state, newState)) {
          // console.log("newState: ", newState);
          const addToState = {};
          // Check if payload properties exist in state
          for (const newStateProp in payload[newState]) {
            // console.log("prop in newState: ", newStateProp);
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

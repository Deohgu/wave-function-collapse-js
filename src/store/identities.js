export default {
  // grass/land: ░ / ⵘ /   Use the other for the trees
  state: () => ({
    water: {
      colour: "blue",
      rulesDescription: "Water can only be near Coast or itself",
      symbol: "≈",
      svg: '<svg width="52.148" height="33.399" viewBox="0 0 52.148 33.399" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none"><path d="M 5.176 13.77 L 0 9.57 A 30.657 30.657 0 0 1 3.937 4.944 Q 9.155 0 15.332 0 A 13.376 13.376 0 0 1 18.94 0.54 Q 22.149 1.441 26.019 3.847 A 45.344 45.344 0 0 1 26.27 4.004 A 50.008 50.008 0 0 0 29.21 5.732 Q 33.434 8.008 35.938 8.008 Q 41.992 8.008 46.973 0.684 L 52.148 4.98 A 24.673 24.673 0 0 1 47.498 10.244 A 29.873 29.873 0 0 1 45.361 11.914 Q 41.113 14.941 35.84 14.941 A 14.919 14.919 0 0 1 30.809 14.038 A 19.195 19.195 0 0 1 28.32 12.939 A 110.774 110.774 0 0 1 23.834 10.453 A 90.134 90.134 0 0 1 21.338 8.936 A 18.993 18.993 0 0 0 19.626 7.968 Q 17.719 7.026 16.209 6.942 A 5.25 5.25 0 0 0 15.918 6.934 A 11.658 11.658 0 0 0 13.152 7.246 A 8.743 8.743 0 0 0 10.01 8.691 A 17.523 17.523 0 0 0 8.058 10.378 Q 6.625 11.798 5.176 13.77 Z M 5.176 32.227 L 0 28.027 A 30.657 30.657 0 0 1 3.937 23.401 Q 9.155 18.457 15.332 18.457 A 13.376 13.376 0 0 1 18.94 18.997 Q 22.149 19.898 26.019 22.304 A 45.344 45.344 0 0 1 26.27 22.461 A 50.008 50.008 0 0 0 29.21 24.189 Q 33.434 26.465 35.938 26.465 Q 41.992 26.465 46.973 19.141 L 52.148 23.438 A 24.673 24.673 0 0 1 47.498 28.701 A 29.873 29.873 0 0 1 45.361 30.371 Q 41.113 33.398 35.84 33.398 A 14.919 14.919 0 0 1 30.809 32.495 A 19.195 19.195 0 0 1 28.32 31.397 A 110.774 110.774 0 0 1 23.834 28.91 A 90.134 90.134 0 0 1 21.338 27.393 A 18.993 18.993 0 0 0 19.626 26.425 Q 17.719 25.483 16.209 25.399 A 5.25 5.25 0 0 0 15.918 25.391 A 11.658 11.658 0 0 0 13.152 25.703 A 8.743 8.743 0 0 0 10.01 27.148 A 17.523 17.523 0 0 0 8.058 28.835 Q 6.625 30.255 5.176 32.227 Z" vector-effect="non-scaling-stroke"/></g></svg>',
    },
    coast: {
      colour: "light brown",
      rulesDescription: "Coast must have Land on one side and Sea on the other",
      symbol: "◢",
      svg: '<svg width="56.152" height="54.932" viewBox="0 0 56.152 54.932" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none"><path d="M 0 54.932 L 56.152 0 L 56.152 54.932 L 0 54.932 Z" vector-effect="non-scaling-stroke"/></g></svg>',
    },
    land: {
      colour: "green",
      symbol: "↟",
      svg: '<svg width="36.328" height="88.965" viewBox="0 0 36.328 88.965" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none"><path d="M 4.59 45.41 L 0 43.164 L 15.137 21.289 L 15.137 17.676 L 4.59 28.809 L 0 26.563 L 18.164 0 L 36.328 26.563 L 31.738 28.809 L 21.191 17.676 L 21.191 21.289 L 36.328 43.164 L 31.738 45.41 L 21.191 34.277 L 21.191 88.965 L 15.137 88.965 L 15.137 34.277 L 4.59 45.41 Z" vector-effect="non-scaling-stroke"/></g></svg>',
    },
    mountain: {
      colour: "dark grey",
      rulesDescription: "Mountain can only be near Land or itself",
      symbol: "◮",
      svg: '<svg width="55.566" height="49.805" viewBox="0 0 55.566 49.805" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none"><path d="M 55.566 49.805 L 0 49.805 L 27.051 0 L 55.566 49.805 Z M 27.148 41.895 L 27.148 15.186 L 13.428 41.895 L 27.148 41.895 Z" vector-effect="non-scaling-stroke"/></g></svg>',
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

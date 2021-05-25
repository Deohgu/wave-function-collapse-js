import gridGenerator from "@/utils/gridGenerator";
import store from "./index";

//  TODO:
//  CURRENT:
//  Crashing here, in grid, it does not recognize this.width.
//    What does this refer to in that context?
//  Also crashing because I cannot reach the store here
export default {
  state: () => ({
    width: 4,
    height: 4,
    // grid: gridGenerator(this.width, this.height, store.getters.identitiesArray),
    grid: gridGenerator(4, 4, store.modules.identities.getters.identitiesArray),
  }),
};

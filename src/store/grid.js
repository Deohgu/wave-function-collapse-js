import gridGenerator from "@/utils/gridGenerator";
// import store from "./index";
import identities from "./identities";

export default {
  state: () => ({
    width: 4,
    height: 4,
    // grid: gridGenerator(this.width, this.height, store.getters.identitiesArray),
    //  TODO:
    //  Improve this convertion, we want an array with each identity as an object
    //    Ideally use the getter in identities
    grid: gridGenerator(8, 8, Object.entries(identities.state())),
  }),
};

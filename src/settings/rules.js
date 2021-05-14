export default {
  water: { colour: "blue",
    softRules: "Water can only be near Coast or itself"
  },
  coast: { colour: "light brown", softRules: "Coast must have Land on one side and Sea on the other" },
  land: { colour: "green" },
  mountain: { colour: "dark grey", softRules: "Mountain can only be near Land or itself" },
};

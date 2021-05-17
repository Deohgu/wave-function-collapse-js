// CURRENT:
// Define a way to traverse the grid and check based on the rules
// QUESTION:
// Should the original grid container the various identities already there? Very likely!
// No point having it empty and then running through identities state in Cell.

export default (identities, arr) => {
  // arr.forEach((curr) => {
  //   console.log(curr);
  // });

  console.log("identities: ", identities);
  console.log("arr: ", arr);

  // water, coast, land, mountain
  // for (const curr in identities) {
  //   console.log(curr);
  // }
};

// CURRENT:
// Define a way to traverse the grid and check based on the rules

/////////////
//  Fill array with arrays matching the number of identities in each group
//    [[{index: 2, amount: 4}, {index: 4, amount: 4}],[{index: 3, amount: 3}],[],[]]
//  Last array in the list containing at least one object is the least entropy one
//  Pick one at random from the last array that contains objects and splice everything else out
//
/////////////

export default (arr) => {
  const arrClone = [...arr];

  // const entropyList = [];

  arrClone.forEach((arrY) => {
    arrY.forEach((arrX) => {
      console.log(arrX);
    });
  });

  // console.log("gridTraverve, arr: ", arr);
};

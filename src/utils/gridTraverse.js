// CURRENT:
// Define a way to traverse the grid and check based on the rules

/////////////
//  Calls gridTraverse to check neighbours
//  Copy original array
//  if any identity is invalid
//  split out invalid identities and add that block to neighboorArray
//  sort neighboorArray from lowest to heightest
//  randomize order of equal numbers
//  forEach of that neighboorArray call gridTraverse
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

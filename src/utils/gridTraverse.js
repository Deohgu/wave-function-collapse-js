// CURRENT:
// Define a way to traverse the grid and check based on the rules

export default (arr) => {
  const arrClone = [...arr];

  arrClone.forEach((arrY) => {
    arrY.forEach((arrX) => {
      console.log(arrX);
    });
  });

  // console.log("gridTraverve, arr: ", arr);
};

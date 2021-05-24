// CURRENT:
// Define a way to traverse the grid and check based on the rules

/////////////
//  Calls gridTraverse to check neighbours
//  Copy original array
//  If any identity is invalid
//  Split out invalid identities and add that cell to neighboorArray
//  Sort neighboorArray from lowest to heightest
//  Randomize order of equal numbers
//  ForEach of that neighboorArray call gridTraverse
/////////////

export default (array, current) => {
  // const arrClone = [...array];

  // If not against a wall
  // Check Minesweeper repository on how I solved this issue
  // x and y are equal to the index in the loops which determines the current cell
  // eslint-disable-next-line no-unused-vars
  const arrayDirections = (x, y, array) => {
    return {
      up: array[y - 1][x],
      right: array[y][x + 1],
      down: array[y + 1][x],
      left: array[y][x - 1],
    };
  };

  // Traverses entire array
  // arrClone.forEach((arrY) => {
  //   arrY.forEach((arrX) => {
  //     console.log(arrX);
  //   });
  // });

  console.log("gridTraverve, array, current: ", array, current);
};

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

export default (array, x, y) => {
  // const arrClone = [...array];

  //  Need to figure out a way for these not to crash when x and y is equal to 0.
  //    Perhaps like before, make it a function that receives x and y arguments
  //      Or BETTER YET!, have it as an object but the keys are methods that key called in the if statements when needed
  //      thus never using something when it will crash
  // If not against a wall
  // x and y are equal to the index in the loops which determines the current cell
  // eslint-disable-next-line no-unused-vars
  // const allDirections = {
  //   up: array[y - 1][x],
  //   right: array[y][x + 1],
  //   down: array[y + 1][x],
  //   left: array[y][x - 1],
  // };

  //  Directions for each position in each if section
  // eslint-disable-next-line no-unused-vars
  // const conditionalDirections = {
  //   topWall: [allDirections.right, allDirections.down, allDirections.left],
  //   rightWall: [allDirections.up, allDirections.down, allDirections.left],
  //   topRightCorner: [allDirections.down, allDirections.left],
  //   bottomCorner: [allDirections.up, allDirections.left],
  //   bottomWall: [allDirections.up, allDirections.right, allDirections.left],
  //   leftBottomCorner: [allDirections.up, allDirections.right],
  //   leftWall: [allDirections.up, allDirections.right, allDirections.down],
  //   topLeftCorner: [allDirections.right, allDirections.down],
  //   noWall: [
  //     allDirections.up,
  //     allDirections.right,
  //     allDirections.down,
  //     allDirections.left,
  //   ],
  // };

  // Find if against the wall
  //  TOP WALL
  //    if (y === 0)
  //  RIGHT WALL
  //    if (x === array[0].length - 1)
  //  BOTTOM WALL
  //    if (y === array.length - 1)
  //  LEFT WALL
  //    if (x === 0)
  //  CORNERS
  //    Chain wall conditionals. e.g: if (top wall) if (right wall) run right corner code if (left wall)

  // Traverses entire array
  // arrClone.forEach((arrY) => {
  //   arrY.forEach((arrX) => {
  //     console.log(arrX);
  //   });
  // });

  console.log("gridTraverve, array, x, y: ", array, x, y);
};

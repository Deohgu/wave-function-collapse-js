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

  // If not against a wall
  // x and y are equal to the index in the loops which determines the current cell
  // eslint-disable-next-line no-unused-vars
  const allDirections = {
    up() {
      return array[y - 1][x];
    },
    right() {
      return array[y][x + 1];
    },
    down() {
      return array[y + 1][x];
    },
    left() {
      return array[y][x - 1];
    },
  };

  //  Directions for each position in each if section
  // eslint-disable-next-line no-unused-vars
  const conditionalDirections = {
    topWall: [allDirections.right(), allDirections.down, allDirections.left],
    rightWall: [allDirections.up, allDirections.down, allDirections.left],
    topRightCorner: [allDirections.down, allDirections.left],
    bottomCorner: [allDirections.up, allDirections.left],
    bottomWall: [allDirections.up, allDirections.right, allDirections.left],
    leftBottomCorner: [allDirections.up, allDirections.right],
    leftWall: [allDirections.up, allDirections.right, allDirections.down],
    topLeftCorner: [allDirections.right, allDirections.down],
    noWall: [
      allDirections.up,
      allDirections.right,
      allDirections.down,
      allDirections.left,
    ],
  };

  console.log("TESTING: ", conditionalDirections.topWall[0]);

  //  Starts collapsing
  if (y === 0) {
    //  TOP RIGHT CORNER
    if (x === array[0].length - 1) {
      console.log("TOP RIGHT CORNER");
      //  TOP LEFT CORNER
    } else if (x === 0) {
      console.log("TOP LEFT CORNER");
      //  TOP WALL
    } else {
      console.log("TOP WALL");
    }
  } else if (y === array.length - 1) {
    //  BOTTOM RIGHT CORNER
    if (x === array[0].length - 1) {
      console.log("BOTTOM LEFT CORNER");
      // BOTTOM LEFT CORNER
    } else if (x === 0) {
      console.log("BOTTOM RIGHT CORNER");
      //  BOTTOM WALL
    } else {
      console.log("BOTTOM WALL");
    }
    //  RIGHT WALL ONLY
  } else if (x === array[0].length - 1) {
    console.log("RIGHT WALL");
    //  LEFT WALL ONLY
  } else if (x === 0) {
    console.log("LEFT WALL");
    // AWAY FROM WALL
  } else {
    console.log("AWAY FROM WALL");
  }

  // Traverses entire array
  // arrClone.forEach((arrY) => {
  //   arrY.forEach((arrX) => {
  //     console.log(arrX);
  //   });
  // });

  console.log("gridTraverve, array, x, y: ", array, x, y);
};

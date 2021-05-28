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

export const gridTraverse = (array, y, x) => {
  // eslint-disable-next-line no-unused-vars
  const arrayClone = [...array];

  // If not against a wall
  // x and y are equal to the index in the loops which determines the current cell
  // eslint-disable-next-line no-unused-vars
  const allDirections = {
    north() {
      return array[y - 1][x];
    },
    east() {
      return array[y][x + 1];
    },
    south() {
      return array[y + 1][x];
    },
    west() {
      return array[y][x - 1];
    },
  };

  //  Directions for each position in each if section
  // eslint-disable-next-line no-unused-vars
  const conditionalDirections = {
    northWall: ["east", "south", "west"],
    northEastCorner: ["south", "west"],
    eastWall: ["north", "south", "west"],
    southEastCorner: ["north", "west"],
    southWall: ["north", "east", "west"],
    southWestCorner: ["north", "east"],
    westWall: ["north", "east", "south"],
    northWestCorner: ["east", "south"],
    noWall: ["north", "east", "south", "west"],
  };

  // const neighboursCue = []

  //  Starts collapsing
  if (y === 0) {
    //  North East CORNER
    if (x === array[0].length - 1) {
      console.log("North East CORNER");
      //  North West CORNER
    } else if (x === 0) {
      console.log("North West CORNER");
      //  Loops valid directions for this particular location and returns then as a string
      conditionalDirections.northWestCorner.forEach((direction) => {
        //  From the valid directions get the cells in that direction of original cell
        allDirections[direction]().forEach((identity) => {
          //  If the current identity in the current cell is not in the rules array of the original cell identity of the current direction, remove it from the current identity from the cell
          if (
            arrayClone[y][x][0][1].rules[direction].indexOf(identity[0]) === -1
          ) {
            //  TODO:
            //  If identity can not be in that direction split from arrayClone
            //  If at least one identity was split, add to the back line of neighboursCue the current location of the cell
          }
        });
        //  Loop through neighboursCue and call gridTraverse(arrayClone, )
      });
      //  North WALL
    } else {
      console.log("North WALL");
    }
  } else if (y === array.length - 1) {
    //  South West CORNER
    if (x === array[0].length - 1) {
      console.log("South West CORNER");
      // South East CORNER
    } else if (x === 0) {
      console.log("South East CORNER");
      //  South WALL
    } else {
      console.log("South WALL");
    }
    //  East WALL ONLY
  } else if (x === array[0].length - 1) {
    console.log("East WALL");
    //  West WALL ONLY
  } else if (x === 0) {
    console.log("West WALL");
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

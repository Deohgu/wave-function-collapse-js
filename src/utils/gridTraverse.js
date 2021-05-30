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
  const arrayClone = JSON.parse(JSON.stringify(array));

  //  If not against a wall
  //  x and y are equal to the index in the loops which determines the current cell
  //    e.g: array[allDirections[east].y()][allDirections[east].x()]
  //    Allows usage with multiple arrays
  const allDirections = {
    north: {
      y() {
        return y - 1;
      },
      x() {
        return x;
      },
    },
    east: {
      y() {
        return y;
      },
      x() {
        return x + 1;
      },
    },
    south: {
      y() {
        return y + 1;
      },
      x() {
        return x;
      },
    },
    west: {
      y() {
        return y;
      },
      x() {
        return x - 1;
      },
    },
  };

  //  Directions for each position in each if section
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

  //  Blocks that had identities split from it
  //    Each block will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
  //  Structure of values to be defined
  // const neighboursCue = []

  //  Starts collapsing
  //  North Wall Section
  if (y === 0) {
    //  North East CORNER
    if (x === array[0].length - 1) {
      console.log("North East CORNER");
      //  North West CORNER
    } else if (x === 0) {
      console.log("North West CORNER");
      //  Loops valid directions for this particular location and returns then as a string
      conditionalDirections.northWestCorner.forEach((direction) => {
        //  From the valid directions get the cell in that direction of original cell
        arrayClone[allDirections[direction].y()][
          allDirections[direction].x()
        ].forEach((identity) => {
          //  If this identity, in this cell, is not in the rules of the original cell of its allowed neighbours of that direction remove it
          if (
            arrayClone[y][x][0][1].rules[direction].indexOf(identity[0]) === -1
          ) {
            //  If identity can not be in that direction split from original array

            //  Splices / mutates original array the current identity, thus instantly displays the mutation
            //  How it works: Selects exact cell in which it currently is in,
            array[allDirections[direction].y()][
              allDirections[direction].x()
            ].splice(array.indexOf(identity[0]), 1);
            //  If at least one identity was split, add to the back line of neighboursCue to call the current location of the cell
          }
        });
        //  Loop through neighboursCue and call gridTraverse(arrayClone, )
      });
      //  North WALL
    } else {
      console.log("North WALL");
    }
    //  South Wall Section
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
};

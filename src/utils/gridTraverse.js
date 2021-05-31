// CURRENT:
//  TODO:
// Define a way to traverse the grid and check based on the rules

//  TODO:
//  Split the function into smaller functions
//    read up on functional programming and refactoring
//    In essence all the complex code will be abstracted with self explanatory named functions

/////////////
//  Calls gridTraverse to check neighbours
//  Copy original array
//  If any identity is invalid
//  Split out invalid identities and add that cell to neighboorArray
//  Sort neighboorArray from lowest to heightest
//  Randomize order of equal numbers
//  ForEach of that neighboorArray call gridTraverse
//    Not sure a loop is needed, recursevely traverses the grid anyway
/////////////
export const gridTraverse = (array, y, x) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  if (array[y][x].length > 1) {
    //  Select an identity at random of the ones still available / splice off the others
    //  Picks a random valid index
    const randomIdentityIndex = Math.floor(
      Math.random() * (array[y][1].length - 0) + 0
    );

    //  Only return selected identity
    arrayClone[y][x] = arrayClone[y][x].slice(
      randomIdentityIndex,
      randomIdentityIndex + 1
    );
  }

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
  //    Each cell will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
  //  Structure -> [{y:0, x:0, amount: 2}, {y:0, x: 1, amount: 1}, ...]
  let neighboursCue = [];
  //  at the end do one pass with array.sort(), it checks each index and compares the index.amount to sort

  //  FIXME:
  //  SKIP cells with one identity!

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
        const thisY = [allDirections[direction].y()];
        const thisX = [allDirections[direction].x()];
        //  From the valid directions get the cell in that direction of original cell
        array[thisY][thisX].forEach((identity) => {
          //  If this identity, in this cell, is not in the rules of the original cell of its allowed neighbours of that direction remove it
          if (
            arrayClone[y][x][0][1].rules[direction].indexOf(identity[0]) === -1
          ) {
            //  If current identity can not be in that direction splice from cloned array
            arrayClone[thisY][thisX].splice(
              arrayClone[thisY][thisX].findIndex((eachId) => {
                if (eachId[0] === identity[0]) {
                  return true;
                }
              }),
              1
            );
          }
        });
        //  TODO:
        //  Somehow soft-code amount of identities
        //  If at least one identity was split, add to the back line of neighboursCue to call the current location of the cell
        if (
          arrayClone[thisY][thisX].length < 4 //  Hard coded amount of identities
        )
          neighboursCue.push({
            y: allDirections[direction].y(),
            x: allDirections[direction].x(),
            amount: arrayClone[thisY][thisX].length,
          });
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

  //  Sorts blocks in neighboursCue by ascending amount of identities, i.e lower entropy
  neighboursCue = neighboursCue.sort((a, b) => {
    if (a.amount === b.amount) {
      return Math.floor(Math.random() * (1 - -1) + -1); // If equal randomize order
    }
    return a.amount - b.amount;
  });

  console.log("arrayClone at end: ", arrayClone);
  // if ("Grid has fully collapsed") {
  return arrayClone;
  // }

  //  TODO:
  //  Call gridTraverse for the newly selected cell if grid hasn't yet fully collapsed
  //  Should it traverse neighboursCue instead and call all?
  //    Recursevely that might create issues. If one cell is already empty when going back to previous cells in neighboursCue array
  //   //  Lowest entropy cell x and y
  //   const y = neighboursCue[0].y;
  //   const x = neighboursCue[0].x;
  //   gridTraverse(arrayClone, y, x);
};

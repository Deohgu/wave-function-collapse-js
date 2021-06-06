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

//  allDirections:
//    If not against a wall
//    x and y are equal to the index in the loops which determines the current cell
//      e.g: array[allDirections[east].y()][allDirections[east].x()]
//      Allows usage with multiple arrays

//  conditionalDirections:
//    Directions for each position in each if section
import {
  allDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

import filterIdentities from "@/utils/traverse/filterIdentities";
import addsModifiedBlock from "@/utils/traverse/addsModifiedBlock";
import picksRandomIdentity from "./traverse/picksRandomIdentity";

export const gridTraverse = (array, y, x) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  const coords = {
    y,
    x,
    currY: 0,
    currX: 0,
  };

  //  Cells that had identities split from it -> [{y:0, x:0, amount: 2}, ...]
  //    Each cell will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
  //  at the end do one pass with array.sort(), it checks each index and compares the index.amount to sort
  let neighboursCallStack = [];

  //  Of the ones still available select an identity at random and remove the others
  arrayClone = picksRandomIdentity(array, coords);

  //  FIXME:
  //  SKIP cells with one identity!

  //  Starts collapsing
  //  North Wall Section
  if (y === 0) {
    //  North East CORNER
    if (x === array[0].length - 1) {
      console.log("North East CORNER");

      // Checks valid neighbouring cells
      conditionalDirections.northEastCorner.forEach((direction) => {
        coords.currY = [allDirections(y, x)[direction].y()];
        coords.currX = [allDirections(y, x)[direction].x()];

        //  Filters out invalid neighbouring identities according to the current identity rules
        arrayClone = filterIdentities(direction, arrayClone, coords);

        //  If at least one identity was split from cell being checked, add to stack
        neighboursCallStack = addsModifiedBlock(
          arrayClone,
          coords,
          neighboursCallStack,
          allDirections,
          direction
        );
      });

      //  North West CORNER
    } else if (x === 0) {
      console.log("North West CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the cells cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "northWestCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCallStack
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCallStack = filteredIdentities.neighboursCallStackClone;

      //  North WALL
    } else {
      console.log("North WALL");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the cells cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "northWall",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCallStack
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCallStack = filteredIdentities.neighboursCallStackClone;
    }
    //  South Wall Section
  } else if (y === array.length - 1) {
    //  South West CORNER
    if (x === array[0].length - 1) {
      console.log("South West CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the cells cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southWestCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCallStack
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCallStack = filteredIdentities.neighboursCallStackClone;

      // South East CORNER
    } else if (x === 0) {
      console.log("South East CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the cells cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southEastCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCallStack
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCallStack = filteredIdentities.neighboursCallStackClone;

      //  South WALL
    } else {
      console.log("South WALL");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the cells cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southWall",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCallStack
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCallStack = filteredIdentities.neighboursCallStackClone;
    }
    //  East WALL ONLY
  } else if (x === array[0].length - 1) {
    console.log("East WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the cells cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "eastWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCallStack
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCallStack = filteredIdentities.neighboursCallStackClone;

    //  West WALL ONLY
  } else if (x === 0) {
    console.log("West WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the cells cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "westWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCallStack
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCallStack = filteredIdentities.neighboursCallStackClone;

    // AWAY FROM WALL
  } else {
    console.log("AWAY FROM WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the cells cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "noWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCallStack
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCallStack = filteredIdentities.neighboursCallStackClone;
  }

  //  Sorts cells in neighboursCallStack by ascending amount of identities, i.e lower entropy
  neighboursCallStack = neighboursCallStack.sort((a, b) => {
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
  //  Should it traverse neighboursCallStack instead and call all?
  //    Recursevely that might create issues. If one cell is already empty when going back to previous cells in neighboursCallStack array
  //   //  Lowest entropy cell x and y
  //   const y = neighboursCallStack[0].y;
  //   const x = neighboursCallStack[0].x;
  //   gridTraverse(arrayClone, y, x);
};

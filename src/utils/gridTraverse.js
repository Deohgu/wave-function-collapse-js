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

export const gridTraverse = (array, y, x) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  //  Blocks that had identities split from it -> [{y:0, x:0, amount: 2}, ...]
  //    Each cell will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
  //  at the end do one pass with array.sort(), it checks each index and compares the index.amount to sort
  let neighboursCue = [];

  //  Of the ones still available select an identity at random and remove the others
  if (array[y][x].length > 1) {
    const randomIdentityIndex = Math.floor(Math.random() * array[y][1].length);

    arrayClone[y][x] = arrayClone[y][x].slice(
      randomIdentityIndex,
      randomIdentityIndex + 1
    );
  }

  //  FIXME:
  //  SKIP cells with one identity!

  const coords = {
    y,
    x,
    thisY: 0,
    thisX: 0,
  };

  //  Starts collapsing
  //  North Wall Section
  if (y === 0) {
    //  North East CORNER
    if (x === array[0].length - 1) {
      console.log("North East CORNER");

      conditionalDirections.northEastCorner.forEach((direction) => {
        coords.thisY = [allDirections(y, x)[direction].y()];
        coords.thisX = [allDirections(y, x)[direction].x()];

        //  Filters out invalid neighbouring identities
        //    Returns an object containing the new array and the blocks cued to be called recursevely
        arrayClone = filterIdentities(direction, arrayClone, coords);

        //  If at least one identity was split, add to the back line of neighboursCueClone to call the current location of the cell
        neighboursCue = addsModifiedBlock(
          arrayClone,
          coords,
          neighboursCue,
          allDirections,
          direction
        );
      });

      //  North West CORNER
    } else if (x === 0) {
      console.log("North West CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the blocks cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "northWestCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCue
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCue = filteredIdentities.neighboursCueClone;

      //  North WALL
    } else {
      console.log("North WALL");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the blocks cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "northWall",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCue
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCue = filteredIdentities.neighboursCueClone;
    }
    //  South Wall Section
  } else if (y === array.length - 1) {
    //  South West CORNER
    if (x === array[0].length - 1) {
      console.log("South West CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the blocks cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southWestCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCue
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCue = filteredIdentities.neighboursCueClone;

      // South East CORNER
    } else if (x === 0) {
      console.log("South East CORNER");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the blocks cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southEastCorner",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCue
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCue = filteredIdentities.neighboursCueClone;

      //  South WALL
    } else {
      console.log("South WALL");
      //  Filters out invalid neighbouring identities
      //    Returns an object containing the new array and the blocks cued to be called recursevely
      const filteredIdentities = filterIdentities(
        "southWall",
        allDirections,
        conditionalDirections,
        arrayClone,
        y,
        x,
        neighboursCue
      );
      arrayClone = filteredIdentities.arrayClone;
      neighboursCue = filteredIdentities.neighboursCueClone;
    }
    //  East WALL ONLY
  } else if (x === array[0].length - 1) {
    console.log("East WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the blocks cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "eastWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCue
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCue = filteredIdentities.neighboursCueClone;

    //  West WALL ONLY
  } else if (x === 0) {
    console.log("West WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the blocks cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "westWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCue
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCue = filteredIdentities.neighboursCueClone;

    // AWAY FROM WALL
  } else {
    console.log("AWAY FROM WALL");
    //  Filters out invalid neighbouring identities
    //    Returns an object containing the new array and the blocks cued to be called recursevely
    const filteredIdentities = filterIdentities(
      "noWall",
      allDirections,
      conditionalDirections,
      arrayClone,
      y,
      x,
      neighboursCue
    );
    arrayClone = filteredIdentities.arrayClone;
    neighboursCue = filteredIdentities.neighboursCueClone;
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

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

//  validSearchDirections:
//    Directions for each position in each if section
import {
  allDirections,
  validSearchDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

import filterIdentities from "@/utils/traverse/filterIdentities";
import addsModifiedBlock from "@/utils/traverse/addsModifiedBlock";
import picksRandomIdentity from "./traverse/picksRandomIdentity";

let lastArrayupdatedOutsideFunction = [];

export const gridTraverse = (array, y, x) => {
  console.log("--START------------------------------------------");
  console.log("array: ", array);

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
  arrayClone = picksRandomIdentity(arrayClone, coords);

  conditionalDirections(coords, array).forEach((isCorrectGridArea, index) => {
    if (isCorrectGridArea) {
      const directionNames = Object.keys(validSearchDirections);
      const currValidSearchDirections =
        validSearchDirections[directionNames[index]];

      console.log(directionNames[index]);

      //  Checks valid neighbouring cells
      currValidSearchDirections.forEach((direction) => {
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
    }
  });

  //  Sorts cells in neighboursCallStack by ascending amount of identities, i.e lower entropy
  neighboursCallStack = neighboursCallStack.sort((a, b) => {
    if (a.amount === b.amount) {
      return Math.floor(Math.random() * (1 - -1) + -1); // If equal randomize order
    }
    return a.amount - b.amount;
  });

  // console.log("arrayClone at end: ", arrayClone);
  // console.log("neighbour Call Stack at end: ", neighboursCallStack);
  // console.log("------------------");
  // console.log("Y: ", y);
  // console.log("X: ", x);
  // console.log("------------------");

  //  FIXME:
  //  Why is the entire grid collapsing to 0 identities?
  //    This only allows it to run twice..
  //    What is happening?
  // if (x >= 1 || y >= 1) {
  // return arrayClone;
  // }

  //  TODO:
  //  Call gridTraverse for the newly selected cell if grid hasn't yet fully collapsed
  //  Should it traverse neighboursCallStack instead and call all?
  //    Recursevely that might create issues. If one cell is already empty when going back to previous cells in neighboursCallStack array
  //   //  Lowest entropy cell x and y

  lastArrayupdatedOutsideFunction = arrayClone;
  neighboursCallStack.forEach((stackItem) => {
    console.log("stackItem: ", stackItem);
    const stackItemY = stackItem.y;
    const stackItemX = stackItem.x;

    lastArrayupdatedOutsideFunction = arrayClone;
    if (arrayClone[stackItemY][stackItemX].length > 1) {
      gridTraverse(arrayClone, stackItemY, stackItemX);
    }
    console.log("LOG AFTER GRIDTRAVERSE");
  });

  //  Correct approach due to being able to return from loop
  // With the loop the grid returns undefined again. because the return probably only exists the loop instead of actually returning the result, thus in Cell the result is undefined
  // for (let i = 0, n = neighboursCallStack.length; i < n; i++) {
  //   console.log("current: ", y, x);
  //   console.log("neighbours: ", neighboursCallStack);
  //   // if (neighboursCallStack.length === 0) {
  //   //   console.log("RETURNING arrayClone: ", arrayClone);
  //   //   const arrayCloneClone = JSON.parse(JSON.stringify(arrayClone));
  //   //   return arrayCloneClone;
  //   // }

  //   // neighboursCallStack.splice(0, 1);
  //   gridTraverse(arrayClone, stackItemY, stackItemX);
  // }
  return lastArrayupdatedOutsideFunction;
};

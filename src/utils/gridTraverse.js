//  TODO:
//  Split the function into smaller functions
//    read up on functional programming and refactoring
//    In essence all the complex code will be abstracted with self explanatory named functions

// CURRENT:
//  TODO:
//    Improving performance idea:
//      Neighbour array to be passed in the parameters
//      Function always checks neighbourStack[0] argument
//      Consequently creates a clone without neighbourStack[0]
//        And adds to it new potential neighbours

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

import filterIdentities from "@/utils/traverse/filterIdentities";
import addsModifiedBlock from "@/utils/traverse/addsModifiedBlock";
import picksRandomIdentity from "./traverse/picksRandomIdentity";
import filterCellsToCheck from "./traverse/filterCellsToCheck";

let lastArrayUpdatedOutsideFunction = [];

export const gridTraverse = (array, y, x) => {
  const t0Root = performance.now();
  console.log("--START------------------------------------------");
  // console.log("array: ", array);
  console.log("Current block", array[y][x]);

  let arrayClone = JSON.parse(JSON.stringify(array));

  const coords = {
    y,
    x,
  };

  //  Cells that had identities split from it -> [{y:0, x:0, amount: 2}, ...]
  //    Each cell will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
  //  at the end do one pass with array.sort(), it checks each index and compares the index.amount to sort
  let neighboursCallStack = [];

  //  Of the ones still available select an identity at random and remove the others
  arrayClone = picksRandomIdentity(arrayClone, coords);

  //  TODO:
  //    Should this return the entire Cell and in the end just have the returned array copy these?
  //    Or the y, x?
  //      Going to try this first
  const filteredCellsCoordsArray = filterCellsToCheck(arrayClone, y, x);

  if (filteredCellsCoordsArray.length > 0) {
    //  Filters out invalid neighbouring identities according to the current identity rules
    arrayClone = filterIdentities(filteredCellsCoordsArray, arrayClone, y, x);

    //  If at least one identity was split from cell being checked, add to stack
    neighboursCallStack = addsModifiedBlock(
      arrayClone,
      filteredCellsCoordsArray
    );
  }

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

  // console.log("filteredCellsCoordsArray: ", filteredCellsCoordsArray);
  console.log("neighbours Call Stack: ", neighboursCallStack);

  lastArrayUpdatedOutsideFunction = arrayClone;
  neighboursCallStack.forEach((stackItem) => {
    const stackItemY = stackItem.y;
    const stackItemX = stackItem.x;

    console.log("neighbourstack", JSON.stringify(stackItem));

    lastArrayUpdatedOutsideFunction = arrayClone;
    // if (arrayClone[stackItemY][stackItemX].length > 1) {
    // console.log("stackItem: ", stackItem);
    gridTraverse(arrayClone, stackItemY, stackItemX);
    // }
    // console.log("LOG AFTER GRIDTRAVERSE");
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
  const t1Root = performance.now();
  console.count("Ran to the bottom");
  console.log("Root time =", t1Root - t0Root, "ms");
  return lastArrayUpdatedOutsideFunction;
};

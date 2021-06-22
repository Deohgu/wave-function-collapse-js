//  TODO:
//  Split the function into smaller functions
//    read up on functional programming and refactoring
//    In essence all the complex code will be abstracted with self explanatory named functions

//  CURRENT:
//  TODO:
//    Improving performance idea:
//      Neighbour array to be passed in the parameters
//      Function always checks neighbourStack[0] argument
//      Consequently creates a clone without neighbourStack[0]
//        And adds to it new potential neighbours
//    Add Cells to coordsCallStack as array blocks
//      Then sort that array block
//      Then pass flattened array
//    Check why coordsCallStack does not accumulate more index each time

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

export const gridTraverse = (array, coordsCallStack) => {
  const t0Root = performance.now();
  console.log("--START------------------------------------------");
  if (coordsCallStack.length > 0) {
    // console.log("array: ", array);
    // console.log(
    //   "Current block",
    //   array[coordsCallStack[0].y][coordsCallStack[0].x]
    // );

    console.log("current coords:", coordsCallStack[0].y, coordsCallStack[0].x);

    let arrayClone = JSON.parse(JSON.stringify(array));
    //  Cells that had identities split from it -> [{y:0, x:0, amount: 2}, ...]
    //    Each cell will have an indentity picked at random, split the others off and from the remaining one and call gridTraverse
    //  at the end do one pass with array.sort(), it checks each index and compares the index.amount to sort
    let coordsCallStackClone = JSON.parse(JSON.stringify(coordsCallStack));

    //  Of the ones still available select an identity at random and remove the others
    arrayClone = picksRandomIdentity(arrayClone, coordsCallStackClone[0]);

    //  TODO:
    //    Should this return the entire Cell and in the end just have the returned array copy these?
    //    Or the y, x?
    //      Going to try this first
    const filteredCellsCoordsArray = filterCellsToCheck(
      arrayClone,
      coordsCallStackClone[0]
    );

    if (filteredCellsCoordsArray.length > 0) {
      //  Filters out invalid neighbouring identities according to the current identity rules
      arrayClone = filterIdentities(
        filteredCellsCoordsArray,
        arrayClone,
        coordsCallStackClone[0]
      );

      //  If at least one identity was split from cell being checked, add to stack
      coordsCallStackClone = [
        addsModifiedBlock(arrayClone, filteredCellsCoordsArray),
      ].concat(coordsCallStackClone);
      console.log("coordsCallStackClone after concat:", coordsCallStackClone);

      //  Sorts cells in coordsCallStackClone by ascending amount of identities, i.e lower entropy
      console.log("before sort", coordsCallStackClone);
      coordsCallStackClone[0] = coordsCallStackClone[0].sort((a, b) => {
        if (a.amount === b.amount) {
          return Math.floor(Math.random() * (1 - -1) + -1); // If equal randomize order
        }
        return a.amount - b.amount;
      });
      console.log("after sort", coordsCallStackClone);
    }
    if (Array.isArray(coordsCallStackClone[0])) {
      coordsCallStackClone = [
        coordsCallStackClone[0],
        ...coordsCallStackClone.slice(2),
      ];
      console.log(
        "coordsCallStackClone after removing [1]",
        coordsCallStackClone
      );
      coordsCallStackClone = coordsCallStackClone.flat();
    } else {
      coordsCallStackClone.shift();
    }

    // console.log("arrayClone at end: ", arrayClone);
    // console.log("neighbour Call Stack at end: ", coordsCallStackClone);
    // console.log("------------------");
    // console.log("Y: ", y);
    // console.log("X: ", x);
    // console.log("------------------");

    // console.log("filteredCellsCoordsArray: ", filteredCellsCoordsArray);
    console.log("neighbours Call Stack: ", coordsCallStackClone);

    // lastArrayUpdatedOutsideFunction = arrayClone;
    // console.log("neighbourstack", JSON.stringify(stackItem));

    lastArrayUpdatedOutsideFunction = arrayClone;
    // console.log("coordsStack flattened: ", coordsCallStackClone.flat());

    //  TODO:
    //    Does not need all of this code, a simple conditional to not run when !coordsCallStack[0].amount
    //      Or find a way to not add it at all..

    gridTraverse(arrayClone, coordsCallStackClone);

    // console.log("LOG AFTER GRIDTRAVERSE");
  }
  const t1Root = performance.now();
  console.count("Ran to the bottom");
  console.log("Root time =", t1Root - t0Root, "ms");
  return lastArrayUpdatedOutsideFunction;
};

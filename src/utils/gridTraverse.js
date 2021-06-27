import filterIdentities from "@/utils/traverse/filterIdentities";
import modifiedCellsArray from "@/utils/traverse/modifiedCellsArray";
import picksRandomIdentity from "@/utils/traverse/picksRandomIdentity";
import filterCellsToCheck from "@/utils/traverse/filterCellsToCheck";
import removeCurrentInCoordsCallStack from "@/utils/traverse/removeCurrentInCoordsCallStack";
import sortAscending from "@/utils/traverse/sortAscending";

let updatedArray = [];

export const gridTraverse = (array, coordsCallStack) => {
  // const t0Root = performance.now();
  // console.log("--START------------------------------------------");
  if (coordsCallStack.length > 0) {
    console.log(coordsCallStack[0].y, coordsCallStack[0].x);
    let arrayClone = JSON.parse(JSON.stringify(array));
    let coordsCallStackClone = JSON.parse(JSON.stringify(coordsCallStack));

    //  Of the ones still available select an identity at random and remove the others
    arrayClone = picksRandomIdentity(arrayClone, coordsCallStackClone[0]);

    const filteredCellsCoordsArray = filterCellsToCheck(
      arrayClone,
      coordsCallStackClone[0]
    );

    if (filteredCellsCoordsArray.length) {
      //  Filters out invalid neighbouring identities according to the current identity rules
      arrayClone = filterIdentities(
        filteredCellsCoordsArray,
        arrayClone,
        coordsCallStackClone[0]
      );

      //  coordsCallStackClone[0] example: [{y:3, x:6, amount: 2}, ...]
      coordsCallStackClone = [
        modifiedCellsArray(arrayClone, filteredCellsCoordsArray),
      ].concat(coordsCallStackClone);

      //  Sorts cells by the amount property
      //  In turn, Cells with lower identities get picked first
      coordsCallStackClone[0] = sortAscending(coordsCallStackClone[0]);
    }

    coordsCallStackClone = removeCurrentInCoordsCallStack(coordsCallStackClone);

    updatedArray = arrayClone;

    gridTraverse(arrayClone, coordsCallStackClone);
  }
  // const t1Root = performance.now();
  // console.count("Current run:");
  // console.log("Bottom:", t1Root - t0Root, "ms");
  return updatedArray;
};

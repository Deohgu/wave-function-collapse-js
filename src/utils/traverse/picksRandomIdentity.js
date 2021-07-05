import {
  allDirections,
  validDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

import randomIndexOfIdsInCommon from "@/utils/traverse/randomIndexOfIdsInCommon";

export default (array, { y, x }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));
  let pickedIdentityIndex = [];
  let idsInCommon = [];
  let idsInCommonTwo = [];
  const directionNames = Object.keys(validDirections);

  conditionalDirections(y, x, array).forEach((isCorrectGridArea, index) => {
    if (isCorrectGridArea) {
      const currValidDirections = validDirections[directionNames[index]];

      // console.log("currValidDirections:", currValidDirections);

      //  Checks valid neighbouring cells
      currValidDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        // console.log("CELL:", currY, currX);
        // console.log("direction:", direction);
        // console.log("currCell:", currCell);
        if (!idsInCommon.length) {
          currCell.forEach((idInNeighbour) => {
            // console.log("idInNeighbour:", idInNeighbour);
            // console.log("---idsInCommon---");
            arrayClone[y][x].forEach((idInOriginal) => {
              const currNeighbourRules = idInNeighbour[1].rules[direction];
              const indexOfIdInRules = currNeighbourRules.indexOf(
                idInOriginal[0]
              );
              // console.log("idInOriginal:", idInOriginal[0]);
              if (indexOfIdInRules !== -1) {
                idsInCommon.push(idInOriginal[0]);
              }
            });
          });
        } else {
          currCell.forEach((idInNeighbour) => {
            // console.log("---idsInCommonTwo---");
            arrayClone[y][x].forEach((idInOriginal) => {
              const currNeighbourRules = idInNeighbour[1].rules[direction];
              const indexOfIdInRules = currNeighbourRules.indexOf(
                idInOriginal[0]
              );
              const validId = currNeighbourRules[indexOfIdInRules];

              // console.log("idInOriginal:", idInOriginal[0]);
              // console.log(
              //   "validId in idsInCommon:",
              //   idsInCommon.indexOf(validId)
              // );
              if (
                indexOfIdInRules !== -1 &&
                idsInCommon.indexOf(validId) !== -1
              ) {
                idsInCommonTwo.push(idInOriginal[0]);
              }
            });
          });
          idsInCommon = idsInCommonTwo;
          idsInCommonTwo = [];
        }
        // console.log("TESTING -> currCell:", currCell);
        // console.log("TESTING -> direction:", direction);
      });
      ////////////////////////////////

      pickedIdentityIndex = randomIndexOfIdsInCommon(
        arrayClone,
        y,
        x,
        idsInCommon,
        idsInCommonTwo
      );

      // console.log("randomValidIndentityIndex", randomValidIndentityIndex);
      // console.log("pickedIdentityIndex", pickedIdentityIndex);

      arrayClone[y][x] = arrayClone[y][x].slice(
        pickedIdentityIndex,
        pickedIdentityIndex + 1
      );
    }
  });
  // console.log("arrayClone", arrayClone);
  return arrayClone;
};

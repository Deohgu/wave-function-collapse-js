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

      //  Checks valid neighbouring cells
      currValidDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        if (!idsInCommon.length) {
          currCell.forEach((idInNeighbour) => {
            arrayClone[y][x].forEach((idInOriginal) => {
              const currNeighbourRules = idInNeighbour[1].rules[direction];
              const indexOfIdInRules = currNeighbourRules.indexOf(
                idInOriginal[0]
              );

              if (indexOfIdInRules !== -1) {
                idsInCommon.push(idInOriginal[0]);
              }
            });
          });
        } else {
          currCell.forEach((idInNeighbour) => {
            arrayClone[y][x].forEach((idInOriginal) => {
              const currNeighbourRules = idInNeighbour[1].rules[direction];
              const indexOfIdInRules = currNeighbourRules.indexOf(
                idInOriginal[0]
              );
              const validId = currNeighbourRules[indexOfIdInRules];

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
      });

      pickedIdentityIndex = randomIndexOfIdsInCommon(
        arrayClone,
        y,
        x,
        idsInCommon,
        idsInCommonTwo
      );

      arrayClone[y][x] = arrayClone[y][x].slice(
        pickedIdentityIndex,
        pickedIdentityIndex + 1
      );
    }
  });
  return arrayClone;
};

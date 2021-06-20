import {
  allDirections,
  validSearchDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

export default (array, { y, x }) => {
  const filteredCellsCoordsArray = [];

  conditionalDirections(y, x, array).forEach((isCorrectGridArea, index) => {
    if (isCorrectGridArea) {
      const directionNames = Object.keys(validSearchDirections);
      const currValidSearchDirections =
        validSearchDirections[directionNames[index]];

      // console.log(directionNames[index]);

      //  Checks valid neighbouring cells
      currValidSearchDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        if (currCell.length > 1) {
          filteredCellsCoordsArray.push({ y: currY, x: currX });
        }
      });
    }
  });
  return filteredCellsCoordsArray;
};

import { whichDirection } from "@/utils/traverse/directions";

export default (filteredCellsCoordsArray, array, { y, x }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  filteredCellsCoordsArray.forEach((coords) => {
    const currentOriginalNeighbour = array[coords.y][coords.x];

    const direction = whichDirection(y, x, coords.y, coords.x);

    currentOriginalNeighbour.forEach((identity) => {
      const allowedIdentitiesArray = arrayClone[y][x][0][1].rules[direction];
      const indexOfMatch = allowedIdentitiesArray.indexOf(identity[0]);
      if (indexOfMatch === -1) {
        const indexToSplice = arrayClone[coords.y][coords.x].findIndex(
          (eachIdentity) => {
            if (eachIdentity[0] === identity[0]) return true;
          }
        );
        arrayClone[coords.y][coords.x].splice(indexToSplice, 1);
      }
    });
  });

  return arrayClone;
};

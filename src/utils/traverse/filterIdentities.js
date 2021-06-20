import { whichDirection } from "@/utils/traverse/directions";

export default (filteredCellsCoordsArray, array, { y, x }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  filteredCellsCoordsArray.forEach((coords) => {
    // const identitiesIndexToSplice = [];
    // const currentClonedNeighbour = arrayClone[coords.y][coords.x]
    const currentOriginalNeighbour = array[coords.y][coords.x];

    const direction = whichDirection(y, x, coords.y, coords.x);

    currentOriginalNeighbour.forEach((identity) => {
      const allowedIdentitiesArray = arrayClone[y][x][0][1].rules[direction];
      const indexOfMatch = allowedIdentitiesArray.indexOf(identity[0]);
      if (indexOfMatch === -1) {
        // identitiesIndexToSplice.push(index);
        // console.log("arrayClone: ", arrayClone[coords.y][coords.x]);
        // console.log("index: ", index);
        // console.log("splicing: ", identity);
        const indexToSplice = arrayClone[coords.y][coords.x].findIndex(
          (eachIdentity) => {
            if (eachIdentity[0] === identity[0]) return true;
          }
        );
        arrayClone[coords.y][coords.x].splice(indexToSplice, 1);
      }
    });
    // identitiesIndexToSplice.forEach((indexToSplice) => {
    //   console.log("indexToSplice: ", indexToSplice);
    //   arrayClone[coords.y][coords.x].splice(indexToSplice, 1);
    // });
  });

  // filteredCellsCoordsArray.forEach((coords) => {
  //   const currentClonedCell = arrayClone[coords.y][coords.x]
  //   currentOriginalCell.forEach((identity) => {
  //     const indexFound = arrayClone[y][x].findIndex((eachIdentity) => {
  //       return eachIdentity[0] === identity[0];
  //     });
  //     // console.log("indexFound: ", indexFound);
  //     //  If this identity is not a valid neighbour (i.e not in the rules), remove it
  //     if (arrayClone[y][x].indexOf(identity[0]) === -1) {
  //       if (indexFound !== -1) {
  //         currentClonedCell.splice(indexFound, 1);
  //       }
  //     }
  //   });
  // });

  // if (currOriginalCell.length > 1) {
  //   const currClonedCell = arrayClone[currY][currX];
  //   const currClonedCellRules = arrayClone[y][x][0][1].rules;

  //   currOriginalCell.forEach((identity) => {
  //     const indexFound = currClonedCell.findIndex((eachIdentity) => {
  //       return eachIdentity[0] === identity[0];
  //     });
  //     // console.log("indexFound: ", indexFound);
  //     //  If this identity is not a valid neighbour (i.e not in the rules), remove it
  //     if (currClonedCellRules[direction].indexOf(identity[0]) === -1) {
  //       if (indexFound !== -1) {
  //         currClonedCell.splice(indexFound, 1);
  //       }
  //     }
  //   });
  //   arrayClone[currY][currX] = currClonedCell;
  // }
  return arrayClone;
};

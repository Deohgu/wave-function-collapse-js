export default (direction, array, { y, x, currY, currX }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));
  const currOriginalCell = array[currY][currX];

  if (currOriginalCell.length > 1) {
    const currClonedCell = arrayClone[currY][currX];
    const currClonedCellRules = arrayClone[y][x][0][1].rules;

    currOriginalCell.forEach((identity) => {
      const indexFound = currClonedCell.findIndex((eachIdentity) => {
        return eachIdentity[0] === identity[0];
      });
      console.log("indexFound: ", indexFound);
      //  If this identity is not a valid neighbour (i.e not in the rules), remove it
      if (currClonedCellRules[direction].indexOf(identity[0]) === -1) {
        if (indexFound !== -1) {
          currClonedCell.splice(indexFound, 1);
        }
      }
    });
    arrayClone[currY][currX] = currClonedCell;
  }
  return arrayClone;
};

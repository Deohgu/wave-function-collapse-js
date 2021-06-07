export default (direction, array, { y, x, currY, currX }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));
  const currOriginalCell = arrayClone[currY][currX];

  if (currOriginalCell.length > 1) {
    const currClonedCell = arrayClone[currY][currX];
    const currClonedCellRules = arrayClone[y][x][0][1].rules;

    currOriginalCell.forEach((identity) => {
      //  If this identity is not a valid neighbour (i.e not in the rules), remove it
      if (currClonedCellRules[direction].indexOf(identity[0]) === -1) {
        currClonedCell.splice(
          currClonedCell.findIndex((eachIdentity) => {
            if (eachIdentity[0] === identity[0]) {
              return true;
            }
          }),
          1
        );
      }
    });
  }
  return arrayClone;
};

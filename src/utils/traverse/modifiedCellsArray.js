export default (arrayClone, filteredCellsCoordsArray) => {
  //  TODO:
  //  Somehow soft-code amount of identities
  //  Hard coded amount of identities
  let currentStackGroup = [];

  filteredCellsCoordsArray.forEach((coords) => {
    const currentClonedCell = arrayClone[coords.y][coords.x];

    if (currentClonedCell.length > 1 && currentClonedCell.length < 4) {
      currentStackGroup.push({
        y: coords.y,
        x: coords.x,
        amount: currentClonedCell.length,
      });
      return currentStackGroup;
    }
  });
  console.log("current block:", currentStackGroup);
  return currentStackGroup;
};

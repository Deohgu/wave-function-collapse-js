export default (arrayClone, filteredCellsCoordsArray) => {
  //  TODO:
  //  Somehow soft-code amount of identities
  //  Hard coded amount of identities
  let neighboursCallStack = [];

  filteredCellsCoordsArray.forEach((coords) => {
    const currentClonedCell = arrayClone[coords.y][coords.x];

    if (currentClonedCell.length > 1 && currentClonedCell.length < 4) {
      neighboursCallStack.push({
        y: coords.y,
        x: coords.x,
        amount: currentClonedCell.length,
      });
      return neighboursCallStack;
    }
  });
  return neighboursCallStack;
};

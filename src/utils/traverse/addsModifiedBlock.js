export default (
  arrayClone,
  { y, x, currY, currX },
  neighboursCallStack,
  allDirections,
  direction
) => {
  //  TODO:
  //  Somehow soft-code amount of identities
  //  Hard coded amount of identities
  if (arrayClone[currY][currX].length < 4) {
    let neighboursCallStackClone = JSON.parse(
      JSON.stringify(neighboursCallStack)
    );

    neighboursCallStackClone.push({
      y: allDirections(y, x)[direction].y(),
      x: allDirections(y, x)[direction].x(),
      amount: arrayClone[currY][currX].length,
    });
    return neighboursCallStackClone;
  }

  return neighboursCallStack;
};

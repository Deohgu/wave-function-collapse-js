export default (
  arrayClone,
  { y, x, thisY, thisX },
  neighboursCallStack,
  allDirections,
  direction
) => {
  //  TODO:
  //  Somehow soft-code amount of identities
  //  Hard coded amount of identities
  if (arrayClone[thisY][thisX].length < 4) {
    let neighboursCallStackClone = JSON.parse(
      JSON.stringify(neighboursCallStack)
    );

    neighboursCallStackClone.push({
      y: allDirections(y, x)[direction].y(),
      x: allDirections(y, x)[direction].x(),
      amount: arrayClone[thisY][thisX].length,
    });
    return neighboursCallStackClone;
  }

  return neighboursCallStack;
};

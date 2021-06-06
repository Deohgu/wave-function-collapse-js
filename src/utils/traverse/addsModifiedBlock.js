export default (
  arrayClone,
  { y, x, thisY, thisX },
  neighboursCue,
  allDirections,
  direction
) => {
  //  TODO:
  //  Somehow soft-code amount of identities
  //  Hard coded amount of identities
  if (arrayClone[thisY][thisX].length < 4) {
    let neighboursCueClone = JSON.parse(JSON.stringify(neighboursCue));

    neighboursCueClone.push({
      y: allDirections(y, x)[direction].y(),
      x: allDirections(y, x)[direction].x(),
      amount: arrayClone[thisY][thisX].length,
    });
    return neighboursCueClone;
  }

  return neighboursCue;
};

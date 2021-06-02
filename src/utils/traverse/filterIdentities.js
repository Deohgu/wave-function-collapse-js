export default (
  allDirections,
  conditionalDirections,
  array,
  y,
  x,
  neighboursCue
) => {
  let arrayClone = JSON.parse(JSON.stringify(array));
  let neighboursCueClone = JSON.parse(JSON.stringify(neighboursCue));
  //  Loops valid directions for this particular location and returns then as a string

  conditionalDirections.northWestCorner.forEach((direction) => {
    const thisY = [allDirections(y, x)[direction].y()];
    const thisX = [allDirections(y, x)[direction].x()];

    //  From the valid directions get the cell in that direction of original cell
    array[thisY][thisX].forEach((identity) => {
      //  If this identity, in this cell, is not in the rules of the original cell of its allowed neighbours of that direction remove it
      if (arrayClone[y][x][0][1].rules[direction].indexOf(identity[0]) === -1) {
        //  If current identity can not be in that direction splice from cloned array
        arrayClone[thisY][thisX].splice(
          arrayClone[thisY][thisX].findIndex((eachId) => {
            if (eachId[0] === identity[0]) {
              return true;
            }
          }),
          1
        );
      }
    });

    //  TODO:
    //  Somehow soft-code amount of identities
    //  If at least one identity was split, add to the back line of neighboursCueClone to call the current location of the cell
    if (
      arrayClone[thisY][thisX].length < 4 //  Hard coded amount of identities
    )
      neighboursCueClone.push({
        y: allDirections(y, x)[direction].y(),
        x: allDirections(y, x)[direction].x(),
        amount: arrayClone[thisY][thisX].length,
      });
  });
  return { arrayClone, neighboursCueClone };
};

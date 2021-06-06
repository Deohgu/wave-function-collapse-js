export default (direction, array, { y, x, currY, currX }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));
  //  Loops valid directions for this particular location and returns then as a string

  //  From the valid directions get the cell in that direction of original cell
  array[currY][currX].forEach((identity) => {
    //  Does not check already selected identities in cells
    if (array[currY][currX].length > 1) {
      //  If this identity, in this cell, is not in the rules of the original cell of its allowed neighbours of that direction remove it
      if (arrayClone[y][x][0][1].rules[direction].indexOf(identity[0]) === -1) {
        //  If current identity can not be in that direction splice from cloned array
        arrayClone[currY][currX].splice(
          arrayClone[currY][currX].findIndex((eachId) => {
            if (eachId[0] === identity[0]) {
              return true;
            }
          }),
          1
        );
      }
    }
  });
  return arrayClone;
};

// CURRENT:
// Define a way to traverse the grid and check based on the rules

/////////////
//  Calls gridTraverse to check neighbours
//  Copy original array
//  If any identity is invalid
//  Split out invalid identities and add that cell to neighboorArray
//  Sort neighboorArray from lowest to heightest
//  Randomize order of equal numbers
//  ForEach of that neighboorArray call gridTraverse
/////////////

export const gridTraverse = (array, y, x) => {
  // eslint-disable-next-line no-unused-vars
  const arrayClone = [...array];

  // If not against a wall
  // x and y are equal to the index in the loops which determines the current cell
  // eslint-disable-next-line no-unused-vars
  const allDirections = {
    north() {
      return array[y - 1][x];
    },
    east() {
      return array[y][x + 1];
    },
    south() {
      return array[y + 1][x];
    },
    west() {
      return array[y][x - 1];
    },
  };

  //  Directions for each position in each if section
  // eslint-disable-next-line no-unused-vars
  const conditionalDirections = {
    northWall: [allDirections.east, allDirections.south, allDirections.west],
    northEastCorner: [allDirections.south, allDirections.west],
    eastWall: [allDirections.north, allDirections.south, allDirections.west],
    southEastCorner: [allDirections.north, allDirections.west],
    southWall: [allDirections.north, allDirections.east, allDirections.west],
    southWestCorner: [allDirections.north, allDirections.east],
    westWall: [allDirections.north, allDirections.east, allDirections.south],
    northWestCorner: [allDirections.east, allDirections.south],
    noWall: [
      allDirections.north,
      allDirections.east,
      allDirections.south,
      allDirections.west,
    ],
  };

  // const neighboursCue = []

  //  Starts collapsing
  if (y === 0) {
    //  TOP east CORNER
    if (x === array[0].length - 1) {
      console.log("TOP east CORNER");
      //  TOP west CORNER
    } else if (x === 0) {
      console.log("TOP west CORNER");
      // eslint-disable-next-line no-unused-vars
      conditionalDirections.northWestCorner.forEach((direction) => {
        //  Runs through all potential directions
        // eslint-disable-next-line no-unused-vars
        direction().forEach((identity) => {
          //  Can I use the
          console.log(
            "arrayClone[y][x][0][1].rules: ",
            arrayClone[y][x][0][1].rules
          );

          console.log("direction, identity: ", direction(), identity);
          //  Loops through each direction identity
          //    Compares arrayClone[y][x][0] with each identity

          //  FIXME:
          //  ERROR HERE
          //    If rules array of current identity to that direction has identity being analised then do something
          //      Meaning, ogIdentities(matching this one).rules.(direction we are looking).hasIndexOf(identity)
          if (identity.indexOf(arrayClone[y][x][0])) {
            console.log(
              "TESTING indexOf: ",
              identity.indexOf(arrayClone[y][x][0])
            );
          }
          //    If identity can not be in that direction split from arrayClone
          //    If at least one identity was split, add to the back line of neighboursCue the current location of the block
        });
        //  Loop through neighboursCue and call gridTraverse(arrayClone, )
      });
      //  TOP WALL
    } else {
      console.log("TOP WALL");
    }
  } else if (y === array.length - 1) {
    //  south east CORNER
    if (x === array[0].length - 1) {
      console.log("south west CORNER");
      // south west CORNER
    } else if (x === 0) {
      console.log("south east CORNER");
      //  south WALL
    } else {
      console.log("south WALL");
    }
    //  east WALL ONLY
  } else if (x === array[0].length - 1) {
    console.log("east WALL");
    //  west WALL ONLY
  } else if (x === 0) {
    console.log("west WALL");
    // AWAY FROM WALL
  } else {
    console.log("AWAY FROM WALL");
  }

  // Traverses entire array
  // arrClone.forEach((arrY) => {
  //   arrY.forEach((arrX) => {
  //     console.log(arrX);
  //   });
  // });

  console.log("gridTraverve, array, x, y: ", array, x, y);
};

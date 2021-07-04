//  TODO:
//    Change this to one object, validDirections and conditionalDirections should be part of the main prop
//      i.e North, North East, East
//    If allDirections also checked diagonally, it could simply be an object with all directions and then each contain props for calcCoords, validDirections and isCurrentDirection
//    To consider:
//      When importing something large does it affect performance or only affects what is actually used from the import?
export const allDirections = (y, x) => ({
  north: {
    y() {
      return y - 1;
    },
    x() {
      return x;
    },
  },
  east: {
    y() {
      return y;
    },
    x() {
      return x + 1;
    },
  },
  south: {
    y() {
      return y + 1;
    },
    x() {
      return x;
    },
  },
  west: {
    y() {
      return y;
    },
    x() {
      return x - 1;
    },
  },
});

//  Directions for each position in each if section
export const validDirections = {
  northEastCorner: ["south", "west"],
  northWestCorner: ["east", "south"],
  northWall: ["east", "south", "west"],
  southEastCorner: ["north", "west"],
  southWestCorner: ["north", "east"],
  southWall: ["north", "east", "west"],
  eastWall: ["north", "south", "west"],
  westWall: ["north", "east", "south"],
  noWall: ["north", "east", "south", "west"],
};

export const conditionalDirections = (y, x, array) => [
  y === 0 && x === array[0].length - 1, // North East
  y === 0 && x === 0, // North west
  y === 0 && x !== array[0].length - 1 && x !== 0, // North
  y === array.length - 1 && x === array[0].length - 1, // North East
  y === array.length - 1 && x === 0, // North West
  y === array.length - 1 && x !== array[0].length - 1 && x !== 0, // South
  x === array[0].length - 1 && y !== 0 && y !== array.length - 1, // East
  x === 0 && y !== 0 && y !== array.length - 1, // West
  y !== 0 && y !== array.length - 1 && x !== array[0].length - 1 && x !== 0, // Away from wall
];

export const whichDirection = (originalY, originalX, y, x) => {
  const currentAllDirection = allDirections(originalY, originalX);
  let directionToReturn = "";
  for (const direction in currentAllDirection) {
    if (
      currentAllDirection[direction].y() === y &&
      currentAllDirection[direction].x() === x
    )
      return (directionToReturn = direction);
  }
  return directionToReturn;
};

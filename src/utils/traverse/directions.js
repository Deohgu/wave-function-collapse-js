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
export const validSearchDirections = {
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

export const conditionalDirections = ({ y, x }, array) => [
  y === 0 && x === array[0].length - 1, // North East
  y === 0 && x === 0, // North west
  y === 0, // North
  y === array.length - 1 && x === array[0].length - 1, // North East
  y === array.length - 1 && x === 0, // North West
  y === array.length - 1, // South
  x === array[0].length - 1, // East
  x === 0, // West
  y !== 0 && y !== array.length - 1 && x !== array[0].length - 1 && x !== 0, // Away from wall
];

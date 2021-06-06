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
  northWall: ["east", "south", "west"],
  northEastCorner: ["south", "west"],
  eastWall: ["north", "south", "west"],
  southEastCorner: ["north", "west"],
  southWall: ["north", "east", "west"],
  southWestCorner: ["north", "east"],
  westWall: ["north", "east", "south"],
  northWestCorner: ["east", "south"],
  noWall: ["north", "east", "south", "west"],
};

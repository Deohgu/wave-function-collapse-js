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

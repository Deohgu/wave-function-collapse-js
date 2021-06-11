export default (array, { y, x }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  if (arrayClone[y][x].length > 1) {
    const randomIdentityIndex = Math.floor(
      Math.random() * arrayClone[y][x].length
    );

    arrayClone[y][x] = arrayClone[y][x].slice(
      randomIdentityIndex,
      randomIdentityIndex + 1
    );
  }
  return arrayClone;
};

export default (array, { y, x }) => {
  let arrayClone = JSON.parse(JSON.stringify(array));

  if (array[y][x].length > 1) {
    const randomIdentityIndex = Math.floor(Math.random() * array[y][1].length);

    arrayClone[y][x] = arrayClone[y][x].slice(
      randomIdentityIndex,
      randomIdentityIndex + 1
    );
  }
  return arrayClone;
};

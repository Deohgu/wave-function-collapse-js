export default (width, height) => {
  const generatedArr = [[]];
  for (let i = 0; i < width; i++) {
    generatedArr[i] = [];
    for (let j = 0; j < height; j++) {
      generatedArr[i][j] = "empty";
    }
  }

  return generatedArr;
};

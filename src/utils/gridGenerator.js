export default (width, height) => {
  const generatedArr = [[]];
  for (let i = 0; i < height; i++) {
    generatedArr[i] = [];
    for (let j = 0; j < width; j++) {
      generatedArr[i][j] = "empty";
    }
  }

  return generatedArr;
};

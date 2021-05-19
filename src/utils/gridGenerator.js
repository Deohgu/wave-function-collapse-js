export default (width, height, identities) => {
  // console.log("identities: ", identities);
  const generatedArr = [[]];
  for (let i = 0; i < height; i++) {
    generatedArr[i] = [];
    for (let j = 0; j < width; j++) {
      generatedArr[i][j] = [];
      identities.forEach((element) => {
        generatedArr[i][j].push(element);
      });
    }
  }
  // console.log("generatedArr: ", generatedArr);
  return generatedArr;
};

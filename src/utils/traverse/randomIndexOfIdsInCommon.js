export default (arrayClone, y, x, idsInCommon, idsInCommonTwo) => {
  let randomValidIndentityIndex = 0;
  if (idsInCommonTwo.length) {
    // console.log(
    //   "idsInCommonTwo.length",
    //   idsInCommonTwo.length
    // );
    randomValidIndentityIndex = Math.floor(
      Math.random() * idsInCommonTwo.length
    );

    return arrayClone[y][x].findIndex((identity) => {
      return identity[0] === idsInCommonTwo[randomValidIndentityIndex];
    });
  } else {
    // console.log(
    //   "idsInCommonTwo.length",
    //   idsInCommonTwo.length
    // );
    randomValidIndentityIndex = Math.floor(Math.random() * idsInCommon.length);

    return arrayClone[y][x].findIndex(
      (identity) => identity[0] === idsInCommon[randomValidIndentityIndex]
    );
  }
};

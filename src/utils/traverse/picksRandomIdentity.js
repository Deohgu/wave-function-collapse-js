import {
  allDirections,
  validDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

export default (array, { y, x }) => {
  const allowedIdentities = [];
  let arrayClone = JSON.parse(JSON.stringify(array));
  const validIdentitiesInCurrent = [];
  let pickedIdentityIndex = [];
  let identitiesInCommon = [];
  let identitiesInCommonTwo = [];
  const directionNames = Object.keys(validDirections);

  conditionalDirections(y, x, array).forEach((isCorrectGridArea, index) => {
    if (isCorrectGridArea) {
      const currValidDirections = validDirections[directionNames[index]];

      // console.log("currValidDirections:", currValidDirections);

      //  Checks valid neighbouring cells
      currValidDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        // console.log("CELL:", currY, currX);
        // console.log("direction:", direction);
        // console.log("currCell:", currCell);
        if (!identitiesInCommon.length) {
          currCell.forEach((idInNeighbour) => {
            // console.log("idInNeighbour:", idInNeighbour);
            // console.log("---identitiesInCommon---");
            arrayClone[y][x].forEach((idInOriginal) => {
              // console.log("idInOriginal:", idInOriginal[0]);
              if (
                idInNeighbour[1].rules[direction].indexOf(idInOriginal[0]) !==
                -1
              ) {
                identitiesInCommon.push(idInOriginal[0]);
              }
            });
          });
        } else {
          currCell.forEach((idInNeighbour) => {
            // console.log("---identitiesInCommonTwo---");
            arrayClone[y][x].forEach((idInOriginal) => {
              // console.log("idInOriginal:", idInOriginal[0]);
              // console.log(
              //   "complex index of:",
              //   identitiesInCommon.indexOf(
              //     idInNeighbour[1].rules[direction][
              //       idInNeighbour[1].rules[direction].indexOf(idInOriginal[0])
              //     ]
              //   )
              // );
              if (
                idInNeighbour[1].rules[direction].indexOf(idInOriginal[0]) !==
                  -1 &&
                // If identities in common has the identity that the original cell has in common with the cells
                identitiesInCommon.indexOf(
                  idInNeighbour[1].rules[direction][
                    idInNeighbour[1].rules[direction].indexOf(idInOriginal[0])
                  ]
                ) !== -1
              ) {
                identitiesInCommonTwo.push(idInOriginal[0]);
              }
            });
          });
          identitiesInCommon = identitiesInCommonTwo;
          identitiesInCommonTwo = [];
        }

        // console.log("identitiesInCommon", identitiesInCommon);
        // console.log("identitiesInCommonTWO", identitiesInCommonTwo);

        // console.log("TESTING -> currCell:", currCell);
        // console.log("TESTING -> direction:", direction);

        currCell.forEach((identity) => {
          const allowedIdentitiesPortion = identity[1].rules[direction];
          allowedIdentitiesPortion.forEach((validIdentity) => {
            // console.log("validIdentity", validIdentity);
            if (allowedIdentities.indexOf(validIdentity) === -1) {
              allowedIdentities.push(validIdentity);
            }
          });
        });
      });
      ////////////////////////////////
      arrayClone[y][x].forEach((currentIdentity) => {
        if (
          allowedIdentities.indexOf(currentIdentity[0]) !== -1 &&
          validIdentitiesInCurrent.indexOf(currentIdentity[0]) === -1
        ) {
          validIdentitiesInCurrent.push(currentIdentity[0]);
        }
      });

      let randomValidIndentityIndex = 0;
      if (identitiesInCommonTwo.length) {
        // console.log(
        //   "identitiesInCommonTwo.length",
        //   identitiesInCommonTwo.length
        // );
        randomValidIndentityIndex = Math.floor(
          Math.random() * identitiesInCommonTwo.length
        );

        pickedIdentityIndex = arrayClone[y][x].findIndex((identity) => {
          return (
            identity[0] === identitiesInCommonTwo[randomValidIndentityIndex]
          );
        });
      } else {
        // console.log(
        //   "identitiesInCommonTwo.length",
        //   identitiesInCommonTwo.length
        // );
        randomValidIndentityIndex = Math.floor(
          Math.random() * identitiesInCommon.length
        );

        pickedIdentityIndex = arrayClone[y][x].findIndex(
          (identity) =>
            identity[0] === identitiesInCommon[randomValidIndentityIndex]
        );
      }

      // console.log("allowedIdentities", allowedIdentities);
      // console.log("validIdentitiesInCurrent", validIdentitiesInCurrent);
      // console.log("randomValidIndentityIndex", randomValidIndentityIndex);
      // console.log("pickedIdentityIndex", pickedIdentityIndex);

      arrayClone[y][x] = arrayClone[y][x].slice(
        pickedIdentityIndex,
        pickedIdentityIndex + 1
      );
    }
  });
  // console.log("arrayClone", arrayClone);
  return arrayClone;
};

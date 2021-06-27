//  HOW IT WORKS:
//      Reuse code in filterIdentities to check the ruleset of surrounding neighbours to create an array of the valid identities to pick from
//  Run a forEach on eachCell
//  Access the rules by the right direction and add them to an array
//    allowedIdentities.push(rules[direction])
//      Loop through current cell
//      if allowedIdentities has current identity from loop
//      pass it to array with valid identities
//      Then pick one at random
//      then find the index of that identity in the original Cell
//      splice that one

//  CURRENT:
//   If an identity only allows 2 identities but another allows 4
//     Then we can not add the 4 but the ones in the common with all!
//     ie: One allows water and coast, another coast and trees
//       Only coast can be passed.

//  TODO:
//    Randomly picked identity must exist within current!
//      If current has had identities removed from itself due to a neighbour running filterIdenities
//      The randomValidIndentityIndex might not be valid to remove..
//  TASK: Only pick identities that current Cell contains.

import {
  allDirections,
  validSearchDirections,
  conditionalDirections,
} from "@/utils/traverse/directions";

export default (array, { y, x }) => {
  // const filteredCellsCoordsArray = [];
  const allowedIdentities = [];
  let arrayClone = JSON.parse(JSON.stringify(array));
  const validIdentitiesInCurrent = [];
  let pickedIdentityIndex = [];

  conditionalDirections(y, x, array).forEach((isCorrectGridArea, index) => {
    if (isCorrectGridArea) {
      const directionNames = Object.keys(validSearchDirections);
      const currValidSearchDirections =
        validSearchDirections[directionNames[index]];

      let ranOnce = false;
      // let prevArr = [];
      let identitiesInCommon = [];
      let identitiesInCommonTwo = [];

      // console.log(directionNames[index]);

      console.log("currValidSearchDirections:", currValidSearchDirections);

      //  Checks valid neighbouring cells
      currValidSearchDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        //  Improve algorithm by creating an array with the identities of the original Cell
        //    arrayClone[y][x]Ids = ["water", "coast", "land"]
        //    Then bellow simply run indexOf instead of some
        if (ranOnce === false) {
          ranOnce = true;

          currCell.forEach((idInCurr) => {
            if (
              arrayClone[y][x].some(
                (idInOriginal) => idInOriginal[0] === idInCurr[0]
              )
            ) {
              identitiesInCommon.push(idInCurr[0]);
            }
          });
        } else {
          currCell.forEach((idInCurr) => {
            if (
              arrayClone[y][x].some(
                (idInOriginal) => idInOriginal[0] === idInCurr[0]
              )
            ) {
              const indexIfEqual = identitiesInCommon.findIndex(
                (idInCommonId) => idInCurr[0] === idInCommonId
              );

              // console.log("indexIfEqual in else:", indexIfEqual);

              if (indexIfEqual !== -1) {
                identitiesInCommonTwo.push(identitiesInCommon[indexIfEqual]);
              }
            }
          });
        }
        // prevArr = currCell;

        console.log("identitiesInCommon", identitiesInCommon);
        console.log("identitiesInCommonTWO", identitiesInCommonTwo);
        // console.log("TESTING RANONCE EQUAL", ranOnce);

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
      if (arrayClone[y][x].length > 1) {
        arrayClone[y][x].forEach((currentIdentity) => {
          // console.log(
          //   "allowedIdentities.indexOf(currentIdentity[0]",
          //   allowedIdentities.indexOf(currentIdentity[0])
          // );
          if (
            allowedIdentities.indexOf(currentIdentity[0]) !== -1 &&
            validIdentitiesInCurrent.indexOf(currentIdentity[0]) === -1
          ) {
            validIdentitiesInCurrent.push(currentIdentity[0]);
          }
        });

        // const randomValidIndentityIndex = Math.floor(
        //   Math.random() * validIdentitiesInCurrent.length
        // );
        // const randomValidIndentityIndex = Math.floor(
        //   Math.random() * identitiesInCommonTwo.length
        //     ? identitiesInCommonTwo.length
        //     : identitiesInCommon.length
        // );
        let randomValidIndentityIndex = 0;
        if (identitiesInCommonTwo.length) {
          randomValidIndentityIndex = Math.floor(
            Math.random() * identitiesInCommonTwo.length
          );

          pickedIdentityIndex = arrayClone[y][x].findIndex((identity) => {
            return (
              identity[0] === identitiesInCommonTwo[randomValidIndentityIndex]
            );
          });
        } else {
          randomValidIndentityIndex = Math.floor(
            Math.random() * identitiesInCommon.length
          );

          pickedIdentityIndex = arrayClone[y][x].findIndex((identity) => {
            return (
              identity[0] === identitiesInCommon[randomValidIndentityIndex]
            );
          });
        }

        // pickedIdentityIndex = arrayClone[y][x].findIndex((identity) => {
        //   return (
        //     identity[0] === validIdentitiesInCurrent[randomValidIndentityIndex]
        //   );
        // });

        console.log("allowedIdentities", allowedIdentities);
        console.log("validIdentitiesInCurrent", validIdentitiesInCurrent);
        console.log("randomValidIndentityIndex", randomValidIndentityIndex);
        console.log("pickedIdentityIndex", pickedIdentityIndex);

        arrayClone[y][x] = arrayClone[y][x].slice(
          pickedIdentityIndex,
          pickedIdentityIndex + 1
        );
      }
    }
  });
  console.log("arrayClone", arrayClone);
  return arrayClone;
};

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

//  TODO:
//    Another thing, the first in common identities with the currCell get tossed in the initial array
//    Looking at the console.log, not all the in common identities get passed

//  Currently used direction is not relevant because it points out the direction the original cell is when compared to the current neighbour
//  But since we are looking at the rules in the neighbour we want the direction the original is in relation to the neighbour.
//    i.e direction says north because we are checking the north neighbour, but we actually want to check south in the rules as original cell is south of it
//  For now it works as all of them are the same, but it's a future fix

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

      let identitiesInCommon = [];
      let identitiesInCommonTwo = [];

      // console.log(directionNames[index]);

      console.log("currValidSearchDirections:", currValidSearchDirections);

      //  Checks valid neighbouring cells
      currValidSearchDirections.forEach((direction) => {
        const currY = allDirections(y, x)[direction].y();
        const currX = allDirections(y, x)[direction].x();
        const currCell = array[currY][currX];

        console.log("CELL:", currY, currX);
        console.log("direction:", direction);
        console.log("currCell:", currCell);

        //  Improve algorithm by creating an array with the identities of the original Cell
        //    arrayClone[y][x]Ids = ["water", "coast", "land"]
        //    Then bellow simply run indexOf instead of some
        if (!identitiesInCommon.length) {
          currCell.forEach((idInNeighbour) => {
            //  Trying to check if id is the ruleset
            //    Convert to a variable the original index to use underneath
            console.log("idInNeighbour:", idInNeighbour);
            console.log("---identitiesInCommon---");
            arrayClone[y][x].forEach((idInOriginal) => {
              console.log("idInOriginal:", idInOriginal[0]);
              if (
                idInNeighbour[1].rules[direction].indexOf(idInOriginal[0]) !==
                -1
              ) {
                identitiesInCommon.push(idInOriginal[0]);
              }
            });
          });
        } else if (!identitiesInCommonTwo.length) {
          //  TODO:
          //    Bad identities are being passed here
          //      In on example it contained identities that the original Cell did not contain
          //        Check there, only pass things that the original cell contains

          //    Should there be an update of the initial one array?
          //      firdt array is created
          //      second is updated when creating a new one
          //      first array is equal to second
          //      second is emptied
          //      rinse and repear

          currCell.forEach((idInNeighbour) => {
            console.log("---identitiesInCommonTwo---");
            arrayClone[y][x].forEach((idInOriginal) => {
              console.log("idInOriginal:", idInOriginal[0]);
              console.log(
                "complex index of:",
                identitiesInCommon.indexOf(
                  idInNeighbour[1].rules[direction][
                    idInNeighbour[1].rules[direction].indexOf(idInOriginal[0])
                  ]
                )
              );
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
                //  TODO:
                //    Pushing the correct thing? should it be idInOriginal[0]?
                identitiesInCommonTwo.push(idInOriginal[0]);
              }
            });
          });
          identitiesInCommon = identitiesInCommonTwo;
          identitiesInCommonTwo = [];
          // ranOnce = false;
        }
        //  This was causing some of them to not be called
        //    probably because it was skipping the first if statement when coming back here?
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
          console.log(
            "identitiesInCommonTwo.length",
            identitiesInCommonTwo.length
          );
          randomValidIndentityIndex = Math.floor(
            Math.random() * identitiesInCommonTwo.length
          );

          pickedIdentityIndex = arrayClone[y][x].findIndex((identity) => {
            return (
              identity[0] === identitiesInCommonTwo[randomValidIndentityIndex]
            );
          });
        } else {
          console.log(
            "identitiesInCommonTwo.length",
            identitiesInCommonTwo.length
          );
          randomValidIndentityIndex = Math.floor(
            Math.random() * identitiesInCommon.length
          );

          pickedIdentityIndex = arrayClone[y][x].findIndex(
            (identity) =>
              identity[0] === identitiesInCommon[randomValidIndentityIndex]
          );
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

export default (coordsCallStack) => {
  let coordsCallStackClone = JSON.parse(JSON.stringify(coordsCallStack));

  if (Array.isArray(coordsCallStackClone[0])) {
    return [coordsCallStackClone[0], ...coordsCallStackClone.slice(2)].flat();
  } else {
    return coordsCallStackClone.slice(1);
  }
};

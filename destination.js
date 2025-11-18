/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let invalidDests = [];
  let validDests = [];
  let vDest = "";
  for (let i = 0; i < paths.length; i++) {
    invalidDests.push(paths[i][0]);
    validDests.push(paths[i][1]);
  }
  validDests.map((validDest) => {
    if (!invalidDests.includes(validDest)) {
      vDest = validDest;
    }
  });
  return vDest;
};

destCity([
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
]);

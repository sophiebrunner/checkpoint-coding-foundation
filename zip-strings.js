//A refactored solution - based on other solutions - avoids creating arrays;
function zipStrings(strA, strB) {
  //Create empty string to store new zippedString in it;
  let zippedString = "";
  //Start for-loop with a Math.max-function in the condition; the Math.max-function tells the loop, which string.length is longer and is the condition to stop the loop;
  //Add values of the current index of both strings to zippedString; adds empty value if string returns undefined;
  for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
    zippedString += strA[i] || "";
    zippedString += strB[i] || "";
  }
  //Return zippedString;
  return zippedString;
}
//All tests passed 👍🏻

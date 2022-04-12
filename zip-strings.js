/* First Solution (just copied from the other bootcampers, such a cheater!)
function zipStrings(strA, strB) {
  //Convert given strings to arrays;
  let arrA = strA.split("");
  let arrB = strB.split("");
  //Create empty array to store new zippedArray in it;
  let zippedArray = [];
  //Insert if-condition to check which array is longer or if both arrays have the same length; this will define the length of the iteration over the arrays;
  //Then iterate over both arrays and push their values into the zippedArray; iteration stops depending on the longer array
  if (arrA.length >= arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      zippedArray.push(arrA[i]);
      zippedArray.push(arrB[i]);
    }
  } else {
    for (let i = 0; i < arrB.length; i++) {
      zippedArray.push(arrA[i]);
      zippedArray.push(arrB[i]);
    }
  }
  //Convert new zippedArray to a string
  let zippedString = zippedArray.join("");
  //Return that string
  return zippedString;
}
*/

//A refactored solution, based on the other solution and avoiding creating arrays
function zipStrings(strA, strB) {
  //Create empty string to store new zippedString in it;
  let zippedString = "";
  //Start for-loop with a Math.max-function in the condition; the Math.max-function tells the loop, which string.length is longer and is the condition to stop the loop;
  //Add values of the current index of both strings to zippedString
  for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
    zippedString += strA[i];
    zippedString += strB[i];
  }
  //Return string and remove the undefined-indexes using a regular expression;
  return zippedString.replace(/[undefined]/g, "");
}
//Voilà, all tests passed 👍🏻

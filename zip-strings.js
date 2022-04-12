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

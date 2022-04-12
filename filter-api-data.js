//Idea 1
//Filter apiData-array for mandatoryKeys using array.filter(); returns new array with only the filtered entries
function filterApiData(apiData, mandatoryKeys) {
  const filteredData = apiData.filter((keys) => {
    return Object.keys(apiData) === mandatoryKeys;
  });
  return filteredData;
}
//Does not work - why?

/*
//Idea 2
//Turn objects in apiData into arrays via Object.entries()
//Compare the apiData-array to the mandatoryKeys array; which mandatoryKeys does it have?
//If mandatoryKey is in apiData-array, push that into new filteredData-array
//Convert key:value-pairs to objects again

function filterApiData(apiData, mandatoryKeys) {
  function apiArray(apiData) {
    let apiDataArray = [];
    for (let i = 0; i < apiData; i++) {
      apiDataArray.push(Object.entries(apiData[i]));
    }
    return apiDataArray;
  }

  function filterForMandatoryKeys(apiDataArray, mandatoryKeys) {
    let filteredData = [];
    for (let i = 0; i < apiDataArray; i++) {
      if (apiDataArray[i] === mandatoryKeys[i]) {
        filteredData.push(apiDataArray[i]);
      }
    }
    return filteredData;
  }
}
//Also not working
*/

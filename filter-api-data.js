//Filter apiData-array for mandatoryKeys using array.filter(); returns new array with only the filtered entries
//Filter-parameter checks for every mandatoryKey (spread operator (...) is similar to array.forEach() => iterates over every entry of the array), whether the key is included in the apiData-keys; if yes, the key is returned in the new array filteredData
function filterApiData(apiData, mandatoryKeys) {
  const filteredData = apiData.filter((keys) => {
    return Object.keys(keys).includes(...mandatoryKeys);
  });
  return filteredData;
}

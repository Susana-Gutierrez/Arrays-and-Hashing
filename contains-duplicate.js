
function containsDuplicate(nums){

  var output = false;

  var newArray = nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      output = true;
      break;
    }
  }


  return output;

}

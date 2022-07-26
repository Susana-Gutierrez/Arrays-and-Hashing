function longestConsecutive(nums) {

  var output = 0;
  var counter = 1;
  var newArraySingleNumbers = [];


  var newArray = nums.sort(function (a, b) {
    return a - b;
  });


  newArray.map( (num, index) => {
    if (num !== newArray[index - 1]) {
      newArraySingleNumbers.push(num);
    }
  });


  newArraySingleNumbers.map ((num, index) => {

    if ((num + 1) === newArraySingleNumbers[index + 1]) {
      counter = counter + 1;
    } else {
      if (counter > output) {
        output = counter;
      }
      counter = 1;
    }
  });

  return output;

}

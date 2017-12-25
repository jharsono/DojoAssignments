function numbersOnly(arr) {
  var newArray = [];

  for(var i = 0; i <= arr.length; i++) {
    var ele = arr[i];

    if (typeof ele === 'Number'){
      newArray.push(ele);
    }
  }
  return newArray;
  }
console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));

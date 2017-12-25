// until i= 30
// start at .01,
// sum * 2.
// return sum;


function fewBillion() {
  var sum = .01;

  for (var i = 1; i <= 30; i++) {
    if (i == 1) {
      sum = 1;
    } else {
    sum = sum * 2;
  }
}
  return sum;
}

console.log(fewBillion());

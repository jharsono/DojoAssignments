function printRange(start,end,skip) {
  for (var i = start; i < end; i += skip) {
    console.log(i);
  }

}

console.log(printRange(2,10,2));

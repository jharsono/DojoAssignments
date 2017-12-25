function fancyArray(names, symbol) {
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      console.log(i + symbol + name);
    }
  }

fancyArray([ "James", "Jill", "Jane", "Jack" ], ':');

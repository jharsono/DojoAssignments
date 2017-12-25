function randomChance(quarters) {
  var wallet = quarters;
  var reward = Math.floor(Math.random()*50) +50; //50 total possibilities, start at 50.
  var play = (Math.floor(Math.random()*100)); //random 1-100. if play = 1, reward + wallet. else, wallet - 1

  if (wallet > 0) {
    if (play == 1) {
      return 'Congratulations! You now have ' + (wallet += reward) + ' quarters';
    } else {
      wallet --;
      return "current wallet is " + wallet;
    }
  } else {
    return "You're broke.";
    }
  }
console.log(randomChance(10));

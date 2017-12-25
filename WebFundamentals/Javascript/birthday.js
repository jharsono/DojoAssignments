function daysUntilMyBirthday(days) {
  var until = ' days until my birthday.'
  var sadMessage = " Such a long time..."
  var excited = ' days until my birthday!'
  var birthday = 'HAPPY BIRTHDAY!!!!!'

for (var i = days; i >= 0; i--) {
    if (i > 30) {
      console.log(i + until + sadMessage);
    } else if ((i <= 30) && (i > 5)){
      console.log(i + excited);
    } else if ((i <= 5) && (i != 0)) {
      console.log(i + excited.toUpperCase());
    } else if (i == 0) {
      console.log(birthday);
    }
  }

}

console.log(daysUntilMyBirthday(32));

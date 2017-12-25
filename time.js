//if period = pm, "in the evening" else "in the morning"
//if minutes < 30 "just after", else "almost" hour + 1;
//


function time(hour, minutes, period) {
  if (minutes >= 30 && period == 'AM'){
    console.log('It is almost ' + (hour += 1) + ' in the morning.' );
    } else if
      (minutes >= 30 && period == 'PM'){
      console.log('It is almost ' + (hour += 1) + ' in the evening.' );
    } else if
        (minutes <= 30 && period == 'AM'){
        console.log('It is just after ' + hour + ' in the evening.' );
    } else if
        (minutes <= 30 && period == 'PM'){
        console.log('It is just after ' + hour  + ' in the evening.' );

  }
}

console.log(time(7, 10,'PM'));
console.log(time(7, 50,'PM'));
console.log(time(7, 10,'AM'));
console.log(time(7, 50,'PM'));

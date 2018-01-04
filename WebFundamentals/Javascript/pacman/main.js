window.onload = function() {


/* goals:
1. get JS to display the world. DONE
2. move Pacman
3. when pacman touches a coin, coin disappears
4. keep score
*/

var score = 0;
var world = [
  [2,2,2,2,2,2,2,2,2,2],
  [2,0,1,1,1,2,1,1,1,2],
  [2,2,2,1,1,2,1,2,1,2],
  [2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,2,2,1,2],
  [2,1,1,1,1,1,1,1,1,2],
  [2,1,2,1,2,2,2,1,1,2],
  [2,2,2,1,2,1,1,1,1,2],
  [2,1,1,1,2,1,2,1,1,2],
  [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
  x: 1,
  y: 1
}

function displayWorld() {
  var output = '';

  for (var i = 0; i < world.length; i++){
    output += "<div class='row'>\n"
    for (var j=0; j < world[i].length; j++) {
      if (world[i][j] == 2)
        output += "<div class='brick'></div>";
      else if (world[i][j] == 1)
          output += "<div class='coin'></div>";
      else if (world[i][j] == 0)
          output += "<div class='empty'></div>";
      }
      output += "\n</div>";
    }
  // console.log(output);
  document.getElementById('world').innerHTML = output;
}

function displayPacman(){
  document.getElementById('pacman').style.top = pacman.y*20+"px";
  document.getElementById('pacman').style.left = pacman.x*20+"px"
}

displayWorld();
displayPacman();

function updateScore(){
    if (score == 410) {
      document.getElementById('points').innerHTML = score;
      document.getElementById('play-again').style.visibility = "visible";
      alert('congratulations!')
    }
    else
    document.getElementById('points').innerHTML = score;
    }

document.onkeydown = function(key){
  if(key.keyCode == 37) {
    if(world[pacman.y][pacman.x-1]!=2){
      pacman.x --;
    }
  }

  else if(key.keyCode == 39) {
    if (world[pacman.y][pacman.x+1]!=2){
      pacman.x ++;
    }
  }

  else if (key.keyCode == 40) {
    if(world[pacman.y+1][pacman.x]!=2){
      pacman.y ++;
    }
  }
  else if (key.keyCode == 38) {
    if (world[pacman.y-1][pacman.x]!=2){
      pacman.y --;
    }
  }

  if(world[pacman.y][pacman.x] == 1){
      world[pacman.y][pacman.x] = 0;
    displayWorld();
    score += 10;
    updateScore();

  }
  displayPacman();
}


}

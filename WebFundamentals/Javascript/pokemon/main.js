  $(document).ready(function(){
    //generates images

    for(var i = 1; i <= 151; i++) {
      $("#poke-wrap").append("<div id="+i+" img'><img src='http://pokeapi.co/media/img/"+i+".png'></div>")
      }

  //click a Pokemon to put it into focus in the Pokedex
      $(document).on("click","img",function(){
        var pokeID = $(this).parent().attr('id');
        var urlString = "http://pokeapi.co/api/v2/pokemon/"+pokeID+"/";

        $.get(urlString,function(data){
          var image = data.sprites.front_default;
          var name = data.name;
          var height = data.height;
          var weight = data.weight;
          var type = data.types[0].type.name;

          $(".name").html("<h1>"+name+"</h1>");
          $("#focus-img").html("<img src='"+image+"'>");
          $(".stats").html(
            "<h2>Type:</h2><ul><li>"+type+"</li></ul>"+
            "<h2>Height:</h2><ul><li>"+height+"</li></ul>"+
            "<h2>Weight:</h2><ul><li>"+weight+"</li></ul>"
          );
          $("#poke-info").css("background-image","url(./backgrounds/"+type+".png)");

        }, "json");
      });

});

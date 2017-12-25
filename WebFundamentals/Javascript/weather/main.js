  $(document).ready(function(){
    $("form").submit(function(){
      var city = document.getElementById("city").value;
      var units = $('input[name=unit]:checked').val();
      var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&APPID=fd535ad1253638d1a9b8e222c138c998";
      console.log(url);

      $.get(url, function(weather) {
          console.log(weather);
        $(".city").html(weather.name);
        $(".current-condition").html(weather.weather["0"].main);

        function fOrC(){
          var units = $('input[name=unit]:checked').val();

          if (units == "metric") {
            return "C";
          } else {
            return "F";
          }
        }

        $("#temp").html(weather.main.temp+"° "+fOrC());

      }, 'json');

      return false;
    });

});

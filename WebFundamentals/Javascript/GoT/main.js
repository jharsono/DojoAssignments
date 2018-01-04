  $(document).ready(function(){
    var url="https://anapioficeandfire.com/api/houses/"

    $.get(url, function(data){
        console.log(data);

    }, 'json');

});

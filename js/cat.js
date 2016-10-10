var counter = 1
var kittyCounter = function (){

  $(document).ready( function(){
    $('#CatClicker').click(function(e) {
      var para = $("<p> Times you clicked the cat: "+ counter +"</p>");
      $("#KittyCounter").append(para);
      alert("You clicked the cat! " + counter);
      counter++;

    });
  });


}

kittyCounter();

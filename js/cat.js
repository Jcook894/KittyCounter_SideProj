var counter = 1
var kittyCounter = function (){

  $(document).ready( function(){
    $('#CatClicker').click(function(e) {
      var para = $("<p> Times you clicked the cat: ");
      $("#KittyCounter").text(counter++);
      console.log("You clicked the cat! " + counter);
      

    });
  });


}

kittyCounter();

var counter = 1
var kittyCounter = function (){

  $(document).ready( function(){
    $('#CatClicker').click(function(e) {
      alert("You clicked the cat! " + counter);
      counter++;

    });
  });


}

kittyCounter();

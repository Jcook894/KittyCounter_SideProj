var kittySuit = function (){
  var counter = 1

  $(document).ready( function(){
    $('#CatClicker1').click(function(e) {
      var para = $("<p> Times you clicked the cat: ");
      $("#KittyCounter").text(counter++);
      console.log("You clicked the cat! " + counter);

    });
  });

};

kittySuit();

var seriousCat = function(){
  var counter = 1;
  $(document).ready( function(){
    $('#CatClicker2').click(function(e) {
      var para = $("<p> Times you clicked the cat: ");
      $("#KittyCounter1").text(counter++);
      console.log("You clicked the cat! " + counter);

    });
  });

};

seriousCat();

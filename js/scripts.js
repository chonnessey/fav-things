$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const food = $("#food").val();
    const movie = $("#movie").val();
    const sport = $("#sport").val();
    const show = $("#show").val();
    let array = [];
    let result;

    array = [food, movie, sport, show];
    console.log(array);

    

    
    
  });
});




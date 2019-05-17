



/* Carousel image code */

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3500); // Change image every 3.5 seconds
}



// Initialize and add the map
function myMap() {
  // The location of Uluru
  var uluru = {lat: 53.312642, lng: -6.281301};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('googleMap'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
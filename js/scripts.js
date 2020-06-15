// Business Logic
function PlaceList() {
  this.place = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.place.push(place);
}

function Place(name, location, landmarks, year) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
}

let placeList = new PlaceList();
let place1 = new Place("New York City", "New York", "Statue of Liberty", "2013");
let place2 = new Place("Seoul", "South Korea", "Changgyeonggung Palace", "2013");
placeList.addPlace(place1);
placeList.addPlace(place2);

// User Interface Logic
$(document).ready(function() {
  $("#place1").click(function() {
    $("#place-attributes").append("<li>" + place1.name + "</li>");
    $("#place-attributes").append("<li>" + place1.location + "</li>");
    $("#place-attributes").append("<li>" + place1.landmarks + "</li>");
    $("#place-attributes").append("<li>" + place1.year + "</li>");
  });
  $("#place2").click(function() {
    $("#place-attributes").append("<li>" + place2.name + "</li>");
    $("#place-attributes").append("<li>" + place2.location + "</li>");
    $("#place-attributes").append("<li>" + place2.landmarks + "</li>");
    $("#place-attributes").append("<li>" + place2.year + "</li>");
  });
});
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
let place = new Place("New York City", "New York", "Statue of Liberty", "2013");
let place2 = new Place("Seoul", "South Korea", "Changgyeonggung Palace", "2013");
placeList.addPlace(place);
placeList.addPlace(place2);
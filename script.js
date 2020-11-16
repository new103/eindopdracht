let btn = document.querySelector('.toggle-button');
let menu = document.querySelector('.navbar-links');

btn.addEventListener('click', () => {
  menu.classList.toggle('on-off');
});

let benzine = document.querySelector('.benzine');
benzine.addEventListener('click', () => {
  menu.classList.toggle('on-off');
});

let diesel = document.querySelector('.diesel');
diesel.addEventListener('click', () => {
  menu.classList.toggle('on-off');
});

function initMap() {
  // Your location
  const loc = {
    lat: 52.043170,
    lng: 5.078620
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

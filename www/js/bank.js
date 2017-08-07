var bank = document.getElementById("banken");
var imagee = document.getElementById("contentdetail");
var mapss = document.getElementById("map_divv");
var xhr = new XMLHttpRequest();

(function() {

  function Banken(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bank+in+de+buurt+van+Veldstraat,+Gent&key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
      var that = this;

      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        if(xhr.status == 200) {
          var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
          var query = data.results;

        var htmlString = "<p>" + query[0].name + "</p>";
        var imagetop = "<div class='dunneafbeelding' id='rand_groen'><img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" + query[0].photos[0].photo_reference + "&key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4' class='foto_pagina' width='100%' alt='foto van de Deutsche Bank'></div>";
        var map = "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4&q=place_id:" + query[0].place_id + "' class='maps_detail'  id='rand_groen' width='45%' height='50%'></iframe>";

        bank.insertAdjacentHTML('beforeend', htmlString) ;
        imagee.insertAdjacentHTML('afterbegin', imagetop);
        mapss.insertAdjacentHTML('beforeend', map);

        } else {
          console.log('ERROR');
        }
      }
      xhr.onerror = function() {
        console.log('ERROR');
      }
      xhr.send();
    };

    this.updateUI = function() {

    };

    this.toString = function() {
      return `Bank with id: ${this.id}`;
    };

  };

  var ww1 = new Banken(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();






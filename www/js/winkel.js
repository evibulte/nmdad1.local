var winkelpagina = document.getElementById("winkelpagina");
var imagee = document.getElementById("contentdetail");
var mapss = document.getElementById("map_divv");
var xhr = new XMLHttpRequest();


;(function() {

  function Kledingwinkels(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=kledingwinkels+in+de+Veldstraat&key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4';
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

          console.log(query[0].place_id);

        var winkelnaam = "<p id='kledingwinkels_titel'>" + query[0].name + "</p>";
        var imagetop = "<div class='dunneafbeelding' id='rand_roze'><img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" + query[0].photos[0].photo_reference + "&key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4' class='foto_pagina' width='100%' alt='foto van het restaurant'></div>";
        var map = "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyB1agJceSV1yL8vZ206n_ffIWudLyMC5h4&q=place_id:" + query[0].place_id + "' class='maps_detail'  id='rand_roze' width='45%' height='50%'></iframe>";

        imagee.insertAdjacentHTML('afterbegin', imagetop);
        winkelpagina.insertAdjacentHTML('beforeend',winkelnaam);
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
      return `Kledingwinkel with id: ${this.id}`;
    };

  };

  var ww1 = new Kledingwinkels(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();

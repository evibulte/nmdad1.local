 var winkelpagina = document.getElementById("winkelpagina");




;(function() {

  function Kledingwinkels(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=kledingwinkels+in+de+Veldstraat&key=AIzaSyDOy_hGZ2uBDsKmUBzSlq1w5Sm4VBBokc0';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
      var that = this;

      var xhr = new XMLHttpRequest();
      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        if(xhr.status == 200) {
          var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
          var query = data.results;

        var winkelnaam = "<p id='kledingwinkels_titel'>" + query[1].name + "</p>";
        winkelpagina.insertAdjacentHTML('beforeend',winkelnaam);

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






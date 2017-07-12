var restaurant = document.getElementById("restaurantdata");

;(function() {

  function Restaurants(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+de+buurt+van+Veldstraat,+Gent&key=AIzaSyDOy_hGZ2uBDsKmUBzSlq1w5Sm4VBBokc0';
    this.id = id;
    this.parentContainer = parentContainer;
    this.results;

    this.loadData = function() {
      var that = this;

      Utils.getJSONPByPromise(this.API_URL).then(
        function(data) {
          that.results = data.query.results;
          that.updateUI();
        },
        function(error) {
          console.log(error);
        }
      );

    };

    this.updateUI = function() {
      var name = this.results.name;

      console.log(this.results);
    };

    this.toString = function() {
      return `Restaurant widget with id: ${this.id}`;
    };

  };

  var ww1 = new Restaurants(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();
/*
;(function() {

  function Restaurants(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+de+buurt+van+Veldstraat,+Gent&key=AIzaSyDOy_hGZ2uBDsKmUBzSlq1w5Sm4VBBokc0';
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

      
    var htmlString = "";

    for (i = 0; i < 8; i++){
        htmlString += "<p class='naam lichtoranje'>" + query[i].name + "</p><p class='tekst' id='veldstraat'>Dit is een restaurant in de buurt van de Veldstraat.</p><a href='resto.html'><button class='knopje oranje_acht' type='button'>Details</button></a>";
    }

    restaurant.insertAdjacentHTML('beforeend', htmlString) ;

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
      return `Restaurant with id: ${this.id}`;
    };

  };

  var ww1 = new Restaurants(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();
*/





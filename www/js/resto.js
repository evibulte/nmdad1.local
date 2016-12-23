 var restaurant = document.getElementById("restaurants_titel");


;(function() {

  function Resto(id, parentContainer) {
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


        var htmlString = "<p>" + query[1].name + "</p>";

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

  var ww1 = new Resto(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();






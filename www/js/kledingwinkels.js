 var winkels = document.getElementById("winkeldata");


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

          function openingsuren(){
              if(query[i].opening_hours['open_now'] == true){
                  return 'OPEN';
              }else{
                  return 'GESLOTEN';
              }
          }

      
    var htmlString = "";

    for (i = 0; i < query.length; i++){
        htmlString += "<p class='winkelnaam lichtroze'>" + query[i].name + "</p>" + "<p class='openingsuren roze_acht'>" + openingsuren() + "</p><p class='tekst' id='veldstraat'>Dit is een kledingwinkel in de Veldstraat.</p><a href='winkel.html'><button class='knopje roze_acht' type='button'>Details</button></a>";
    }

    winkels.insertAdjacentHTML('beforeend', htmlString) ;

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






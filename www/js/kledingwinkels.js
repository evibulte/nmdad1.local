var winkels = document.getElementById("winkeldata");
var xhr = new XMLHttpRequest();


(function() {

  function Kledingwinkels(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=kledingwinkels+in+de+Veldstraat&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc';
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
           console.log(query);
          var htmlString = "";

    if (query){
    for (var i=0;i<query.length;i++){
        
        function openingsuren(){
        
        if(query[i].opening_hours.open_now == true){
              return 'OPEN';
        }else{
              return 'GESLOTEN';
        }
      }
      if(query[i].opening_hours){  
        if(query[i].photos){          
          htmlString += "<div class='content_paginas'>"
          htmlString += "<div class='naam_div'><p class='naam lichtroze'>" + query[i].name + "</p></div><p class='openingsuren roze_acht'>" + openingsuren() + "</p><p class='tekst verdwijn' id='veldstraat'>Dit is een kledingwinkel in de Veldstraat.</p><div class='detail_div'><a href='winkel.html'><button class='knopje roze_acht' type='button'>Details</button></a></div>";
          if(query[i].photos){
          htmlString += "<div id='rand_roze' class='foto_div'><a href='winkel.html'><img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" + query[i].photos[0].photo_reference + "&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc' alt='foto van het restaurant'></a></div>";
          }
          htmlString += "</div>"
        }
      }
    }
    
    winkels.insertAdjacentHTML('beforeend', htmlString) ;
    }
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






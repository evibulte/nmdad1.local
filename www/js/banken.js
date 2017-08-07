var bank = document.getElementById("banken");
var xhr = new XMLHttpRequest();


;(function() {

  function Banken(id, parentContainer) {
    this.API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bank+in+de+buurt+van+Veldstraat,+Gent&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc';
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

      
    var htmlString = "";

    for (var i=0;i<query.length;i++){
        if(query[i].photos){  
                    htmlString += "<div class='content_paginas'>"
                    htmlString += "<div class='naam_div'><p class='naam lichtgroen'>" + query[i].name + "</p></div><p class='tekst verdwijn' id='veldstraat'>Dit is een bank in de buurt van de Veldstraat.</p><div class='detail_div'><a href='bank.html'><button class='knopje groen_acht' type='button'>Details</button></a></div>";
                    htmlString += "<div id='rand_groen' class='foto_div'><a href='bank.html'><img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + query[i].photos[0].photo_reference + "&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc' alt='foto van de bank'></a></div>";
                    htmlString += "</div>"
        }
    }

    bank.insertAdjacentHTML('beforeend', htmlString) ;

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






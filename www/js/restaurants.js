var xhr = new XMLHttpRequest();
(function() {

  function Restaurants(id, parentContainer) {
    this.API_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+de+buurt+van+Veldstraat,+Gent&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc";
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
      var that = this;
      xhr.open("get", this.API_URL, true);
      xhr.responseType = "json";

      xhr.onload = function() {
        if(xhr.status == 200) {
          var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
          var query = data.results;
          console.log(query);
          var htmlString = "";


          for (var i=0;i<query.length;i++){
              if(query[i].photos){  
                    htmlString += "<div class='content_paginas'>"
                    htmlString += "<div class='naam_div'><p class='naam lichtoranje'>" + query[i].name + "</p></div><p class='tekst verdwijn' id='veldstraat'>Dit is een restaurant in de buurt van de Veldstraat.</p><div class='detail_div'><a href='resto.html'><button class='knopje oranje_acht' type='button'>Details</button></a></div>";
                    htmlString += "<div id='rand_oranje' class='foto_div'><a href='resto.html'><img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + query[i].photos[0].photo_reference + "&key=AIzaSyClt78KgGA6NmJ6ga6bDEDKdqqQhsd-GOc' alt='foto van het restaurant'></a></div>";
                    htmlString += "</div>"
              }
          }
              restaurantdata.insertAdjacentHTML("beforeend", htmlString) ;

                } else {
                  console.log("ERROR");
                }
              };
      xhr.onerror = function() {
        console.log("ERROR");
      };
      xhr.send();
    };

    this.updateUI = function() {

    };

    this.toString = function() {
      return `Restaurant with id: ${this.id}`;
    };

  }

  var ww1 = new Restaurants(1, document.querySelector(".sidebar"));
  ww1.loadData();
  console.log(ww1.toString());

})();

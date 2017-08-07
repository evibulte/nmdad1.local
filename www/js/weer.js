var graden_dag1 = document.getElementById('dag1graden');
var graden_anderedagen = document.getElementById('weer_dagen');
var htmlString = '';
var xhr = new XMLHttpRequest();

(function() {

  function weer(id, parentContainer) {
    this.API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Gent,be&mode=json&APPID=881d75ee48f750505d02e5ca8bece4c8';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
      var that = this;

      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        if(xhr.status == 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            var query = data.list;
            
            var gradendag1 = Math.round(query[0].main.temp-273.15).toFixed(1) + '°C';
            graden_dag1.insertAdjacentHTML('beforeend', gradendag1) ;

                    function foto(){
                        if(graden < 15){
                        return "<img src='images/wolk.png'";
                        }else{
                            return "<img src='images/zon_zwart.png'";
                        }
                    };
                    
            for (var i=1;i<7;i++){

                    var graden = Math.round(query[i].main.temp-273.15).toFixed(1);

                    htmlString += "<div class='klein_vak_weer weerdata'>"
                    htmlString += "<div class='tekst_weer2' id='weerdag'>" + dag() + "</div>";
                    htmlString += "</div>";
                    htmlString += foto() + " width='90px' class='weerpic'>";
                    htmlString += "<p class='tekst_gradenzwart'>" + graden + "°C</p>";
            }
              graden_anderedagen.insertAdjacentHTML("beforeend", htmlString) ;

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
      return `Weather with id: ${this.id}`;
    };

  };

  var ww1 = new weer(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();



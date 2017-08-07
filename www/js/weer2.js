var weer_datum = document.getElementById("datum_weer");
var date = new Date();
var week = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
var month = new Array('Januarie', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

function getFormattedDate(today) {
    var day  = week[today.getDay()];
    var dd   = today.getDate();
    var mm   = month[today.getMonth()]; 

    if(dd<10)  { dd='0'+dd } 
    if(mm<10)  { mm='0'+mm } 

    return '<p>'+day+'</p><p>'+dd+'</p><p>'+mm+'</p>';
}

var text = getFormattedDate(date);
weer_datum.insertAdjacentHTML('beforeend', text) ;

var b = 0;
        for (var i=1;i<7;i++){
            function dag(today) {   
                b++;
                if(b < 7){              
                    if(today.getDay() + i > 7){i=0}else{i = i};
                    var day2  = week[today.getDay() + i];
                    var htmlstringday = '';
                    htmlstringday += '<div class="tekst_weer2"><p>'+ day2 +'</p></div>';
                    return htmlstringday;
                }else{
                    return "";}          
            }
            var weer_datum1 = document.getElementById("weerdag");
            var text1 = dag(date);
            weer_datum1.insertAdjacentHTML('beforeend', text1);
        }



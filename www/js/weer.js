var weer_datum = document.getElementById("datum_weer");
var weer_datum1 = document.getElementById("weerdag1");
var weer_datum2 = document.getElementById("weerdag2");
var weer_datum3 = document.getElementById("weerdag3");
var weer_datum4 = document.getElementById("weerdag4");
var weer_datum5 = document.getElementById("weerdag5");
var weer_datum6 = document.getElementById("weerdag6");

function getFormattedDate(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var month = new Array('Januarie', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');
    var day  = week[today.getDay()];
    var dd   = today.getDate();
    var mm   = month[today.getMonth()]; 

    if(dd<10)  { dd='0'+dd } 
    if(mm<10)  { mm='0'+mm } 

    return '<p>'+day+'</p><p>'+dd+'</p><p>'+mm+'</p>';
}

function dag1(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay() + 1];

    return '<p>'+day+'</p>';
}

function dag2(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay()+2];

    return '<p>'+day+'</p>';
}

function dag3(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay()+3];

    return '<p>'+day+'</p>';
}

function dag4(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay()+4];

    return '<p>'+day+'</p>';
}

function dag5(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay()+5];

    return '<p>'+day+'</p>';
}

function dag6(today) 
{
    var week = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
    var day  = week[today.getDay()+6];

    return '<p>'+day+'</p>';
}



var date = new Date();
var text = getFormattedDate(date);
var text1 = dag1(date);
var text2 = dag2(date);
var text3 = dag3(date);
var text4 = dag4(date);
var text5 = dag5(date);
var text6 = dag6(date);


weer_datum.insertAdjacentHTML('beforeend', text) ;
weer_datum1.insertAdjacentHTML('beforeend', text1) ;
weer_datum2.insertAdjacentHTML('beforeend', text2) ;
weer_datum3.insertAdjacentHTML('beforeend', text3) ;
weer_datum4.insertAdjacentHTML('beforeend', text4) ;
weer_datum5.insertAdjacentHTML('beforeend', text5) ;
weer_datum6.insertAdjacentHTML('beforeend', text6) ;





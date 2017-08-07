var AZknopje = document.getElementById('AZ');
var ZAknopje = document.getElementById('ZA');
var list, i, switching, b, shouldSwitch;

AZknopje.onclick = function sorterenAZ() {
  list = document.getElementsByClassName("data");
  switching = true;

  while (switching) {
    switching = false;
    b = document.getElementsByClassName("content_paginas");

    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }

    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

ZAknopje.onclick = function sorterenZA() {
  list = document.getElementsByClassName("data");
  switching = true;

  while (switching) {
    switching = false;
    b = document.getElementsByClassName("content_paginas");

    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }

    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

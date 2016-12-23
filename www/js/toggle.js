var knopje = document.getElementById("menu-toggle");

knopje.onclick = function(){
	event.preventDefault();
	var navigatie = document.getElementById("sidebar");

	if(navigatie.style.display !== "none"){
		navigatie.style.display = "none";
	}else{
		navigatie.style.display = "block";
	}
};
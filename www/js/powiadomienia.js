
function checkRadio() {
	if(document.getElementById('1godzina').checked) {
  		document.getElementById('test1').innerHTML = "1 godzina";
  		var interwal = "hour";
  		return interwal;
	}else if(document.getElementById('24godziny').checked) {
	  	document.getElementById('test1').innerHTML = "24 godziny";
	  	var interwal = "day";
	  	return interwal;
	}else if(document.getElementById('1minuta').checked) {
		document.getElementById('test1').innerHTML = "1 minuta";
		var interwal = "minute";
		return interwal;	
	}
}
function checkSlider(){
	var asd = document.getElementById('slider2').options[document.getElementById('slider2').selectedIndex].value
	return asd;
}

function checkStation(){
	var asd = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].value
	document.getElementById('test5').innerHTML = asd;
	return asd;
}


function ustawPowiadomienie(){
	interwal = checkRadio();
	pozwolenie = checkSlider();
	stacja= checkStation();
	localStorage.setItem("stacja", stacja);
	localStorage.setItem("pozwolenie", pozwolenie);
	localStorage.setItem("interwal", interwal);
	document.getElementById('test2').innerHTML = localStorage.getItem("interwal");
	document.getElementById('test3').innerHTML = localStorage.getItem("stacja");
	document.getElementById('test4').innerHTML = localStorage.getItem("pozwolenie");
	if (localStorage.getItem("pozwolenie") == "on") {
		powiadomienia()
	}
}

function wykonajPomiar(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+localStorage.getItem("stacja"), function( stan3 ) {
				pomiarPowiadomienie = stan3.stIndexLevel.indexLevelName;
				localStorage.setItem("pomiar", pomiarPowiadomienie);
				document.getElementById('test6').innerHTML = localStorage.getItem("pomiar");
				return pomiarPowiadomienie;			
			});
}





function powiadomienia(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Testowe powiadomienie',
	  text: 'Stan jakości powietrza na stacji:' + wykonajPomiar(),
	  sound: null,
	  every: localStorage.getItem("interwal"), //, "hour", "week", "month", "year"
	  autoClear: false,
	  at: new Date(new Date().getTime() + 10*1000)
	});
}
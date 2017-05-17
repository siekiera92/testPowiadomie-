
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
/*
function checkSlider(){
	if(document.getElementById('slider2').options[0].selected = 'selected';) {
  		document.getElementById('test3').innerHTML = "Nie ma zgody";
  		var pozwolenie = "0";
  		return pozwolenie;
	}else if(document.getElementById('slider2').options[1].selected = 'selected';) {
  		document.getElementById('test3').innerHTML = "Jest zgoda";
  		var pozwolenie = "1";
  		return pozwolenie;
  	}
}
*/
function ustawPowiadomienie(){
	interwal = checkRadio();
	pozwolenie = checkSlider();
	localStorage.setItem("pozwolenie", pozwolenie);
	localStorage.setItem("interwal", interwal);
	document.getElementById('test2').innerHTML = localStorage.getItem("interwal");
	document.getElementById('test4').innerHTML = localStorage.getItem("pozwolenie");
	powiadomienia()
}
//document.getElementById('test2').innerHTML = localStorage.getItem("interwal");




function powiadomienia(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Testowe powiadomienie',
	  text: 'Tu będą wskazania jakości powietzra jak już ogarnę jak dobrze robić powiadomienia',
	  sound: null,
	  every: localStorage.getItem("interwal"), //, "hour", "week", "month", "year"
	  autoClear: false,
	  at: new Date(new Date().getTime() + 10*1000)
	});
}
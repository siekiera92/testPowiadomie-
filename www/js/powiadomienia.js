function powiadomienia(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Testowe powiadomienie',
	  text: 'Tu będą wskazania jakości powietzra jak już ogarnę jak dobrze robić powiadomienia',
	  sound: null,
	  every: 'minute',
	  autoClear: false,
	  at: new Date(new Date().getTime() + 10*1000)
	});
}
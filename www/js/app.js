
var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();
var countdown=new Object();
var punteggio=new Object();
var contatore=0;
var conta=function conteggio(d,a){
	if (d === a) {
		contatore = contatore + 10;
	}else{
		contatore = contatore + (-10);
		if ( contatore <0 ) contatore = 0;
	}
}

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
  animateIMG();
  $('#risposta').click(function(){
	countdown.stop()
	$('p').stop();
	$('p').hide();
  })
  $('#ok').click(function(){
  	var d=$('p').text();
  	var a=$('#risposta').val();
	var n=$.Deferred(function(){
		conta(d,a);
	}).done(function(a){
		countdown.start();
		punteggio.setTime(a);
	  	$('#risposta').val("");
	    animateIMG();
		$('p').show();
	})
	n.resolve(contatore)
  })
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

deviceReadyDeferred.then(function(){
	init();
});

jqmReadyDeferred.then(function(){
	init();
});

function init() {
	countdown=$('#countdown').FlipClock("100", {
		autoStart:true,
		clockFace: 'Counter',
		countdown:true
	})
	punteggio=$('#punteggio').FlipClock("00", {
		autoStart:false,
		clockFace: 'Counter',
		countdown:false,
	})
}


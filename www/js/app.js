var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
  $('div').click(function(){
    $('#rispondi').show();
	$('p').stop();
	$('p').hide();
  })
  $('#ok').click(function(){
    $('#rispondi').hide();
	$('p').show();
    animateIMG();
  })
  animateIMG();
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
}

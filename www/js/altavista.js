function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateIMG(){
    var newq = makeNewPosition();
    
    //animo lettere
    $('p').text(String.fromCharCode(randomNum(97,121)));
    //animo numeri
    //$('p').text(randomNum(96,121));
    var oldq = $('p').offset();
    var zoom = $('p').css('zoom',randomZoom(50,150))
    var speed = calcSpeed([oldq.top, oldq.left], newq, 0.1);
    
    $('p').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateIMG();        
    });
    
};

function calcSpeed(prev, next, speedControl) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    
    var speedModifier = speedControl;// control the speed here 

    var speed = Math.ceil(greatest/speedModifier);
    return speed;

};

function randomZoom(min,max){
	//(Math.random() * (max - min) + min)/max
	var m=min;
	var n=max;
	var r=(Math.random() * (n - m) + m)/n;
	return r;
};

function randomNum(min,max){
	var m=min;
	var n=max;
	var r=m+Math.round(Math.random()*n); 
	if (r > n ){
		return (n-(r-n));
	}
	if (r < m ){
		return (m+(m-r))	
	}
	return r; 
}


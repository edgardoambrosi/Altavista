function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw]; 
}

function animateIMG(){
	//selezioni un simbolo
    if ( randomNum(0,1) === 0 ){
		//lettere e simboli
    	$('p').text(String.fromCharCode(randomNum(97,121)));
    }else{	
	    //numeri
	    $('p').text(randomNum(96,121));
	}    

	//selezioni nuovo punto casuale sullo schermo
    var newq = makeNewPosition();
	

    //calcoli le coordinate dell'elemento p
    var oldq = $('p').offset();
    //calcoli il tempo in millisecondi che l'animazione deve durare
    var speed = calcSpeed([oldq.top, oldq.left], newq, 0.5);

	//grandezza lettere casuale
    //var zoom = randomZoom(50,150)
    //$('p').animate({ top: newq[0], left: newq[1], zoom: zoom }, speed, function(){
    //  animateIMG();        
    //});

	//grandezza lettere con formula di Snellen     
    var visus=randomNum(6,10);
    var fontsize=ottoTipo(visus)
    $('p').animate({ top: newq[0]+"mm", left: newq[1]+"mm", fontSize: fontsize+"px" }, speed, "linear", function(){
      animateIMG();        
    });
    

};

//calcola un certo numero di millisecondi 
function calcSpeed(prev, next, speedControl) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    
    var speedModifier = speedControl;// control the speed here 

    var speed = Math.ceil(greatest/speedModifier);
    //console.log(speed)
    return speed;

};

function randomZoom(min,max){
	//(Math.random() * (max - min) + min)/max
	var m=min;
	var n=max;
	var r=(Math.random() * (n - m) + m)/n;
	return r;
};

function ottoTipo(visus){
	//finire di calcolare la grandezza dell'ottotipo a seconda della distanza
	a3metri=( 1000 * 10 )/ (687,5 * visus);
	a50cm=( 500 * 10 )/ (687,5 * visus);
	return a50cm;
}

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


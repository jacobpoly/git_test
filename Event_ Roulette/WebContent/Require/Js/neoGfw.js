var spinCount = 0;
var wheelNum = 0;
var startAngle = 0;
var spinTimeTotal = 0;

var slow_spinAngleStart = 0;
var slow_spinTime = 0;
var slow_spinTimeTotal = 0;

var spinAngleStart = 0;
var spinTime = 0;
var spinAngle = 0;

var arc = 0;

var angle = 0;
var ctx;

var titleArray = Array();
var arcArray = Array();
var angleArray = Array();
var iconArray = Array();
var icons = ["images/roulette_goods01.png", "images/roulette_goods02.png" , "images/roulette_goods03.png", "images/roulette_goods04.png" , "images/roulette_goods05.png", "images/roulette_goods06.png","images/roulette_goods07.png", "images/roulette_goods08.png"];


var colors=["#48D1CC","#FFFFFF","#48D1CC","#FFFFFF","#48D1CC","#FFFFFF","#48D1CC","#FFFFFF"];

var sample = [ "1 등", "", "심부름 하기", "술값 내기", "2차 쏘기", "당첨 니가 쏴", "회비 면제", "파도타기" ];
var no = 0;
var canvas = null;
var w = 0;
var h = 0;
var pin = 0;
var fontsize = 0;
var tempAngle = 0;
var msg = "";
var timefunc_start = "";
var timefunc_stop = "";
var temp =0 ;

function InitRoulet() {

	var title = Array();

	no = sample.length;

	for (var i = 0; i < parseInt(no); i++) {
		title[i] = sample[i];
	}
	rouletGame.readyGame(title);
}

function rouletGame_start(){
	rouletGame.spinWheel('start');
	return;
}


var rouletGame = {
	$gamecanvas : {},
	$roulet : {},
	title : [],

	readyGame : function(obj1) {
		titleArray = obj1;
		wheelNum = titleArray.length;

		arc = (Math.PI * 2) / (parseInt(wheelNum));

		rouletGame.$roulet = $("#roulette_wrap");

		rouletGame.drawRouletWheel();
	},

	drawRouletWheel : function() {

		var img_Radius = 0;

		canvas = document.getElementById("rouletcanvas_1");
		w = $("#rouletcanvas_1").innerWidth();
		h = $("#rouletcanvas_1").innerHeight();
		img_Radius = 130; // 글자 지정 위치

		var w_h = parseInt(w) / 2;
		var h_h = parseInt(h) / 2;

		var outsideRadius = w_h;
		var insideRadius = 125;

		ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, w, h);

		for (var i = 0; i < wheelNum; i++) {

			angle = startAngle + i * arc;
			ctx.fillStyle = colors[i];
			ctx.beginPath();

			ctx.arc(w_h, w_h, w_h, angle, angle + arc, false);
			ctx.arc(w_h, w_h, 0, angle + arc, angle, true);
			ctx.fill();

			ctx.save();
			
			// 아이콘 채우기로 변경
		//	ctx.shadowOffsetX = -1;
		//	ctx.shadowOffsetY = -1;
		//	ctx.shadowBlur = 0;
			
			iconArray[i] = new Image();
			iconArray[i].src = icons[i]; 
		    ctx.fillStyle = ctx.createPattern(iconArray[i], 'no-repeat') ;
			ctx.translate(w_h + Math.cos(angle + arc / 30) * img_Radius, w_h + Math.sin(angle + arc / 30) * img_Radius);
		    ctx.rotate(angle + arc / 2 + Math.PI / 2); 
			ctx.fill();
			
			//	text = titleArray[i];
			//	ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
	
			ctx.restore();
		}

	},
	
	slow_Wheel : function() { // 멈출 지점 지정하는 회전


	 slow_spinAngleStart = 5.625; 			// 각도 지정 값
	 slow_spinTime = 0;
	 slow_spinTimeTotal = 3650;  // 처리 값
	 
	 console.log("slow_spinTimeTotal  :: "+  slow_spinTimeTotal) ;  // 처리 값
	 
	 
	 
	 
	    clearTimeout(timefunc_stop);
		rouletGame.slow_RWheel();

},

slow_RWheel : function () {
	
	slow_spinTime += 15;
	
	//temp +=1;
	
	if(slow_spinTime >= slow_spinTimeTotal) {
		
		
		rouletGame.stopRotateWheel();
	    
	    return;
    }	
    	    	    
    var spinAngle = slow_spinAngleStart - rouletGame.easeOut(slow_spinTime, 0, slow_spinAngleStart, slow_spinTimeTotal);
    
    
    startAngle += (spinAngle * Math.PI / 90);     
    
    setTimeout( function() {rouletGame.slow_RWheel();}, 30 );
    
    rouletGame.drawRouletWheel();	        		
},


	spinWheel : function(msg) { // 회전 신호 보내기


		spinAngleStart = 5.625;
		spinTime = 0;
		spinTimeTotal = 4000;
		// spinTimeTotal = Math.random() * 3 + 4 * 1000;


		if (msg == 'stop') {

			clearTimeout(timefunc_start);
			rouletGame.rotateWheel('stop');

		} else if(msg == 'start') {
			rouletGame.rotateWheel('start');

		}
	},
	
	rotateWheel : function(msg) { // 신호에 따른  회전

		if (msg == 'start') { // start
			
			    timefunc_start = setTimeout(function() {rouletGame.rotateWheel(msg);}, 30);
		}
		spinCount += 1;

		spinAngle = spinAngleStart - rouletGame.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
		startAngle += (spinAngle * Math.PI / 90);
	
		//console.log("spinCount :: " + spinCount);

			if (spinCount % 32 == 0 && msg == 'stop') {

		//		console.log("spinCount :: " + spinCount);
		//		console.log("==========stop 진입 ============");

				rouletGame.slow_Wheel();
				
			//	console.log("spinTime  :: " + spinTime);
		}
			else if (spinCount % 32 != 0 && msg == 'stop'){
			   timefunc_stop = setTimeout(function() {rouletGame.rotateWheel(msg);}, 30);
		}
			
				rouletGame.drawRouletWheel();
				
				if (msg == 'start' && spinCount % 150 == 0) {
					
					return 	rouletGame.spinWheel('stop');
				}
		
	},

	
	easeOut : function(t, b, c, d) {
		var ts = (t /= d) * t;
		var tc = ts * t;

		pin = 3;
		$("#roulet_pin").rotate(pin);

		return b + c * (tc + -3 * ts + 3 * t);
	},

	stopRotateWheel : function() {

		clearTimeout(rouletGame.slow_RWheel);   // 회전  정지

		var degrees = 0;

		var arcd = 0;
		var index = 0;

	//	console.log("================================");

		
	//	console.log("startAngle :: "+ startAngle);
		
		degrees = startAngle * 180 / Math.PI + 90;
		
	//	console.log("degrees :: "+ degrees);
		
		arcd = arc * 180 / Math.PI;
		
	//	console.log("arcd :: "+ arcd);

		index = Math.floor((360 - degrees % 360) / arcd);
		
	
		ctx.save();
		var text = titleArray[index];
		
	//	console.log("index :: "+index);
	//	console.log("titleArray[index] :: "+ titleArray[index]);
		

		$("#roulet_result").show();
		$("#r_td").html("<h3>" + text + "</h3>");

	}
};



$(document).ready(function() {
    
//function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

//	$('#canvas-div').removeAttr('width');
//	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 800;
$("#div123").html("");
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('div123'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('60%', '60%');
	} else {
		paper = new Raphael(document.getElementById('div123'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('60%', '60%');
	}


	x = 50;
	y = 50;
	time = 5;
	flag = 0;
	ht_in = 0;
	ht_dec = 0;
	var pt_max = 0;
	var pt = 0;
	var pc_max = 0;
	var pc = 0;
	var pt_Dmax = 0;
	var ptd = 0;
	
	
	paper.path('M' + (x + 100 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 198 ) + ' ' + (y + 100 ) + 'l 100 0 l 0 50 l 10 -10 l -10 10 l -10 -10')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
	
	var sv_V1 = paper.path(
		'M' + (x + 180) + ' ' + (y + 100) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
	
	var tank = paper.path('M' + (x + 200 ) + ' ' + (y + 200 ) + 'l 0 200 l 300 0 l 0 -200  M'+(x+200)+' '+(y+200)+' A 80 27 0 0 1 '+(x+500)+' '+(y+200)+'' )
			.attr({ 'stroke': 'black', 'stroke-width': '5' });
			
	paper.path('M' + (x + 350 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 350 ) + ' ' + (y + 100 ) + 'l 0 0 l 0 50 l 10 -10 l -10 10 l -10 -10M'
	+' ' + (x + 450 ) + ' ' + (y + 100 ) + 'l 50 0 ')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
		paper.path('M' + (x + 335 ) + ' ' + (y + 400 ) + 'l 0 50   M' + (x + 335) + ' ' + (y + 470) + ' l 0 80 l 100 0 l 0 100 l 80 0 M'
		+ (x + 435) + ' ' + (y + 550) + ' l 0 -50 l 80 0 M' + (x + 435) + ' ' + (y + 570) + ' l 80 0  M' )
			.attr({ 'stroke': 'black', 'stroke-width': '3' });		
	
	
		
		
		paper.path('M' + (x + 532 ) + ' ' + (y + 570 ) + 'l 50 0   M' + (x + 532) + ' ' + (y + 500) + ' l 50 0 M'
		+ (x + 532) + ' ' + (y + 650) + ' l 50 0 M' + (x + 200) + ' ' + (y + 200) + ' l -50 0 l 0 70  M'+ (x + 200) + ' ' + (y + 400) + 'l -50 0 l 0 -70' )
			.attr({ 'stroke': 'black', 'stroke-width': '3' });	
							
	
	
	var sv_V2 = paper.path(
		'M' + (x + 445) + ' ' + (y + 100) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
	var sv_V3 = paper.path(
		'M' + (x + 320) + ' ' + (y + 450) + 'l 30 0 l -30 20 l 30 0 l -30 -20 + M' + (x + 335) + ' ' + (y + 460) + ' l 20 0 l 0 10 l 10 0 l 0 -20 l -10 0 l 0 10 ')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V5 = paper.path('M' + (x + 515) + ' ' + (y + 570) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V4 = paper.path('M' + (x + 515) + ' ' + (y + 500) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V6 = paper.path('M' + (x + 515) + ' ' + (y + 650) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});		
		 
	
			
		
		
		var pump_circle = paper.circle(x + 580, y , 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });
		var pump_circle = paper.circle(x + 580, y + 110, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });
		var pump_circle = paper.circle(x + 580, y + 420, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		var pump_circle = paper.circle(x + 120, y + 420, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		var pump_circle = paper.circle(x + 150, y + 300, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		
		paper.path('M' + (x + 470 ) + ' ' + (y + 420 ) + 'l 80 0   M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
		+ (x + 580) + ' ' + (y + 70) + ' l 0 10 M' + (x + 580) + ' ' + (y + 50) + ' l 0 10  M' 
		+(x + 580) + ' ' + (y + 30) + ' l 0 10 M' + (x + 445) + ' ' + (y + 65) + ' l 0 -65 l 100 0 M'
		+(x + 495) + ' ' + (y - 10 ) + ' l -20 20 M' + (x + 505) + ' ' + (y -10) + ' l -20 20  M'
//		+(x + 445) + ' ' + (y ) + ' l 0 10 M' + (x + 455) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 475) + ' ' + (y ) + ' l 10 0 M' + (x + 495) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 520) + ' ' + (y ) + ' l 10 0 M' + (x + 540) + ' ' + (y ) + ' l 10 0  M'
		+ (x + 150 ) + ' ' + (y + 420 ) + 'l 80 0  l 0 -20  M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
		+ (x + 580 ) + ' ' + (y + 140 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 160) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 180 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 200) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 220 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 240) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 260 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 280) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 300 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 320) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 340 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 360) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 380 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 400) + ' l 0 0 M')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
		textLables(x,y);		
		function textLables(x,y){
			
		
		var u2txt = paper.text(x +610, y + 570, "V5").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		var u2txt = paper.text(x +610, y + 500, "V4").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		var u2txt = paper.text(x +610, y + 650, "V6").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		
		var u2txt = paper.text(x + 390, y + 460, "V3").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		
		var u2txt = paper.text(x + 160, y + 50, " SV V1").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 160, y + 30, "Water Inlet").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 400, y + 30, "Air Inlet").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		
		var u2txt = paper.text(x + 420, y + 50, "V2").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y + 420, "PT").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y + 110, "PC").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y , "PY").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 120, y + 420, "LSL").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 150, y + 300, "DPT").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 140, y + 520, "DPT - Differential Pressure Transmiter").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 820, y + 420, "Kg/cm"+unescape('%B2')+"").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		var u2txt = paper.text(x + 750, y, "PY - Current to Pneumatic ").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		var u2txt = paper.text(x + 760, y+20, " Convertor").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 730, y+180, "PC - Pressure Controller").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		var u2txt = paper.text(x + 730, y+350, "PT - Pressure Transmitter").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		var u2txt = paper.text(x+80, y+480, "LSL - Low level Switch").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		
		}
		
//		
//
//
//
		
		y1 = 0;
		sv_V1.click(function(event){
			
			sv_V1.attr('fill','green');
			if(flag == 0 )
			{	y1 = 397;
				ht_in = -200;
				flag = 1;
				 pt_max = 4;
				 pt = 0;
			}else if(flag == 1)
			{
				ht_in = -100;
				y1 = y1 + ht_in;
				pc_Dmax = 0;
				PC_decrement(x,y);
				setTimeout(function() { sv_V2.attr('fill','red')}, time * 1000);
			}
		
			tank_fill(x, y);
			PT_increment(x,y);
			setTimeout(function() { sv_V1.attr('fill','red')}, time * 1000);
		});
		
		
		
		
		
		sv_V3.click(function(event){
			if(flag == 1){
				ht_dec = 100;
				pt_Dmax = 2;
				
				sv_V3.attr('fill','green');
				sv_V4.attr('fill','green');
				sv_V5.attr('fill','green');
//				sv_V6.attr('fill','green');
				tank_empty(x, y);
				PT_decrement(x,y);
				setTimeout(function() {limit (x,y); }, time * 1000);
			}
			else{
				alert("Tank is empty, click on V1 to fill the tank");
			}
			
			
		});
		function limit (x,y)
		{
//			alert("Pressure is low. to maintain the pressure click on V2 and V1 to start the water supply");
			flag = 1;
			sv_V2.attr('fill','green');
			pc = 0;
			pc_max = 2;
			pt_max = 4;
			PC_increment(x,y);
			PT_increment(x,y);
		}
		
		sv_V2.click(function(event){
			flag = 1;
			sv_V2.attr('fill','green');
			pc = 0;
			pc_max = 2;
			pt_max = 4;
			PC_increment(x,y);
			PT_increment(x,y);
			
			
		});
	
		
		function tank_fill(x, y)
		 {
		var b = paper.path('M' + (x + 350) + ' ' + (y + y1) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '293.5' });
		level = b.animate({path: "M" + (x + 350) + " " + (y + y1) + "  l 0  " + (ht_in) + "", 'stroke-width': '293.5', 'stroke': '#85d3ed',
		opacity: 1}, time * 1000)
	};
	
	function tank_empty(x, y)
		 {
		var b = paper.path('M' + (x + 350) + ' ' + (y + 197) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '293.5' });
		level = b.animate({
			path: "M" + (x + 350) + " " + (y + 197) + "  l 0  " + (ht_dec) + "", 'stroke-width': '293.5', 'stroke': 'white',
			opacity: 1
		}, time * 1000)
	};
	

	paper.rect(x + 670, y + 80, 100, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	pc_txt = paper.text(x + 720, y + 100, Math.round(pc)).attr({ 'font-size': 20 });
	
	paper.rect(x + 670, y + 400, 100, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	pt_txt = paper.text(x + 720, y + 420, Math.round(pt)).attr({ 'font-size': 20 });
	
	function PT_increment(x,y){
		intFact = pt_max/time;
	pt_interval = setInterval(function() {

			if (pt < pt_max) {

				pt = pt + intFact;

				pt_txt.attr('text',Math.round(pt));
			}else
			   {
				clearInterval(pt_interval);
			}
		}, 1000);		
}

	function PC_increment(x,y){
		intPc = pc_max/time;
	pc_interval = setInterval(function() {

			if (pc < pc_max) {

				pc = pc + intPc;

				pc_txt.attr('text',Math.round(pc));
			}else
			   {
				clearInterval(pc_interval);
			}
		}, 1000);		
}


	function PT_decrement(x,y){
		ptDec = pt_Dmax/time;
	ptd_interval = setInterval(function() {

			if ( pt > pt_Dmax) {

				pt = pt - ptDec;

				pt_txt.attr('text',Math.round(pt));
			}else
			   {
				clearInterval(ptd_interval);
			}
		}, 1000);		
}
 var pc_Dmax ;
function PC_decrement(x,y){
		pcDec = pc/time;
	pcd_interval = setInterval(function() {

			if ( pc > pc_Dmax) {

				pc = pc - pcDec;

				pc_txt.attr('text',Math.round(pc));
			}else
			   {
				clearInterval(pcd_interval);
			}
		}, 1000);		
}

//}
//console.log( "ready!" );
});


//$(document).ready(function() {
    
function resetMimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 1000;
//$("#div123").html("");
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}


	x = 50;
	y = 50;
	time = 1;
	flag1 = 0;
	ht_in = 0;
	ht_dec = 0;
	var pt_max = 0;
	var pt = 0;
	var pc_max = 0;
	var pc = 0;
	var pt_Dmax = 0;
	var ptd = 0;
	var dpt_max = 0;
	dpt1 = 0;
	tnktxt = 0; 
	 var pc_Dmax = 0;
	 dpttime = 250;
	 
	 if (height1 == 4){
		dpt1 = -4000; 
		 tnktxt = 4;
		 time = 2; 
	 }else if (height1 == 6){
		 dpt1 = -6000; 
		 tnktxt = 6;
		 time = 3;
	 }else if (height1 == 8){
		 dpt1 = -8000; 
		 tnktxt = 8;
		 time = 4;
	 }else if (height1 == 10){
		 dpt1 = -10000; 
		 tnktxt = 10;
		 time = 5;
	 }
	console.log("2ed page");
	
	
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
		+ (x + 532) + ' ' + (y + 650) + ' l 50 0 M' ).attr({ 'stroke': 'black', 'stroke-width': '3' });
		
	tank_line  = 	paper.path('M' + (x + 505 ) + ' ' + (y + 200) + 'l 20 0   M' + (x + 517) + ' ' + (y + 200) + ' l 0 200 M'
		+ (x + 505) + ' ' + (y + 400) + ' l 20 0 M' ).attr({ 'stroke': 'black', 'stroke-width': '3' });
		
	tank_text =  paper.text(x + 540, y + 300, tnktxt+' m').attr({ 'font-size': 20 });	
			
							
	paper.path(
		'M' + (x + 200) + ' ' + (y + 210) + 'l -120 0 l 0 270 l-10 0 l 0 -280 l 130 0 ')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': '#85d3ed'
		});	
		
	paper.path(
		'M' + (x + 200) + ' ' + (y + 403) + 'l -50 0 l 0 70 l-10 0 l 0 -80 l 60 0 ')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': '#85d3ed'
		});	
	
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
		var LSL_circle = paper.circle(x + 120, y + 370, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'red' });	
		var DPT_circle = paper.circle(x + 110, y + 500, 47).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		
	paper.rect(x + 500, y + 130, 50, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	setpt = paper.text(x + 520, y + 150, tnktxt).attr({ 'font-size': 20 });
	
	paper.rect(x + 670, y + 80, 100, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	pc_txt1 = paper.text(x + 720, y + 100, Math.round(pc)).attr({ 'font-size': 20 });
	
	paper.rect(x + 670, y + 400, 100, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	pt_txt = paper.text(x + 720, y + 420, Math.round(pt)).attr({ 'font-size': 20 });
	
	paper.rect(x + 180, y + 480, 80, 50).attr({ 'stroke-width': '1', 'fill': 'white' }).toFront();
	dpt_txt1 = paper.text(x + 210, y + 500, Math.round(dpt1)).attr({ 'font-size': 20 });
	dpt_unit = paper.text(x + 300, y + 500, "mmWC").attr({ 'font-size': 15 ,'font-weight': "bold"});
		
		paper.path('M' + (x + 470 ) + ' ' + (y + 420 ) + 'l 80 0   M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
		+ (x + 580) + ' ' + (y + 70) + ' l 0 10 M' + (x + 580) + ' ' + (y + 50) + ' l 0 10  M' 
		+(x + 580) + ' ' + (y + 30) + ' l 0 10 M' + (x + 445) + ' ' + (y + 65) + ' l 0 -65 l 100 0 M'
		+(x + 495) + ' ' + (y - 10 ) + ' l -20 20 M' + (x + 505) + ' ' + (y -10) + ' l -20 20  M'
//		+(x + 445) + ' ' + (y ) + ' l 0 10 M' + (x + 455) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 475) + ' ' + (y ) + ' l 10 0 M' + (x + 495) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 520) + ' ' + (y ) + ' l 10 0 M' + (x + 540) + ' ' + (y ) + ' l 10 0  M'
		+ (x + 150 ) + ' ' + (y + 370 ) + 'l 50 0  l 0 0  M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
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
		
		
		var u2txt = paper.text(x + 160, y + 50, " V1").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 160, y + 30, "Water Inlet SV").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 400, y + 30, "Air Inlet").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 100, y-20 , "SV - Solenoid Valve").attr({
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
		
		var u2txt = paper.text(x + 530, y + 110, "SP").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y , "PY").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 120, y + 370, "LSL").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var LSL_500 = paper.text(x + 170, y + 360, "500").attr({
		'font-size': 15,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 110, y + 500, "DPT").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 140, y + 600, "DPT - Differential Pressure Transmitter").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 820, y + 420, "Kg/cm"+unescape('%B2')+"").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt1 = paper.text(x + 820, y + 100, "Kg/cm"+unescape('%B2')+"").attr({
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
		var u2txt = paper.text(x+80, y+560, "LSL -Level Switch Low ").attr({
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
			if(flag1 == 0 )
			{	y1 = 397;
				ht_in = -200;
				flag1 = 1;
				if (height1 == 4){
					pt_max = 4;
				 	pt = 0;
				 	dpt = -4000;
				}else if (height1 == 6){
					pt_max = 6;
				 	pt = 0;
				 	dpt = -6000;
				}else if (height1 == 8){
					pt_max = 8;
				 	pt = 0;
				 	dpt = -8000;
				}else if (height1 == 10){
					pt_max = 10;
				 	pt = 0;
				 	dpt = -10000;
				}
				 
				 tank_fill(x, y);
			PT_increment(x,y);
			 DPT_increment(x,y);
			 LSL_circle.attr('fill','green');
			setTimeout(function() { sv_V1.attr('fill','red')}, time * 2000);
			}
			
//			else if(flag == 1)
//			{
//				ht_in = -100;
//				y1 = y1 + ht_in;
//				pc_Dmax = 0;
//				PC_decrement(x,y);
//				setTimeout(function() { sv_V2.attr('fill','red')}, time * 1000);
//			}
			
				
		else if (flag1 == 4){
				ht_in = - 70;
				y1 = y1 - 29;
				LSL_circle.attr('fill','green');
				tank_fill(x, y);
				
				
				setTimeout(function() {sv_V3.attr('fill','green');
				sv_V4.attr('fill','green');
				if (height1 == 4){
					dpt_max = -2000;
					pc_Dmax = 2;
					pt_Dmax = 2;
				}else if (height1 == 6){
					dpt_max = -3000;
					pc_Dmax = 3;
					pt_Dmax = 3;
				}else if (height1 == 8){
					dpt_max = -4000;
					pc_Dmax = 4;
					pt_Dmax = 4;
				}else if (height1 == 10){
					dpt_max = -5000;
					pc_Dmax = 5;
					pt_Dmax = 5;
				}
				
				PC_decrement(x,y);
				
				sv_V2.attr('fill','green');
//				pc = 2;
//  				pc_txt.attr('text',pc);
				DPT_increment(x,y)
				}, time*100 );
				setTimeout(function() {case4(); }, time * 2001);
				
				
			}
			
			
			
			function case4(){
				ht_in = - 50;
				y1 = y1 - 70 ;
				tank_fill(x, y);
				setTimeout(function() {
				sv_V5.attr('fill','green');
				if (height1 == 4){
					dpt_max = -1000;
					pc_Dmax = 1;
				;
				}else if (height1 == 6){
					dpt_max = -1500;
					pc_Dmax = 1.50;
					
				}else if (height1 == 8){
					dpt_max = -2000;
					pc_Dmax = 2.00;
					
				}else if (height1 == 10){
					dpt_max = -2500;
					pc_Dmax = 2.50;
					
				}
				PC_decrement(x,y);
			
				DPT_increment(x,y);
				
				
				}, time * 1000);
				
				setTimeout(function() {
				case5();}, time * 2000);
			}
			
			function case5(){
				ht_in = - 50;
				y1 = y1 - 50 ;
				tank_fill(x, y);
				dpt_max = 0;
				pc_Dmax = 0;
				setTimeout(function() {
				DPT_increment(x,y);
				PC_decrement(x,y);
				}, time * 1000);
				
				setTimeout(function() { 
					
					sv_V6.attr('fill','green')
				reset = 1; 
				}, time * 2000);
				
				setTimeout(function() { 
					 var htm = '<div class="row"  text-align: center;>'
					 +'<div class="col-sm-4" >'
					  +'</div>'
					  +'<div class="col-sm-6" >'
      				 +'<label class="labelstyle" style = "center" > Process Complete </label>'   
      				 +'</div>'
      				 +'</div>'
      				 +'<div class="row"  text-align: center;>'
      				 +'<div class="col-sm-12" >'
      				 +'<label class="labelstyle" style = "center" >Write the observations and various events occured during the operation of the plant in your note-book. </label>'   
      				 +'</div>'
      				 +'</div>'
					 +'<img src="images/control.png" class="img-fluid" >'
						$("#canvas-div").html(htm);
						
					$("#result").prop('hidden',false);	
				node1=  paper.text(x +200 , y -40, 'Second reading observation complted. click on Result ').attr({ 'font-size': 25 ,'fill':'#d42a3e'});
//				var switch_button = paper.image("images/control.png", (x + 100), (y + 100), 200, 200);
				node1.animate({x:x+230,y: 10 , 'font-size': 30}, 1000, 'bounce')
				
				},time*2100);
				
				
				
			}
		});
		
		
		
		
		
		var ydec = 0
		var dpt_Dmax = 0;
		sv_V3.click(function(event){
			if(flag1 == 1){
				ydec = 197;
				ht_dec = 50;
				pt_Dmax = 3;
				if (height1 == 4){
					dpt_Dmax = -1000;	
				}else if (height1 == 6){
					dpt_Dmax = -1500;
				 	
				}else if (height1 == 8){
					dpt_Dmax = -2000;
				}else if (height1 == 10){
					dpt_Dmax = -2500;
				}
				
				
				sv_V3.attr('fill','green');
				sv_V4.attr('fill','green');
				sv_V5.attr('fill','green');
				sv_V6.attr('fill','green');
				
				tank_empty(x, y);
//				DPT_decrement(x,y);
				setTimeout(function(){DPT_decrement(x,y); },time*1000);
//				setTimeout(function() {PT_decrement(x,y); }, time * 900);
				setTimeout(function() {
				sv_V6.attr('fill','red');
				flag1 = 2; 
				}, time * 1000);
				setTimeout(function() {case2(); }, time * 2001);
				setTimeout(function() {limit (x,y); }, time * 1000);
			}
			else{
				alert("Tank is empty, click on V1 to fill the tank");
			}
			
			
			function case2(){
				ydec = 197+ht_dec;
				ht_dec = 50;
				pt_Dmax = 2;
				if (height1 == 4){
					dpt_Dmax = -2000;
					pc_max = 2;	
				}else if (height1 == 6){
					dpt_Dmax = -3000;
					pc_max = 3;
				 	
				}else if (height1 == 8){
					dpt_Dmax = -4000;
					pc_max = 4;
				}else if (height1 == 10){
					dpt_Dmax = -5000;
					pc_max = 5;
				}
				
			
				sv_V4.attr('fill','green');
				sv_V5.attr('fill','green');
				sv_V2.attr('fill','green');
				tank_empty(x, y);
//				DPT_decrement(x,y);
				setTimeout(function(){DPT_decrement(x,y); },time*1000);
//				 setTimeout(function() {PT_decrement(x,y); }, time * 900);
				 setTimeout(function() {
					 
					 PC_increment(x,y); 
					 }
				 , time * 1000);
				setTimeout(function() {
				sv_V5.attr('fill','red'); 
				case3();
				 }, time * 2000);
				 
				  setTimeout(function() {
				sv_V2.attr('fill','red'); 
				 }, time * 2000);
				  setTimeout(function() {
				sv_V2.attr('fill','green'); 
				 }, time * 1000)
				
			}
			
			function case3(){
				ydec = 197+100;
				ht_dec = 70;
				pt_Dmax = 1;
				if (height1 == 4){
					pc_max = 3.5;
				dpt_Dmax = -3500;
				}else if (height1 == 6){
					dpt_Dmax = -5500;
					pc_max = 5.5;
				 	
				}else if (height1 == 8){
					dpt_Dmax = -7500;
					pc_max = 7.5;
				}else if (height1 == 10){
					dpt_Dmax = -9500;
					pc_max = 9.5;
				}
				
				sv_V4.attr('fill','green');
				
				tank_empty(x, y);
				setTimeout(function(){DPT_decrement(x,y); },time*1000);
//				 setTimeout(function() {PT_decrement(x,y); }, time * 900);
				 setTimeout(function() {
					 
					 PC_increment(x,y);}, time * 1000);
				setTimeout(function() {
				sv_V4.attr('fill','red'); 
				 }, time * 2000);
				 setTimeout(function() {
				sv_V2.attr('fill','red'); 
				 }, time * 2000);
				  setTimeout(function() {
				sv_V2.attr('fill','green'); 
				 }, time * 1000);
				 setTimeout(function() {
				LSL_circle.attr('fill','red'); 
				sv_V3.attr('fill','red');
				sv_V2.attr('fill','red');
				 }, time * 2000);
				 
				flag1 = 4;
			}
			
		});
		function limit (x,y)
		{
//			alert("Pressure is low. to maintain the pressure click on V2 and V1 to start the water supply");
			flag1 = 1;
			sv_V2.attr('fill','green');
			
			pc = 0;
			if (height1 == 4){
				pc_max = 1;	
			}else if (height1 == 6){
				pc_max = 1.5;
			}else if (height1 == 8){
				pc_max = 2;
				
			}else if (height1 == 10){
				pc_max = 2.5;
			}
			
			PC_increment(x,y);
//			PT_increment(x,y);
		}
		

	
		
		function tank_fill(x, y)
		 {
		var b = paper.path('M' + (x + 350) + ' ' + (y + y1) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '293.5' });
		level = b.animate({path: "M" + (x + 350) + " " + (y + y1) + "  l 0  " + (ht_in) + "", 'stroke-width': '293.5', 'stroke': '#85d3ed',
		opacity: 1}, time * 2000)
	};
	
	function tank_empty(x, y)
		 {
		var b = paper.path('M' + (x + 350) + ' ' + (y + ydec) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '293.5' });
		level = b.animate({
			path: "M" + (x + 350) + " " + (y + ydec) + "  l 0  " + (ht_dec) + "", 'stroke-width': '293.5', 'stroke': 'white',
			opacity: 1
		}, time * 2000)
	};
	

	
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
		}, 2000);		
}

	function PC_increment(x,y){
		intPc = 0.5;
	pc_interval1 = setInterval(function() {

			if (pc < pc_max) {

				pc = pc + intPc;

				pc_txt1.attr('text', pc);
			}else
			   {
				pc_txt1.attr('text', pc_max);   
				clearInterval(pc_interval1);
				
			}
		}, 1000);		
}
	
	function DPT_increment(x,y){
		intdpt = 250;
	dpt_interval1 = setInterval(function() {

			if (dpt < dpt_max) {

				dpt = dpt + intdpt;

				dpt_txt1.attr('text',Math.round(dpt));
			}else
			   {
				 dpt_txt1.attr('text', dpt_max);
				clearInterval(dpt_interval1);
			}
		}, dpttime);		
}


function DPT_decrement(x,y){
		dptDec = 250;
	ptd_interval1 = setInterval(function() {

			if ( dpt > dpt_Dmax) {

				dpt = dpt - dptDec;

				dpt_txt1.attr('text',Math.round(dpt));
			}else
			   {
				clearInterval(ptd_interval1);
			}
		}, dpttime);		
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

function PC_decrement(x,y){
		pcDec = 0.5;
	pcd_interval1 = setInterval(function() {

			if ( pc_max > pc_Dmax) {

				pc_max = pc_max - pcDec;

				pc_txt1.attr('text', pc_max );
			}else
			   {
				
				clearInterval(pcd_interval1);
//				pc_txt.attr('text',Math.round(pc_Dmax))
			}
		}, 1000);		
}


}


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
		x = 10;
		y = 10;
		
//		meter(x,y)
function meter(x,y){
//	paper.rect(x , y+10, 100, 50).attr({ 'stroke-width': '5', 'fill': '#bdf582' }).toFront();
	
	var l = paper.path("M "+(x+200)+" "+(y+150)+" l 0 100 l").attr({ 'stroke': '#000', 'stroke-width': 4});
	var l1 = paper.path("M "+(x+800)+" "+(y+150)+" l 0 100").attr({ 'stroke': '#000', 'stroke-width': 4});
		diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 600 0").attr({ 'stroke': '#000', 'stroke-width': 10});
}

//filter(x,y);
function filter(x,y){
	r = [];
		  r[0] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[0].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 '}, (500),function(){
		 r[1] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		  r[1].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 50 0 l 0 260 l -300 0'}, (500),function(){
		r[2] = paper.path('M' +(x+300)+ ' ' +(y+90)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[2].animate({path : 'M' +(x+300)+ ' ' +(y+90)+ 'l 0 80 l 30 0 l 0 -30 l 40 30 l -40 30 l 0 -30 '}, (500) ,function(){
		r[3] = paper.path('M' +(x+370)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[3].animate({path : 'M' +(x+370)+ ' ' +(y+170)+ 'l 80 0 '}, (500) ,function(){
		r[4] = paper.path('M' +(x+150)+ ' ' +(y+100)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[4].animate({path : 'M' +(x+150)+ ' ' +(y+100)+ 'l 0 50 '}, (500),function(){
		r[5] = paper.path('M' +(x+140)+ ' ' +(y+150)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[5].animate({path : 'M' +(x+140)+ ' ' +(y+150)+ 'l 20 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+142)+ ' ' +(y+160)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+142)+ ' ' +(y+160)+ 'l 15 0 '}, (50),function(){
		r[6] = paper.path('M' +(x+145)+ ' ' +(y+170)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		 r[6].animate({path : 'M' +(x+145)+ ' ' +(y+170)+ 'l 8 0 '}, (50),function(){
	    r[7] = paper.path('M' +(x+100)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+100)+ ' ' +(y+200)+ 'l 50 0 l 10 -20 l 10 30 l 10 -30 l 10 30 l 10 -20 l 130 0 '}, (500),function(){
		r[8]= paper.circle((x+250), (y+ 190), 2).attr({'stroke':'black','stroke-width':'5','fill':'black'})
		 r[8].animate({ 'cx': x+250, 'cy': y+ 190, }, 1, "bounce",function(){
		 r[7] = paper.path('M' +(x+250)+ ' ' +(y+190)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[7].animate({path : 'M' +(x+250)+ ' ' +(y+190)+ 'l 0 50 '}, (10),function(){
		 r[8] = paper.path('M' +(x+240)+ ' ' +(y+240)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[8].animate({path : 'M' +(x+240)+ ' ' +(y+240)+ 'l 20 0 '}, (10),function(){
		 r[9] = paper.path('M' +(x+240)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[9].animate({path : 'M' +(x+240)+ ' ' +(y+250)+ 'l 20 0 '}, (10),function(){
		 r[10] = paper.path('M' +(x+250)+ ' ' +(y+250)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[10].animate({path : 'M' +(x+250)+ ' ' +(y+250)+ 'l 0 50 '}, (10),function(){
		 r[11] = paper.path('M' +(x+240)+ ' ' +(y+300)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[11].animate({path : 'M' +(x+240)+ ' ' +(y+300)+ 'l 20 0 '}, (10),function(){
		 r[12] = paper.path('M' +(x+243)+ ' ' +(y+310)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[12].animate({path : 'M' +(x+243)+ ' ' +(y+310)+ 'l 15 0 '}, (10),function(){
		r[13] = paper.path('M' +(x+245)+ ' ' +(y+320)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[13].animate({path : 'M' +(x+245)+ ' ' +(y+320)+ 'l 8 0 '}, (10),function(){
		r[14] = paper.path('M' +(x+350)+ ' ' +(y+185)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[14].animate({path : 'M' +(x+350)+ ' ' +(y+185)+ 'l 0 50 '}, (10),function(){
		r[15] = paper.path('M' +(x+340)+ ' ' +(y+235)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[15].animate({path : 'M' +(x+340)+ ' ' +(y+235)+ 'l 20 0 '}, (10),function(){
	    r[16] = paper.path('M' +(x+343)+ ' ' +(y+245)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[16].animate({path : 'M' +(x+343)+ ' ' +(y+245)+ 'l 15 0 '}, (10),function(){ 
		r[17] = paper.path('M' +(x+345)+ ' ' +(y+255)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[17].animate({path : 'M' +(x+345)+ ' ' +(y+255)+ 'l 8 0 '}, (10),function(){
		r[18] = paper.path('M' +(x+350)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'5'})
		r[18].animate({path : 'M' +(x+350)+ ' ' +(y+155)+ 'l  0 -30 l -5 0 l 8 -5 l 8 5 l -8 0 '}, (10),function(){
		r[19] = paper.path('M' +(x+310)+ ' ' +(y+155)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[19].animate({path : 'M' +(x+310)+ ' ' +(y+155)+ 'l  10 0 '}, (10)	,function(){
		r[20] = paper.path('M' +(x+310)+ ' ' +(y+210)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[20].animate({path : 'M' +(x+310)+ ' ' +(y+210)+ 'l  10 0 '}, (10),function(){
		r[21] = paper.path('M' +(x+315)+ ' ' +(y+200)+ 'l 0 0').attr({'stroke':'black','stroke-width':'3'})
		r[21].animate({path : 'M' +(x+315)+ ' ' +(y+200)+ 'l  0 20 '}, (10))	
		})	
		})
		})	
		})	
		})	
		})	
		})
			
		})
		})
			
		})	
		})
			
		})
		})	
			
		})	 
			 
		 })	
		})	 
		 })	 
			 
		 })	 
			 
			 
		 })	 
			 
		 })	 
		 })
		 });		  
			  
		  }); 	  
		  });

}

var diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 0 0").attr({ 'stroke': '#000', 'stroke-width': 10});
 
  var lenx = 400;

  var thik = 2;
 diaphramStd(x,y);
	function diaphramStd(x,y){
		var l = paper.path("M "+(x+200)+" "+(y+150)+" l 0 100 l").attr({ 'stroke': '#000', 'stroke-width': 4});
		
		var s = paper.path("M "+(x+200)+" "+(y+150)+" l -20 20 M"+(x+200)+" "+(y+170)+"l -20 20 M "+(x+200)+" "+(y+190)+"l -20 20 M "+(x+200)+" "+(y+210)+"l -20 20 M"
		+""+(x+200)+" "+(y+230)+"l -20 20 ").attr({ 'stroke': '#000', 'stroke-width': 1});
		 diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l "+lenx+" 0").attr({ 'stroke': '#000', 'stroke-width': thik});

//		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 35 12 1 0 0 "+(x+800)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': 4});
	}
	std2(x-100,y);
	var x1=10;
	var y1=200;
	function std2(x,y){
		var l1 = paper.path("M "+(x+800)+" "+(y+150)+" l 0 100").attr({ 'stroke': '#000', 'stroke-width': 4});
		var s1 = paper.path("M "+(x+800)+" "+(y+150)+" l 20 20 M"+(x+800)+" "+(y+170)+"l 20 20 M "+(x+800)+" "+(y+190)+"l 20 20 M "+(x+800)+" "+(y+210)+"l 20 20 M"+(x+800)+" "+(y+230)+"l 20 20").attr({ 'stroke': '#000', 'stroke-width': 1});
//		diaLine = paper.path("M "+(x+200)+" "+(y+200)+" l 400 0").attr({ 'stroke': '#000', 'stroke-width': 10});
	}
	diaphramCurve(x,y);
	function diaphramCurve(x,y){
//		var x= x1+244;
//			var y=y1+115;
		  diaLine.hide();
//		var l = paper.path("M "+(x+200)+" "+(y+150)+" l 0 100 l").attr({ 'stroke': '#000', 'stroke-width': 4});
//		var l1 = paper.path("M "+(x+800)+" "+(y+150)+" l 0 100").attr({ 'stroke': '#000', 'stroke-width': 4});
//		var l1 = paper.path("M "+(x+200)+" "+(y+200)+" l 600 0").attr({ 'stroke': '#000', 'stroke-width': 10});

		var arc = paper.path("M "+(x+200)+" "+(y+200)+" A 80 9 0 0 0 "+(x+700)+" "+(y+200)).attr({ 'stroke': '#000', 'stroke-width': 4});
//		var arc = paper.path("M "+(x+200)+" "+(y+250)+" A 300 60 0 0 0 "+(x+400)+" "+(y+250)).attr({ 'stroke': '#000', 'stroke-width': thik});
		var arc = paper.path("M "+(x+200)+" "+(y+350)+" A 200 50 0 0 0 "+(x+500)+" "+(y+350)).attr({ 'stroke': '#000', 'stroke-width': thik});		
		var arc = paper.path("M "+(x+200)+" "+(y+400)+" A 300 60 0 0 0 "+(x+600)+" "+(y+400)).attr({ 'stroke': '#000', 'stroke-width': thik});

		var arc = paper.path("M "+(x+200)+" "+(y+300)+" A 300 150 0 0 0 "+(x+700)+" "+(y+300)).attr({ 'stroke': '#000', 'stroke-width': 4});
	}	
	
	
	
});

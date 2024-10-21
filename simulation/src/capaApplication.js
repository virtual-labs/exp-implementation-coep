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
	
	x = 10 ;
	y = 10;
	var reactfixl2;
	var reactfix13;
	var  line;
	
//		paper.path('M' + (x + 100 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 198 ) + ' ' + (y + 100 ) + 'l 100 0 l 0 50 l 10 -10 l -10 10 l -10 -10')
//			.attr({ 'stroke': 'black', 'stroke-width': '3' });
		fixStand(x,y+150);	
		function fixStand(x,y){	
		reactfix = 	paper.path('M' + (x + 100 ) + ' ' + (y + 200 ) + 'l 200 0 l 0 30 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#5ab4db-#25404d'});
		reactfixl = 	paper.path('M' + (x + 200 ) + ' ' + (y + 230 ) + 'l 0 50 ').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'30-#c4bebe-#141414'});	
		}
		movStand(x,y);
		function movStand(x,y){
//		reactfixl2 = paper.path('M' + (x + 200 ) + ' ' + (y + 30 ) + 'l 0 50 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30  ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		reactfixl2 = paper.path('M' + (x + 200 ) + ' ' + (y + 30 ) + 'l 0 50 l 30 20 l -40 20 l 40 20 l -40 20 l 20 20 l 0 30 ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		reactfix13 = 	paper.path('M' + (x + 100 ) + ' ' + (y + 210 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#5ab4db-#25404d'});	
		line = paper.path('M' + (x + 170 ) + ' ' + (y + 30 ) + 'l 60 0   ').attr({ 'stroke': 'black', 'stroke-width': '3' });
	}
					
					
			btn =  '<div class="col-sm-2">'
		
				       +'<button type="button"  "  class="btn btn-danger btnStyle" id="movebtn" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
				       +'</div>'
				       
		$("#div123").append(btn);
		
		 var img = paper.image('images/spring1.png', 500, 100, 70, 120);
		 upperline = 	paper.path('M' + (x + 530 ) + ' ' + (y + 55 ) + 'l 0 40 l 10 0').attr({ 'stroke': 'black', 'stroke-width': '2' });
		 downline = 	paper.path('M' + (x + 510 ) + ' ' + (y + 205 ) + 'l 20 0l 0 40 ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		 	
		
		 $("#movebtn").click(function() {	       
				reactfixl2.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+30)+"  l 0 60 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30 ", 'T 0 '+(100))}, 1000);			       
				reactfix13.animate({path: Raphael.transformPath("M"+(x+100)+" "+(y+210)+"  l 200 0 l 0 20 l -200 0 z ", 'T 0 '+(100))}, 1000);
				line.animate({path: Raphael.transformPath("M"+(x+170)+" "+(y+30)+"  l 60 0  ", 'T 0 '+(100))}, 1000);
//				img.transform('s1,' + 1.2);
//				animateHeightScale1();
//				upperline = 	paper.path('M' + (x + 530 ) + ' ' + (y + 45 ) + 'l 0 40 l 10 0').attr({ 'stroke': 'black', 'stroke-width': '2' });
				downline.animate({path: Raphael.transformPath("M"+(x+510)+" "+(y+205)+"  l 20 0  l 0 40", 'T 0 '+(10))}, 1000);
				upperline.animate({path: Raphael.transformPath("M"+(x+530)+" "+(y+55)+"  l 0 40  l 10 0", 'T 0 '+(-10))}, 1000);
				
				animateHeightScale();
				       
		});	
		
		material = 3;
		if(material == 1){
			wood = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#c3944d-#b25e3a', 'stroke-width': '3' , 'fill':'30-#c3944d-#b25e3a'});	
		wood.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if (material == 2){
			steel = paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#a8b0b2-#99a3a3', 'stroke-width': '3' , 'fill':'30-#a8b0b2-#99a3a3'});	
		steel.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if (material == 3){
			glass = paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#d8e4e9-#a7c7cb', 'stroke-width': '3' , 'fill':'30-#d8e4e9-#a7c7cb'});	
		glass.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if (material == 4){
			paper = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#f8f8ba-#f8f87c', 'stroke-width': '3' , 'fill':'30-#f8f8ba-#f8f87c'});	
		paper.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if (material == 5){
			aluminium = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#636566-#323435', 'stroke-width': '3' , 'fill':'30-#636566-#323435'});	
		aluminium.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if(material == 6){
			
			titanium = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#ea80fc-#6a1b9a', 'stroke-width': '3' , 'fill':'30-#ea80fc-#6a1b9a'});	
		titanium.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
		
			
		}
		
		
  // Create a Raphael paper
//  var paper = Raphael('canvas', 500, 500);

  // Add an image to the canvas
 

  // Apply transformations
//  img.transform('t100,50r45s1.5');

var heightScaleStart = 1; // Initial scale factor for height
  var heightScaleEnd = 1.2;   // Final scale factor for height
  var duration = 5000;      // Duration of the animation in milliseconds (5 seconds)
  var interval = 50;
  
    var startTime = new Date().getTime();

  // Function to animate the height scaling
  function animateHeightScale() {
    var intervalId = setInterval(function() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
      var progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1

      var currentScale = heightScaleStart + (heightScaleEnd - heightScaleStart) * progress;

      // Apply transformation
      img.transform('s1,' + currentScale);

      if (progress >= 1) {
        clearInterval(intervalId); // Stop the interval when animation is complete
      }
    }, interval);
  }
  
//   animateHeightScale();
   
   
    function animateHeightScale1() {
		
		 var duration = 1000;      // Duration of the animation in milliseconds (5 seconds)
 		 var interval = 50;
    var intervalId = setInterval(function() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
      var progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1

      var currentScale = 2 + (1 - 2) * progress;

      // Apply transformation
      img.transform('s1,' + currentScale);

      if (progress >= 1) {
        clearInterval(intervalId); // Stop the interval when animation is complete
      }
    }, interval);
  }
  


		
		
		

			

		

		
		
	
		
		
		
//		reactfixl2.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+30)+"  l 0 60 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30 ", 'T 0 '+(70))}, 1000);			       
//		reactfix13.animate({path: Raphael.transformPath("M"+(x+100)+" "+(y+210)+"  l 200 0 l 0 20 l -200 0 z ", 'T 0 '+(70))}, 1000);
//		line.animate({path: Raphael.transformPath("M"+(x+170)+" "+(y+30)+"  l 60 0  ", 'T 0 '+(70))}, 1000);
				       
	
	
	
	
	});
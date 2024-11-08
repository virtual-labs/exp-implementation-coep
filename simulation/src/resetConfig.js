tableReading=0;
var lengthmax = 0;
var buttonflg = 0;
var reset = 0;
$("#refer").prop('hidden',false);
function configReset(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
     $("#centerText").html('Configuration');
      $("#centerText1").html('Control Application');
      
      var htm = '<img src="images/control.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select height of the tank (m): </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="height"  style="height:auto;">'
	   +'<option value="0">--- Select Height --- </option>'
	   +'<option value="4">4</option>'
	   +'<option value="6">6</option>'
	   +'<option value="8">8</option>'
	   +'<option value="10">10</option>'
//	   +'<option value="5">Copper</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       
        +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Setpoint  : </label>'
	   +'<label class="labelstyle"> (To maintain constant flow at the output, </label>'
	   +'<label class="labelstyle">  head should remain constant) </label>'
	   +'</div>'
	  +'<div class="col-sm-3">'
	+'<input type="text" id="setpont" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
		+'<button type="button"  "  class="btn btn-danger btnStyle" id="setsubmit" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Span of DPT (mmWC) : </label>'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf" id="dpt" " style="height:auto;">'
	    +'<option value="0">--- Select length --- </option>'
	  	+'<option value="4"> - 4000</option>'
	   +'<option value="6">- 6000</option>'
	   +'<option value="8">- 8000</option>'
	   +'<option value="10">- 10000</option>'
	   +'<option value="-4">4000</option>'
	   +'<option value="-6">6000</option>'
	   +'<option value="-8">8000</option>'
	   +'<option value="-10">1000</option>'   
	   +'</select>'
	   +'</div>'
	     +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf" id="dpt" " style="height:auto;">'
	    +'<option value="0" selected > - O  </option>'
	    +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Span of Pressure Transmitter (PT) : </label>'
	   +'<label class="labelstyle"> (The span of pressure trasmitter is equal to the maximum head you need to measure) </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="pt" " style="height:auto;">'
	   +'<option value="0">--- Select PT --- </option>'
	   +'<option value="4" >4</option>'
	   +'<option value="6">6</option>'
	   +'<option value="8">8</option>'
	  +'<option value="10">10 </option>'
	

	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
	   
   		+'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

      +'<br>' 
      +'<br>'
       +'<div class="row" id="labels" >'
	   +'<div class="col-sm-8">'
	   +'<label class="labelstyle"> Switch on water inlet valve (V1) and Outlet valve (V3) and  </label>'
	   +'</div>'
	   +'<div class="col-sm-2">'
	    +'</div>'
	    +'<div class="col-sm-8">'
	    +'<label class="labelstyle"> observe: Pressure reading(Pc)  </label>'
	     +'</div>'
	     +'<div class="col-sm-8">'
	    +'<label class="labelstyle"> observe : V4,V5 and V6 Valves   </label>'
	    +'</div>'
	     +'<div class="col-sm-8">'
	  	+'<label class="labelstyle"> observe : DPT reading  </label>'
	  	+'</div>'
	  	 +'<div class="col-sm-8">'
	  	+'<label class="labelstyle"> observe : PT reading  </label>'
	   +'</div>'
	   
	   +'</div>' 
	   
	   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="result" data-toggle="modal" data-target="#selectCheck" hidden ><b> RESULT </b></button>' 
	    +'</div>'
     
+'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Capacitance (pf): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnTime" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	     +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 8px; "  class="btn btn-danger btnStyle" id="next" data-toggle="modal" data-target="#selectCheck" hidden ><b>  NEXT PAGE </b></button>' 
	    +'</div>'

      +'<br>'
	    
	        
      
	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg123">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
		id = 1;
     $("#checkAsnTime").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns==""){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == calculateTime) {
//							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b> ");
							$("#timeAnswer").prop('hidden',true);
							$("#selectCheck").prop('hidden',false);
							$("#distance").prop('disabled',false);
							id = 1;
							
							addToMasterJSON();
//							mainPage2();
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : Capacitance  = " + unescape('%u2208') + " X Area / Distance</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
//							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
//							$("#timeAnswer").prop('hidden',false);
							$("#selectCheck").prop('hidden',false);
							$("#distance").prop('disabled',false);
							
							addToMasterJSON();
//							mainPage2();
							$("#CalTime").val('');
							id = 1;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
			id1 = 0;	
		 $("#setsubmit").click(function() {  
			 height1  = $("#height").val(); 
			setpoint1  = $("#setpont").val();
			if (height1 == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select height of tank </b>");
		} else{
			id1++;
			if(id1 <= 2){
			if(setpoint1 == height1){
				$("#height").prop('disabled',true);
				$("#setpoint").prop('disabled',true);
				$("#setsubmit").prop('disabled',true);
			}else{
				$("#errorPanel").prop("hidden",false);
				$("#modelMsg123").html("<b class='boldTextRed'>Setpoint is "+height+" </b>");
			}
			
			}else{
				document.getElementById('setpont').value=height1; 
				$("#height").prop('disabled',true);
				$("#setpoint").prop('disabled',true);
				$("#setsubmit").prop('disabled',true);
				
			}
		}
			 
			 
		 });		


    
     $("#submitconfig").click(function() {
		 dpt1 = $("#dpt").val();
		  pt1 = $("#pt").val();
		 
		   
		   if(dpt1 != height1){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Valid DPT Span </b>");
	}else if(pt1  != height1){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Valid DPT Span </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#dpt").prop('disabled',true);
		$("#pt").prop('disabled',true);
		$("#submitconfig").prop('disabled',true);
	
	}
		 $("#canvas-div").html("");  
		
			resetMimic();

	
	});
	
	 $("#result").click(function() {

		result();
	});
	

	             
}	








/* 6-9-2013 to-do

	build two functions:
	makeLens()
		- builds out the div structure
	and updateLens()
		- adjusts the css for the div structure

	figure out default numbers for ranges - plug those in	


*/



$(document).ready(function(){

var offset_left = $(".main_bg").offset().left;
var offset_top = $(".main_bg").offset().top;

var image_height = $(".main_bg").height();
var image_width = $(".main_bg").width();

//
// learn more about bind. 

var _basePower = 800;

var _segments = 30;
var _parent = 200;
var _power = 35;
var _spread = 3;
var _roundness = 50;


function buildLens(){
	for (var i = 0; i < _segments; i++) {
		myLens += "<div data-increment'"+i+"' class='refract _"+i+"'></div>";
	}
	return myLens;
}

function updateLens() {
	$(".refract").each(function(){
			var i = $(this).attr("data-increment");
			//console.log("yo yo yo "+i);
			var _diameter = _parent-(i*_spread);
			var offset = (i*_spread)/2;
			var lensPower = _basePower + (_power*i);
			$(this).css({"left":offset+"px",
				"top":offset+"px",
				"width":_diameter+"px",
				"height":_diameter+"px",
				"backgroundSize":lensPower+"px"
			 })
	});
}

function makeLens() {

	var myLens = "";
	for (var i = 0; i < _segments; i++) {
		var _diameter = _parent-(i*_spread);
		var offset = (i*_spread)/2;
		var lensPower = _basePower + (_power*i);
		//console.log(" i:"+i+"| offset:"+offset+"| power:"+lensPower);
	   	myLens += "<div data-increment='"+i+"' class='refract _"+i+"' style='left:"+offset+"px;top:"+offset+"px;width:"+_diameter+"px;height:"+_diameter+"px;background-size:"+lensPower+"px;'></div>";
	}

	return myLens;
}

function makeItRound() {
	$('.lens, .refract').css({"border-radius":_roundness+"%"});
}




$('.refract_wrap').html(makeLens());





$('#lens_diameter').on("change", function(){

	_parent = $('#lens_diameter').val();
	$('#lens').css({"height":_parent+"px","width":_parent+"px"});
	//$('.refract_wrap').html(makeLens());
	updateLens();
	$('.readout-lens-diameter').html(_parent);

	makeItRound();

});

$('#lens_power').on("change", function(){

	_power = $('#lens_power').val();
	//$('.refract_wrap').html(makeLens());
	updateLens();
	$('.readout-lens-power').html(_power);
	//makeItRound();

});

$('#lens_segments').on("change", function(){

	_segments = $('#lens_segments').val();
	$('.refract_wrap').html(makeLens());
	$('.readout-lens-segments').html(_segments);
	makeItRound();

});

$('#lens_spacing').on("change", function(){

	_spread = $('#lens_spacing').val();
	//$('.refract_wrap').html(makeLens());
		updateLens();
	$('.readout-lens-spacing').html(_spread);
		makeItRound();

});


$('#lens_roundness').on("change", function(){

	_roundness = $('#lens_roundness').val();
		makeItRound();
	$('.readout-lens-roundness').html(_roundness);

});





$(".main_bg").hover(function(){

	var my_offset = _parent/2;

		$(".main_bg").on( "mousemove", function( event ) {

  //$( "#lens" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

		  var top_pos = (event.pageY - offset_top)-my_offset;
		  var left_pos = (event.pageX - offset_left)-my_offset;

	 // console.log("top pos"+offset_top);


	//how do I calculate the exact percentage it should move?
	//gather up all the dimensions
	//how do I get rid of the magic numbers?
	//what does actual lens refraction look like?

	 var top_percent = ((top_pos+my_offset)/image_height)*100;
	  var left_percent = ((left_pos+my_offset)/image_width)*100;

	  $("#lens").css({"top":top_pos+"px","left":left_pos+"px","background-position":left_percent+"% "+top_percent+"%"});
	  $(".refract").css({"background-position":left_percent+"% "+top_percent+"%"});

	});



}, function(event){

	$(".main_bg").unbind('mousemove');


})



/*
$(".main_bg").on( "mousemove", function( event ) {

  //$( "#lens" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

  var top_pos = (event.pageY - offset_top)-100;
  var left_pos = (event.pageX - offset_left)-100;

 // console.log("top pos"+offset_top);


//how do I calculate the exact percentage it should move?
//gather up all the dimensions
//how do I get rid of the magic numbers?
//what does actual lens refraction look like?

 var top_percent = ((top_pos+100)/image_height)*100;
  var left_percent = ((left_pos+100)/image_width)*100;

  $("#lens").css({"top":top_pos+"px","left":left_pos+"px","background-position":left_percent+"% "+top_percent+"%"});
  $(".refract").css({"background-position":left_percent+"% "+top_percent+"%"});

});
*/


});



/* 6-9-2013 to-do

	build two functions:
	makeLens()
		- builds out the div structure
	and updateLens()
		- adjusts the css for the div structure

	figure out default numbers for ranges - plug those in	


*/$(document).ready(function(){function l(){for(var e=0;e<s;e++)myLens+="<div data-increment'"+e+"' class='refract _"+e+"'></div>";return myLens}function c(){$(".refract").each(function(){var e=$(this).attr("data-increment"),t=o-e*a,n=e*a/2,r=i+u*e;$(this).css({left:n+"px",top:n+"px",width:t+"px",height:t+"px",backgroundSize:r+"px"})})}function h(){var e="";for(var t=0;t<s;t++){var n=o-t*a,r=t*a/2,f=i+u*t;e+="<div data-increment='"+t+"' class='refract _"+t+"' style='left:"+r+"px;top:"+r+"px;width:"+n+"px;height:"+n+"px;background-size:"+f+"px;'></div>"}return e}function p(){$(".lens, .refract").css({"border-radius":f+"%"})}var e=$(".main_bg").offset().left,t=$(".main_bg").offset().top,n=$(".main_bg").height(),r=$(".main_bg").width(),i=800,s=30,o=200,u=35,a=3,f=50;$(".refract_wrap").html(h());$("#lens_diameter").on("change",function(){o=$("#lens_diameter").val();$("#lens").css({height:o+"px",width:o+"px"});c();$(".readout-lens-diameter").html(o);p()});$("#lens_power").on("change",function(){u=$("#lens_power").val();c();$(".readout-lens-power").html(u)});$("#lens_segments").on("change",function(){s=$("#lens_segments").val();$(".refract_wrap").html(h());$(".readout-lens-segments").html(s);p()});$("#lens_spacing").on("change",function(){a=$("#lens_spacing").val();c();$(".readout-lens-spacing").html(a);p()});$("#lens_roundness").on("change",function(){f=$("#lens_roundness").val();p();$(".readout-lens-roundness").html(f)});$(".main_bg").hover(function(){var i=o/2;$(".main_bg").on("mousemove",function(s){var o=s.pageY-t-i,u=s.pageX-e-i,a=(o+i)/n*100,f=(u+i)/r*100;$("#lens").css({top:o+"px",left:u+"px","background-position":f+"% "+a+"%"});$(".refract").css({"background-position":f+"% "+a+"%"})})},function(e){$(".main_bg").unbind("mousemove")})});
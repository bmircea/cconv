$("#jumboMain").mouseenter(function(){
	console.log("in");
	$("#jumboMain").fadeOut(500, function(){
		var selected = parseInt($("#jumboMain").css("--order"));
		console.log(selected);
		$("#jumboMain").css("background-image", "url(imagini/"+selected+".jpg)");
		$("#jumboMain").fadeIn(500);
		selected += 1;
		if(selected > 3) selected = 1;
		$("#jumboMain").css("--order", selected);
	});
}).mouseleave(function(){
	console.log("out");
})





var flipped = false;

$(".btn-left").click(function(){
	console.log(flipped);
	if(flipped == true){

		 $(".content").fadeOut(300, function(){
		 	$("#contentB").addClass("d-none");
		 	$("#contentA").removeClass("d-none");
		 	$(".content").fadeIn(300);
		 	flipped = false;
		 });

		 	
	};
	console.log(flipped);
});

$(".btn-right").click(function(){
	console.log(flipped);
	if(flipped == false){
		 $(".content").fadeOut(300, function(){
		 	$("#contentA").addClass("d-none");
		 	$("#contentB").removeClass("d-none");
		 	$(".content").fadeIn(300);
		 	flipped = true;
		 });	
	};
	console.log(flipped);
});
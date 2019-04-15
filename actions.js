$(".fromJumbo").click(function(){
	$("#dropdownMenuButtonFromJumbo").text($(this).text());
})

$(".toJumbo").click(function(){
	$("#dropdownMenuButtonToJumbo").text($(this).text());
})
$(".fromMain").click(function(){
	$("#dropdownMenuButtonFromMain").text($(this).text());
})

$(".toMain").click(function(){
	$("#dropdownMenuButtonToMain").text($(this).text());
})



$("#switchJumbo").click(function(){
	var aux = $("#dropdownMenuButtonFromJumbo").text();
	$("#dropdownMenuButtonFromJumbo").text($("#dropdownMenuButtonToJumbo").text());
	$("#dropdownMenuButtonToJumbo").text(aux);
});

$("#switchMain").click(function(){
	var aux = $("#dropdownMenuButtonFromMain").text();
	$("#dropdownMenuButtonFromMain").text($("#dropdownMenuButtonToMain").text());
	$("#dropdownMenuButtonToMain").text(aux);
});

var valori = {
	"EUR" : 4.74414,
	"USD" : 4.22290,
	"RON" : 1

};


$("#convMain").click(function(){
	var from = $("#dropdownMenuButtonFromMain").text();
	var to = $("#dropdownMenuButtonToMain").text();
	var val = $("#inputJos").val();
	var con = val*valori[from]/valori[to];
	var res = val.toString() + " " + from + " = " + con + " " + to;



	$("#rezultat-conversie").text(res);


});



$("#convJumbo").click(function(){
	$("#inputJos").val($("#inputSus").val());
	$("#rezultat-conversie").text($("#inputSus").val());
	$("#dropdownMenuButtonFromMain").text($("#dropdownMenuButtonFromJumbo").text());
	$("#dropdownMenuButtonToMain").text($("#dropdownMenuButtonToJumbo").text());
    $('html, body').animate({
        scrollTop: $("#inputJos").offset().top
    }, 2000);
});
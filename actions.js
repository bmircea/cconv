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
	"GBP" : 5.51103,
	"INR" : 0.0605903,
	"JPY" : 0.0376016,
	"NOK" : 0.495697,
	"CNY" : 0.627444,
	"SEK" : 0.454109,
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
	$("#dropdownMenuButtonFromMain").text($("#dropdownMenuButtonFromJumbo").text());
	$("#dropdownMenuButtonToMain").text($("#dropdownMenuButtonToJumbo").text());
    
    var from = $("#dropdownMenuButtonFromMain").text();
	var to = $("#dropdownMenuButtonToMain").text();
	var val = $("#inputJos").val();
	var con = val*valori[from]/valori[to];
	var res = val.toString() + " " + from + " = " + con + " " + to;
    $("#rezultat-conversie").text(res);

    $('html, body').animate({
        scrollTop: $("#inputJos").offset().top
    }, 2000);
});
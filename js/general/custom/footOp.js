$(document).ready(function() {
	var optionNum = $("#datatimeNum");

	$(".glyphicon-minus-sign").on("click tap", function() {
		var num = parseInt(optionNum.text());
		num--;
		if (num < 1) {
			num = 12;
		}
		optionNum.text(num);
	});

	$(".glyphicon-plus-sign").on("click tap", function() {
		var num = parseInt(optionNum.text());
		num++;
		if (num > 12) {
			num = 1;
		}
		optionNum.text(num);
	});

	$(".glyphicon-search").on("click tap", function() {
		$("html, body").animate({scrollTop: $("#month" + optionNum.text()).offset().top}, 2000);
	});
});
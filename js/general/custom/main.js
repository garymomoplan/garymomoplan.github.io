$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var actionRLock = false;
	var footOpWidth = null;
	var offset = 10;
	var value = 0;
	var footOpToggle = false;

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
			}

			footOpWidth = $(".footer-option").css("width");
			if (footOpWidth != null && footOpWidth != "" && typeof footOpWidth != "undefined") {
				value = parseInt(footOpWidth.substring(0, footOpWidth.indexOf("px"))) - offset;

				if (footOpToggle) {
					$(".footer-option").css("right", value * (-1));
				}
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 12;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	var memberTL = new TimelineMax({ repeat: -1 });
	memberTL.from($(".items-member"), 0.5, { skewX:360, ease:Expo.easeIn }, "+=5");

	$(".tags-item").on("click tap", function() {
		if (actionRLock) {
			return;
		}
		actionRLock = true;
		$(".items:not(.it-momoclo-red,.it-momoclo-purple,.it-momoclo-pink,.it-momoclo-yellow,.it-momoclo-all)").hide();
		var target = $(this).attr("id").split("-")[1];
		if (target == "all") {
			$(".items:not(.item-disable)").css("opacity", "1").show();
			TweenLite.from($(".items:not(.item-disable)"), 1.5, { autoAlpha: 0.1, onComplete:finishActionR });
		} else {
			$("#collapseParent ." + target + ":not(.item-disable)").css("opacity", "1").show();
			TweenLite.from($("#collapseParent ." + target + ":not(.item-disable)"), 0.8, { rotation: 90, autoAlpha: 0.1, onComplete:finishActionR });
		}

		var shiftTop = $("#collapseParent ." + target + ":not(.item-disable):eq(0)");
		if (shiftTop != null && shiftTop != "" && typeof shiftTop != "undefined") {
			$("html, body").animate({scrollTop: shiftTop.offset().top}, 0);
		}
	});

	function finishActionR() {
		actionRLock = false;
	}

	$(".footer-option figure").on("click tap", function() {
		if (footOpToggle) {
			footOpToggle = false;
			videoGearTL = new TimelineMax();
			indexVideoTL = new TimelineMax();

			$(".footer-option figure img").attr("title", "收起");

			videoGearTL.to($(".footer-option figure img"), 1.5, {
				rotation : 0
			});

			indexVideoTL.to($(".footer-option"), 0.5, {
				right : 15,
				ease : Back.easeOut
			});
		} else {
			footOpToggle = true;
			videoGearTL = new TimelineMax();
			indexVideoTL2 = new TimelineMax();
			
			$(".footer-option figure img").attr("title", "彈出");

			videoGearTL.to($(".footer-option figure img"), 1.5, {
				rotation : 360
			});

			indexVideoTL2.to($(".footer-option"), 0.5, {
				right : (value * (-1) + 3),
				ease : Bounce.easeOut
			});
		}
	});
});

$(window).on("load", function() {
	$(".loader").hide();
	var setheight = "0";
	$(".mainContain").css("height","auto");
	if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
		setheight = $(window).height();
		$(".mainContain").css("height", setheight);
	}
});
var btn = $(".p1-btn");
var page = $(".page img");
var back = $("#back img");
var wifi = $("#p1-4");
var cd1 = $("#p1-5");
var cd2 = $("#p1-6");
wifi.delay(500).show(200);
cd1.delay(500).show(500);
cd2.delay(500).show(500);
btn.each(function (e) {
	$(this).click(function () {
		console.log(e);
		var _this = page.eq(e);
		_this.width(640).height(1136);
		_this.css({left:0,top:0});
		back.fadeIn(200);
	});
	back.click(function(){
		var _this = page.eq(e);
		_this.width(0).height(0);
		_this.css({left:320,top:500});
		back.fadeOut(200);
	});
});

$(function(){

        // //检测平台
        // var system = {
        //     win: false,
        //     mac: false,
        //     xll: false,
        //     ipad:false
        // };
        // var p = navigator.platform;
        // system.win = p.indexOf("Win") == 0;
        // system.mac = p.indexOf("Mac") == 0;
        // system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        // system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
        // if (system.win || system.mac || system.xll||system.ipad) {

        // } else {

        //     window.location.href = "m/index.html";
        // }

	// logo
	var logo=$("img#logo");
	var contact=$("ul.contact");
	logo.fadeToggle(2000);
	contact.fadeToggle(2000);
	setInterval("$('img#logo').fadeToggle(500).fadeToggle(500)",5000);

	// menu
	var menu=$("div.header");
	var icon=$("img.list-icon");
	var up=$("img.up");
	var nav=$("div.nav");
	var background=$("img.background");
	background.fadeIn(1000);
	up.mouseover(function(){
		up.toggleClass("hover");
	}).mouseout(function(){
		up.toggleClass("hover");
	});
	menu.click(function(){
		if(menu.attr("id")=="0"){
				open();
			}
			else{
				close();
			}
		$(document).click(function(){
			close();
		});
		event.stopPropagation();
	function open(){
		menu.attr("id","1");
		icon.css("right","200px").toggleClass("open");
		nav.css("width",200);
		background.css("left","-200px");
		// for (var i=0;i<4;i++) {
			$("div.nav div:gt(0)").css("display","none");
			$("div.nav div#nav0").delay(100).fadeIn(1000);
			$("div.nav div#nav1").delay(200).fadeIn(1000);
			$("div.nav div#nav2").delay(300).fadeIn(1000);
			$("div.nav div#nav3").delay(400).fadeIn(1000);
			$("div.nav div#nav4").delay(500).fadeIn(1000);

		// }
		}
	function close(){
		menu.attr("id","0");
		icon.css("right","100px").toggleClass("open");
		nav.css("width",0);
		background.css("left","0px");
		}
		});

	//contact
$("img.github").mouseover(function(){
	$("img.github").toggleClass("hover");
	if(! $("span.github").is(":animated")){
		$("span.github").fadeIn(200);
	}
	}).mouseout(function(){
		$("img.github").toggleClass("hover");
		$("span.github").fadeOut(200);
	});
$("img.weibo").mouseover(function(){
	$("img.weibo").toggleClass("hover");
	if(! $("span.weibo").is(":animated")){
		$("span.weibo").fadeIn(200);
	}
	}).mouseout(function(){
		$("img.weibo").toggleClass("hover");
		$("span.weibo").fadeOut(200);
	});
$("img.email").mouseover(function(){
	$("img.email").toggleClass("hover");
	if(! $("span.email").is(":animated")){
		$("span.email").fadeIn(200);
	}
	}).mouseout(function(){
	$("img.email").toggleClass("hover");
		$("span.email").fadeOut(200);
	}).click(function(){return false});
$("img.weixin").mouseover(function(){
	$("img.weixin").toggleClass("hover");
	if(! $("img.weixinQRCODE").is(":animated")){
		$("img.weixinQRCODE").fadeIn(200);
	}})
	.mouseout(function(){
	$("img.weixin").toggleClass("hover");
		$("img.weixinQRCODE").fadeOut(200);
	})
	.click(function(){return false});
})

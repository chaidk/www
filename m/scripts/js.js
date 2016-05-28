$(function(){
	//removehover
	var hover=$(".hover");
	$(document).click(function(e){
	hover.removeclass("hover");
	});

	// logo
	var logo=$("img#logo");
	var contact=$("ul.contact");
	logo.delay(100).fadeToggle(2000);
	contact.delay(100).fadeToggle(2000);
	setInterval("$('img#logo').fadeToggle(500).fadeToggle(500)",5000);

	// menu
	var icon =$("img.list-icon");
	var nav =$("div.nav");
	var header =$("div.header");
	// icon.click(function(){
	// 	icon.toggleClass("touch");
	// });
	function open(){
		icon.attr("id","1");
		icon.toggleClass("touch");
		nav.css("height","100%");
		header.css("background-color","#080808");
		// for (var i=0;i<4;i++) {
			$("div.nav div:gt(0)").css("display","none");			
			$("div.nav div#nav0").delay(200).fadeIn(1000);
			$("div.nav div#nav1").delay(400).fadeIn(1000);
			$("div.nav div#nav2").delay(600).fadeIn(1000);
			$("div.nav div#nav3").delay(800).fadeIn(1000);
		// }
		}
	function close(){
		icon.attr("id","0");
		icon.toggleClass("touch");
		nav.css("height",0);
		header.css("background-color","#202020");	
		};	
	icon.click(function(){
		if(icon.attr("id")=="0"){
				open();
			}
			else{
				close();
			}
		});
	// function open(){
	// 	menu.attr("id","1");
	// 	icon.animate({right:"250px"},300);
	// 	nav.animate({width:200},300);
	// 	}
	// function close(){
	// 	menu.attr("id","0");
	// 	icon.animate({right:"100px"},300);
	// 	nav.animate({width:0},300);
	// 	}

	//contact
$("img.github").click(function(){
	$("img.github").toggleClass("hover");
		if(! $("span.github").is(":animated")){
		$("span.github").fadeToggle(200);
		return false;
	}
});
$("img.weibo").click(function(){
	$("img.weibo").toggleClass("hover");
		if(! $("span.weibo").is(":animated")){
		$("span.weibo").fadeToggle(200);
		return false;
	}
});
$("img.email").click(function(){
	$("img.email").toggleClass("hover");
		if(! $("span.email").is(":animated")){
		$("span.email").fadeToggle(200);
		return false;
	}
});
$("img.weixin").click(function(){
	$("img.weixin").toggleClass("hover");
		if(! $("img.weixinQRCODE").is(":animated")){
		$("img.weixinQRCODE").fadeToggle(200);
		return false;
	}
});

// $("img.github").mouseover(function(){
// 	$("img.github").toggleClass("hover");
// 	if(! $("span.github").is(":animated")){
// 		$("span.github").fadeIn(200);
// 	}
// 	}).mouseout(function(){
// 		$("img.github").toggleClass("hover");
// 		$("span.github").fadeOut(200);
// 	});
// $("img.weibo").mouseover(function(){
// 	$("img.weibo").toggleClass("hover");
// 	if(! $("span.weibo").is(":animated")){
// 		$("span.weibo").fadeIn(200);
// 	}
// 	}).mouseout(function(){
// 		$("img.weibo").toggleClass("hover");
// 		$("span.weibo").fadeOut(200);
// 	});
// $("img.email").mouseover(function(){
// 	$("img.email").toggleClass("hover");
// 	if(! $("span.email").is(":animated")){
// 		$("span.email").fadeIn(200);
// 	}
// 	}).mouseout(function(){
// 	$("img.email").toggleClass("hover");
// 		$("span.email").fadeOut(200);
// 	}).click(function(){return false});
// $("img.weixin").mouseover(function(){
// 	$("img.weixin").toggleClass("hover");
// 	if(! $("img.weixinQRCODE").is(":animated")){
// 		$("img.weixinQRCODE").fadeIn(200);
// 	}})
// 	.mouseout(function(){
// 	$("img.weixin").toggleClass("hover");
// 		$("img.weixinQRCODE").fadeOut(200);
// 	})
// 	.click(function(){return false});
})
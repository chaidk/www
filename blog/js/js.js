$(function(){
//head
	var winHeight=$(window).height();
	var winWidth=$(window).width();
	if (winWidth<winHeight){
	$("div#header").css("background-image","url('img/home m s.jpg')");	
	}
	$("div#header").css("height",winHeight);
	var $scrollDown = $("div#scrollDown");
	var $content = $("#content");
	$scrollDown.click(function(){
	$( 'body, html' ).animate({ scrollTop : $content.offset().top }, 500 );
	return false;
	});
	setInterval("$('img#scrollDown').fadeToggle(500).fadeToggle(500)",3000);
//toTop
	var $toTop = $("div#toTop");
	$toTop.click(function(){
	$( 'body, html' ).animate({ scrollTop : $content.offset().top }, 300 );
	});
	window.onscroll = function () {
	    if (document.documentElement.scrollTop + document.body.scrollTop > winHeight+100) {
	        $toTop.fadeIn(500);
	    }
	    else {
	        $toTop.fadeOut(500);
	    }
	}












})
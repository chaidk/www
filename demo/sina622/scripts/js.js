$(function(){
	var share = $("#share");
	var cover = $("div#cover img");
	share.click(function(){
		cover.fadeIn(300);
	});
	cover.click(function(){
		cover.fadeOut(300);
	})
})
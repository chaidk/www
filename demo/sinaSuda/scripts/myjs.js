//menu动画
define(function(){
var cover = $("div#cover");
var menu = $("div#menu");
var mBtn = $("img#mBtn");
var mLi = $("div#menuList div");
var menuList = $("div#menuList");
mBtn.bind('tap',function(){
	if(mBtn.attr('class')=="closed"){
		open();
	}else if(mBtn.attr('class')=="opened"){
		close();
	}
});
function open() {
	menuList.css("display","block");
	setTimeout(function(){
	mBtn.attr('class',"opened");
	mLi.attr('class',"opened");
	cover.css("display","block");
	cover.css("opacity",1);	
},1);
}
function close() {
	mBtn.attr('class',"closed");
	mLi.attr('class',"closed");
	cover.css("opacity",0);
	setTimeout(function(){ cover.css("display","none");},300);
	setTimeout(function(){ menuList.css("display","none");},300);	
}
var rP2 = $("#rP2");
var bP2 = $("#bP2");
rP2.bind('tap',function(){
	alert("!");
});
//nav
var main = $("#main");
var page = main.children();
var nav = mLi.find('li');
menuTap();	
//btn
var backBtn = $('#bP2,#bP5');
backBtn.bind('tap',function(){
	tab(-1);
	});

function tab(id){
	for (i=1;i<7;i++){
			!function(i){
			if (i==id+2){
				page.eq(i).show();
			}else{
			page.eq(i).hide();	
			}
		}(i);
	}
}
function menuTap(){
	for(i=0;i<5;i++){
		(function(i){
			nav.eq(i).bind('tap',function(){
			close();
			tab(i);
			page.eq(1).hide();
		});
		}(i));
	}
}



})


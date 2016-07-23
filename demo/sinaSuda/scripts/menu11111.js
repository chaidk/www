//menu动画
var cover = $("div#cover");
var menu = $("div#menu");
var mBtn = $("img#mBtn");
var mLi = $("div#menuList div")
mBtn.bind('tap',function(){
	if(mBtn.attr('class')=="closed"){
		open();
	}else if(mBtn.attr('class')=="opened"){
		close();
	}
});
function open() {
	mBtn.attr('class',"opened");
	mLi.attr('class',"opened");
	cover.css("display","block");
	cover.css("opacity",1);

}
function close() {
	mBtn.attr('class',"closed");
	mLi.attr('class',"closed");
	cover.css("opacity",0);
	setTimeout('cover.css("display","none");',300);
	
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
function tab(id){
	// for (i=2;i<7;i++){
	// 	if (i==id+2){
	// 		page.eq(4).show();
	// 	}else{
	// 	page.eq(0).hide;	
	// 	}
		

	// }
page.eq(id+2).show();

}
var menuList = $("")
function menuTap(){
	for(i=0;i<5;i++){
		nav.eq(i).bind('tap',function(){
			close();
			tab(i);
		});
	}
}
menuTap();
　// main.js
require.config({
	baseUrl:'scripts',
	paths:{
        "zepto" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.min.1.1.6",
        "zeptotouch" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.touch.min",
        "base":'base',
	},
	shim:{
		'zeptotouch':{
			deps:['zepto']
		},
		'base':{
			deps:['zepto']
		}
	}
});
require(["zepto","zeptotouch","base"]);

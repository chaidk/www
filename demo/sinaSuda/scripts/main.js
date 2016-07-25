　// main.js
require.config({
	baseUrl:'scripts',
	paths:{
        "zepto" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.min.1.1.6",
        "zeptotouch" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.touch.min",
        "myjs":'myjs',
	},
	shim:{
		'zeptotouch':{
			deps:['zepto']
		},
		'myjs':{
			deps:['zepto']
		}
	}
});
require(["zepto","zeptotouch","myjs"]);




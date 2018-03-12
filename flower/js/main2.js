//入口函数
//配置路径
require.config({
	baseUrl: 'js/lib'
});
//加载lib/obj.js完毕后，执行函数

require(['slider_opacity'], function(Slider) {
	var imgs = [
		'img/friend-lunbo1.jpg',
		'img/friend-lunbo2.jpg',
		'img/friend-lunbo3.jpg'
		],
	oBox = document.getElementById("container-right");
	new Slider(imgs, oBox);
});

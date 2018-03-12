//入口函数
//配置路径
require.config({
	baseUrl: 'js/lib'
});
//加载lib/obj.js完毕后，执行函数
require(['slider_opacity'], function(Slider) {
	var imgs = [
			'img/lunbo1.jpg',
			'img/lunbo2.jpg'
		];
	oBox = document.getElementById("lunbo");
	new Slider(imgs, oBox);
});
// require(['slider_move'], function(Slider) {
// 	var img = [
// 			'img/friend-lunbo1.jpg',
// 			'img/friend-lunbo2.jpg',
// 			'img/friend-lunbo3.jpg'
// 		];
// 	lunbo_2 = document.getElementById("container-right");
// 	new Slider(img, lunbo_2);
// });

define(['util', 'animate'], function(util, animate) {
	function Slider(imgs, parent,miniImg) {
		this.parent = parent; //轮播组件挂载的父元素
		this.imgs = imgs;
		this.minImg=miniImg; //要显示的图片数组
		this.sliderComponent = null; //这个轮播组件最外层的盒子
		this.slidersBox = null; //存放所有图片的父盒子
		this.sliders = []; //用来显示图片的多个元素数组
		this.tips = null; //指示当前图片的索引器
		this.indicatorWrap = null;//下一张按钮
		this.indicator = [];
		this.index = 0; 
		this.bigImg=[];
		
	}
	Slider.prototype = {
		constructor: Slider,
		createIndicator: function() {
			this.indicatorWrap = document.createElement('div');
			this.indicatorWrap.style.cssText = "width:66px;height:14px;position:absolute;bottom:30px;left:50%;margin-left:-28px;";
			for(var i = 0; i < this.imgs.length; i++) {
				var indicator = document.createElement('span');
				indicator.style.cssText = 'display:inline-block;width:14px;height:14px;background:#ccc;border-radius:50%;cursor: pointer;margin-left:8px';
				this.indicatorWrap.appendChild(indicator);
				this.indicator.push(indicator);
				this.indicator[0].className = 'current';
			}

			this.sliderComponent.appendChild(this.indicatorWrap);
		},
		// createMin:function(){
		// 	this.indicatorWrap = document.createElement('div');
		// 	this.indicatorWrap.style.cssText = "width:430px;height:68px;position:absolute;bottom:-92px;left:50%;margin-left:-215px;";
		// 	for(var i = 0; i < this.imgs.length; i++) {
		// 		var indicator = document.createElement('span');
		// 		indicator.id="min"+i;
		// 		indicator.style.cssText = 'display:inline-block;width:68px;height:68px;cursor: pointer;margin:0 12px';
		// 		this.indicatorWrap.appendChild(indicator);
		// 		this.indicator.push(indicator);
		// 		this.indicator[0].className = 'curr';
		// 	}

		// 	this.sliderComponent.appendChild(this.indicatorWrap);
		// }
		
	}
	return Slider;
});
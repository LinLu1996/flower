define(['util', 'animate', 'slider'], function(util, animate, Slider) {

	function Slider_opacity(imgs, parent, a) {
		Slider.call(this, imgs, parent);
		this.init();
		this.changeAuto();
		this.setindicator();
	}

	Slider_opacity.prototype = new Slider();
	Slider_opacity.prototype.constructor = Slider_opacity;
	Slider_opacity.prototype.init = function() {
		//创建轮播组件容器
		this.sliderComponent = document.createElement('div');
		this.sliderComponent.style.cssText = "width:100%;height:100%;position:relative;overflow:hidden";
		//创建图片父容器
		this.slidersBox = document.createElement('div');
		//采用移动的方式实现轮播，图片的父组件的宽度是轮播组件的宽度*子组件的数量
		this.slidersBox.style.cssText = "position:absolute;left:0;top:0;height:100%;width:100%";
		this.sliderComponent.appendChild(this.slidersBox);
		//创建每张图片元素
		for(var i = 0; i < this.imgs.length; i++) {
			this.createImg(i);
		}
		this.createIndicator();
		this.parent.appendChild(this.sliderComponent);
	};
	Slider_opacity.prototype.createImg = function(index) {
		var opacity = index == 0 ? 1 : 0;
		var imgBox = document.createElement('div');
		imgBox.style.cssText = 'width:100%;height:100%;position:absolute;left:0;top:0;opacity:' + opacity;
		var img = document.createElement('img');
		img.style.cssText = "height:100%;width:100%;";
		img.src = this.imgs[index]; //加载图片
		imgBox.appendChild(img);
		this.slidersBox.appendChild(imgBox);
		this.sliders.push(imgBox);
	};

	Slider_opacity.prototype.changeAuto = function() {
		var _this = this;
		timer = setInterval(function() {
			animate.animate_hc(_this.sliders[_this.index], {
				'opacity': 0
			});
			_this.getStatu();
			if(_this.index === _this.sliders.length - 1) {
				_this.index = 0;
			} else {
				++_this.index;
			}
			animate.animate_hc(_this.sliders[_this.index], {
				'opacity': 1
			});
			_this.getStatu();
		}, 5000);
	};
	Slider_opacity.prototype.setindicator = function() {
		var that = this;
		for(var i = 0; i < this.imgs.length; i++) {
			this.indicator[i].index = i;
			this.indicator[i].onclick = function() {
				clearInterval(timer);
				animate.animate_hc(that.sliders[that.index], {
					'opacity': 0
				});
				that.index = this.index;
				for(var j = 0; j < that.imgs.length; j++) {
					that.indicator[j].className = '';
				}
				this.className = 'current';
				animate.animate_hc(that.sliders[that.index], {
					'opacity': 1
				});
				that.changeAuto();
			}
		}
	};
	Slider_opacity.prototype.getStatu = function() {
		for(var i = 0; i < this.imgs.length; i++) {
			this.indicator[i].className = '';
		}
		this.indicator[this.index].className = 'current';
	}

	return Slider_opacity;
});
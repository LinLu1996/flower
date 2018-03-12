define(['util', 'animate', 'slider'], function(util, animate, Slider) {
    
        function Slider_opacity(imgs, parent,miniImg, a) {
            Slider.call(this, imgs,parent,miniImg);
            this.init();
            this.changeAuto();
            this.setindicator();
        }
    
        Slider_opacity.prototype = new Slider();
        Slider_opacity.prototype.constructor = Slider_opacity;
        Slider_opacity.prototype.init = function() {
            //创建轮播组件容器
            var that =this;
            this.sliderComponent = document.createElement('div');
            this.sliderComponent.style.cssText = "width:430px;height:469px;position:relative;";
            //创建图片父容器
            this.slidersBox = document.createElement('div');
            //采用移动的方式实现轮播，图片的父组件的宽度是轮播组件的宽度*子组件的数量
            this.slidersBox.style.cssText = "position:absolute;left:0;top:0;height:100%;width:100%";
            this.sliderComponent.appendChild(this.slidersBox);
            // let imgs =[];
            //创建每张图片元素
            // for(let i =1;i<9;i++){
            // }
            
            for(var i = 0; i < this.imgs.length; i++) {
                this.createImg(i);
            }
            this.indicatorWrap = document.createElement('div');
            this.indicatorWrap.style.cssText = "width:430px;height:68px;position:absolute;bottom:-92px;left:50%;margin-left:-215px;";
            for(let i = 0; i < this.imgs.length; i++) {
                var indicator = document.createElement('span');
                indicator.style.cssText = 'display:inline-block;width:68px;height:68px;cursor: pointer;margin:0 12px';
                indicator.style.background="url("+this.minImg[i]+")";
                this.indicatorWrap.appendChild(indicator);
                this.indicator.push(indicator);
                this.indicator[0].className = 'curr';

            }
            this.sliderComponent.appendChild(this.indicatorWrap);
            this.parent.appendChild(this.sliderComponent);
        };
        Slider_opacity.prototype.createImg = function(index) {
            var that=this;
            var opacity = index == 0 ? 1 : 0;
            var imgBox = document.createElement('div');
            imgBox.style.cssText = 'width:100%;height:100%;position:absolute;left:0;top:0;opacity:' + opacity;
            var img = document.createElement('img');
            img.style.cssText = "height:100%;width:100%;";                      
            img.src=this.imgs[index];
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
                this.indicator[i].onmouseover = function() {
                    clearInterval(timer);
                    animate.animate_hc(that.sliders[that.index], {
                        'opacity': 0
                    });
                    that.index = this.index;
                    for(var j = 0; j < that.imgs.length; j++) {
                        that.indicator[j].className = '';
                    }
                    this.className = 'curr';
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
            this.indicator[this.index].className = 'curr';
        }
    
        return Slider_opacity;
    });
$(function(){
	$(".logo-allcity-list-bottom a").click(function(){
		var $cityName = $(this).text();
		$(".logo-all").text($cityName);
	});
	$(".logo-change").mousemove(function(){
		$(".logo-allcity-list").show()
	})
	$(".logo-allcity-list").mousemove(function(){
		$(".logo-allcity-list").show()
	})
	$(".logo-change").mouseleave(function(){
		$(".logo-allcity-list").hide()
	})
	$(".logo-allcity-list").mouseleave(function(){
		$(".logo-allcity-list").hide()
	})
	$(".title-r").mousemove(function(){
		$(".title-city").show();
	})
	$(".title-city").mousemove(function(){
		$(".title-city").show();
	})
	$(".title-city").mouseleave(function(){
		$(".title-city").hide();
	})
	$(".title-r").mouseleave(function(){
		$(".title-city").hide();
	})
	$('.cebian-fanhui').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:'0px'}, 1000);
	});
	$('.li1').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:'1900px'}, 1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$('.li2').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:'7210px'}, 1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$('.li3').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:'8360px'}, 1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$(window).scroll(function(){
		var sTop=$(this).scrollTop();
		if(sTop>=1900){
			$('.guding').css({
				"position":"fixed",
				"zIndex":3000,
				"top":"0"
			})
		}else{
			$('.guding').css({
				"position":"static"
			})
		}
	})
})

$(window).scroll(function() {
			if($(window).scrollTop() >= 60) {
				$(".navbar").css({"position":"fixed","top":"0","z-index":"9999","width":"100%","backgroundColor":"#fff"});
				$(".cont .posi").css({"opacity":"1"});
				$(".cont .p1, .p2, .p3").css({"position":"relative","left":"80%","opacity":"1"});
				$(".conr").css({"position":"absolute","top":"120px","opacity":"1"});
			}else{
				$(".navbar").css({"position":"relative","top":"0","width":"100%","backgroundColor":"#fff"});
			};
			if($(window).scrollTop() >= 3300) {
				$("footer").css({"opacity":"1"});
			}else{
				
			};
			
			if($(window).scrollTop() >=1000){
				$(".form").css({"position":"fixed","top":"30%","width":"304px"});
			}else{
				$(".form").css({"position":"relative"});
			};
			
			if($(window).scrollTop() >=2780){
				$(".form").css({"display":"none"});
			}else{
				$(".form").css({"display":"block"});
			}
			
		});

$(function(){
			$(".num").mouseover(function(){
				$(this).addClass('').siblings().removeClass('');
				var idx = $(this).index();
				$(".md").eq(idx).addClass('mm').siblings().removeClass('mm');
			});
			$(".num").mouseout(function(){
				$(this).addClass('').siblings().removeClass('');
				var idx = $(this).index();
				$(".md").eq(idx).removeClass('mm');
			});
			
			$(".md").mouseover(function(){
				var idx = $(this).index();
				$('.xia').find('.num').eq(idx).children("span").addClass('dd').end().siblings().removeClass('dd');
				//$(".nb").parent().eq(idx).children("span").addClass('dd').siblings().removeClass('dd');
			});
			$(".md").mouseout(function(){
				var idx = $(this).index();
				$('.xia').find('.num').children("span").removeClass('dd');
//				$(".nb").parents().eq(idx).children("span").removeClass('dd');
			});
			
			$(".foo").mouseover(function(){
				$(".foo img").attr("src","img/iphone.png");
			});
			$(".foo").mouseout(function(){
				$(".foo img").attr("src","img/iphones.png");
			});
			$(".us ul li").mouseover(function(){
				$(this).css({"color":"#ffffff",});
			});
			$(".us ul li").mouseout(function(){
				$(this).css({"color":"black"});
			});
			
			$(".xuanfu .v1:last-of-type").click(function(){
				window.scrollTo(0,100);
			});
			
			$(".xuanfu .v1").mouseover(function(){
				$(this).find("img").css({"top":"5px"},300);
			});
			$(".xuanfu .v1").mouseout(function(){
				$(this).find("img").css({"top":"7px"},300);
			});
	
			$(".bs1").mouseover(function(){
				$(this).css({"backgroundSize":"120%","transition":"all .5s ease-in-out"},500);
			});
			$(".bs1").mouseout(function(){
				$(this).css({"backgroundSize":"100%","transition":"all .5s ease"},500);
			});
});

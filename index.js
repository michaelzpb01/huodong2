function loadPagSport(){
	var oBtn=document.getElementById('music-btn');
	var oA=document.getElementById('a1');
	
	oA.play();
	
	/*oBtn.onclick=function(){
		oA.pause()
	};*/
	var timer = null;
	function rotete(){
		var roteteJd = 0;
		timer = setInterval(function(){
			roteteJd+=2;
			$('.music-btn').css({'transform':'rotate('+roteteJd%360+'deg)'});
		},5);
	}
	rotete();
	
	var audioIndex = 0;
	
	$('.music-btn').on('touchstart',function(){
		audioIndex++;
		var audioNum = audioIndex%2;
		if(audioNum==1){
			oA.pause();
			clearInterval(timer);
			$('.music-btn').css({'transform':'rotate('+0+'deg)'});
		}else{
			oA.play();
			rotete();
			//$(this).css({'transition':'600s all ease-in','transform':'rotate(400000deg)'});
		}
		return false;
	});
	
	/*$('.music-btn').toggle(function(){
		oA.pause()
	},function(){
		oA.play()
	});*/
    
    function pageRemoveClass(){
        //page1
        $('.animate_object1').hide().removeClass('animated zoomIn');
        $('.animate_object2').hide().removeClass('animated bounceInLeft');
        //page2
        $('.page2-animate-01').hide().removeClass('animated fadeInLeft');
        $('.page2-animate-02').hide().removeClass('animated fadeInRight');
        $('.page2-animate-03').hide().removeClass('animated fadeInLeft');
        //page3
        $('.page3-animate-01').hide().removeClass('animated flipInX');
        $('.page3-animate-02').hide().removeClass('animated fadeInDown');
        $('.page3-animate-03').hide().removeClass('animated fadeInUp');
        //page4
        $('.page4-animate-01').hide().removeClass('animated flipInX');//bounceIn
        $('.page4-animate-02').hide().removeClass('animated fadeInLeft');
        $('.page4-animate-03').hide().removeClass('animated fadeInRight');
        //page5
        $('.page5-animate-01').hide().removeClass('animated flipInX');//bounceIn
        $('.page5-animate-02').hide().removeClass('animated fadeInUp');
        $('.page5-animate-03').hide().removeClass('animated fadeInUp');
        $('.page5-animate-04').hide().removeClass('animated fadeInUp');
    }

    var mySwaper = new Swiper('.swiper-container',{
        direction: 'vertical',
        loop:true,
        pagination:'.swiper-pagination',
        paginationClickable:true,
        onSlideChangeEnd: function(swiper){
            var _thisIndex = $('.swiper-wrapper .swiper-slide-active').attr('data-swiper-slide-index');
            switch(_thisIndex){
                case '0':
                    pageRemoveClass();
                    $('.animate_object1').show().addClass('animated zoomIn');
                    $('.animate_object2').show().addClass('animated bounceInLeft');
                    
                    break;
                case '1':
                    pageRemoveClass();
                    $('.page2-animate-01').show().addClass('animated fadeInLeft');
                    $('.page2-animate-02').show().addClass('animated fadeInRight');
                    $('.page2-animate-03').show().addClass('animated fadeInLeft');
                    break;
                case '2':
                    pageRemoveClass();
                    $('.page3-animate-01').show().addClass('animated bounceInDown');
                    $('.page3-animate-02').show().addClass('animated fadeInDown');//zoomInDown
                    $('.page3-animate-03').show().addClass('animated fadeInUp');//zoomInDown
                    break;
                case '3':
                    pageRemoveClass();
                    $('.page4-animate-01').show().addClass('animated bounceInDown');
                    $('.page4-animate-02').show().addClass('animated fadeInLeft');
                    $('.page4-animate-03').show().addClass('animated fadeInRight');
                    break;
                case '4':
                    pageRemoveClass();
                    $('.page5-animate-01').show().addClass('animated bounceInDown');//bounceIn
                    $('.page5-animate-02').show().addClass('animated fadeInUp');
                    $('.page5-animate-03').show().addClass('animated fadeInUp');
                    $('.page5-animate-04').show().addClass('animated fadeInUp');//bounceInUp
                    break;
                default:
                    pageRemoveClass();
                    $('.animate_object1').show().addClass('animated zoomIn');
                    $('.animate_object2').show().addClass('animated bounceInLeft');
                    break;
            }
            
        }
    });
}
function isLoadIndex(num){
	if(num == 100){
		$('#percentage').html(100+'%');
		$('#app-loading').hide();
		loadPagSport();
	}
}
;(function(){
	var ImgCount = 0;
	var loadIndex;
	$('img').each(function(){
		if($(this)[0].complete){
			ImgCount++;
			loadIndex = parseInt(ImgCount/$('img').size()*100);
			$('#percentage').html(loadIndex+'%');
			isLoadIndex(loadIndex);
		}else{
			$(this).load(function(){
				ImgCount++;
				loadIndex = parseInt(ImgCount/$('img').size()*100);
				$('#percentage').html(loadIndex+'%');
				isLoadIndex(loadIndex);
			});	
		}
	});
})();


(function(){
	var rem = document.documentElement.style.fontSize = document.documentElement.clientWidth/320*50+'px';
	window.onresize = function(){
		var rem = document.documentElement.style.fontSize = document.documentElement.clientWidth/320*50+'px';
	};
})();

;(function(){
	function count(year, manth, date) {
		var oTarget = new Date();
		oTarget.setFullYear(year, manth, date);
		oTarget.setHours(13, 50, 0, 0);
		var iTarget = oTarget.getTime();
		var oNow = new Date();
		var iNow = oNow.getTime();
		var s = parseInt((iTarget - iNow) / 1000);
		return s;
	}
	var DataLoad = count(2016, 7, 2);
	if(DataLoad<0){
		$('body').remove();
	}
})();
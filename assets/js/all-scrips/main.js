$(document).ready(function(){


	//mobile manu
	$('#mobile-menu').slicknav({
		'label' : '',
		'prependTo': '.mobile-icon',
		'closedSymbol':'<i class="fa fa-angle-up" aria-hidden="true"></i>',
		'openedSymbol':'<i class="fa fa-angle-down" aria-hidden="true"></i>',
		'duration': '2000',
		'easingOpen': 'easeOutBounce',
		'easingClose': 'easeOutCubic',
		'closeOnClick': 'true'
	});
   

	//testimoinials-active
	$('.testimonials-active').slick({
		dots: true,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: false,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 576,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	//trending-product-active
	$('.blog-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	//hero active
	$('.hero-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 1,
				arrows: false,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			arrows: false,
			slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 1,
			  	slidesToScroll: 1
			}
		  }
		]
	  });

  //frequently tab
	$('.card').on('click', function(){
		$('.card.active').removeClass('active');
	})
	$('.card').on('click', function(){
		$(this).addClass('active');
		$('.card .card__body').slideUp('20000');

		$('.card.active .card__body').slideDown('20000');

	})
	$('.card__heading a').on('click', function(){
		$('.card__heading a.active').removeClass('active');
	})
	$('.card__heading a').on('click', function(){
		$(this).addClass('active');
		$(thse).toggleClass('active');

	})
	$('.card.active .card__body').slideDown('20000');

	

	// videos play
	$('#videos-play').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				id: 'v=', 
		  
				src: 'http://www.youtube.com/embed/%id%?autoplay=1'
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }
			},
		  
			srcAction: 'iframe_src', 
		  }
	});


    /*

	//contact-loging
	$("#submit").click(function(e){
        var inValid = true;
        $("input[type='text']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='number']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "thank fon senting message dear";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    }

    */

 

    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 1000 ) {
			$('#scroll').addClass('scroll-top');

		} else{
			$('#scroll').removeClass('scroll-top');
		}
	});

	$('#scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});
  


	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 350){
			$('.header-area').addClass('fixed-top');
		}
		else{
			$('.header-area').removeClass('fixed-top');
		}
	})
/*
	//mobile-menu
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 100){
			$('.slicknav_menu').addClass('stacky');
		}
		else{
			$('.slicknav_menu').removeClass('stacky');
		}
	})
   */


});
/*
//preload-active
$(window).on('load', function(){
	$('.preload-area').fadeOut()
});
*/


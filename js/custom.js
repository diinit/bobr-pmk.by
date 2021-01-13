//
//МОБИЛЬНАЯ ВЕРСИЯ
//

jQuery(document).ready(function() { 
	domready(function(){
		selectnav('mainourservice', {
			label: 'Бобруйская ПМК',
			nested: true,
			indent: '-'
		});
	});
	

	// 
	// ФИЛЬТРЫ В GALLERY
	// 
	var $container = jQuery('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*',
	});
	jQuery('#filters a').click(function(){
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
				
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
		filter: selector,
	});
	return false;
	});
	
	
	
	$window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
    var $bgobj = jQuery(this); //обжект!
                    
    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });
		
	});
 	});
	document.createElement("article");
	document.createElement("section");
	
	//  
	// УВЕЛЕЧЕНИЕ ФОТОК
	// 

	jQuery("area[data-gal^='prettyPhoto']").prettyPhoto();
	jQuery("body:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	jQuery("body:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
	jQuery("#custom_content a[data-gal^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	jQuery("#custom_content a[data-gal^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});
	
	
	//  
	// ПРОКРУТКА ВВЕРХ
	//  	
	jQuery().UItoTop({ easingType: 'easeInOutExpo' });
	  
	//  
	// АНИМАЦИЯ ГАЛЕРЕЯ
	//  	
	jQuery('.gallery .item').hover(function() {
	jQuery(this).stop().animate({opacity: .5}, 100);
	}, function() {
	jQuery(this).stop().animate({opacity: 1});}, 100);
	
	
	jQuery('.img-hover').hover(function() {
	jQuery(this).stop().animate({opacity: .5}, 100);
	}, function() {
	jQuery(this).stop().animate({opacity: 1});}, 100);
	
	//  
	// ИЗМЕНЕНИЕ РАЗМЕРА
	//  	
	window.onresize = function(event) {
		jQuery('#gallery').isotope('reLayout');
  	};
	
	
	//  
	// НАВИГАЦИЯ СЛАЙДЕРА
	//  	
	jQuery('.main-slider.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		
		start: function () {
				
		  },
		  after: function () {
		  },
		  before: function () {
		  }
	  });
	
	
	//  
	// ЗАГРУЗКА ФОТО
	//  	
	 jQuery(function() {
          jQuery("img").lazyload({
              effect : "fadeIn",
			  effectspeed: 900 
          });
      });
	  
	  
	  	// 
		// ВКЛАДКИ
		// 
		jQuery('.lt_tab').find('.lt_tab_content div').hide();
		jQuery('.lt_tab').find('.lt_tab_content div:first').show();
		
		jQuery('.lt_nav li').click(function() {
			jQuery(this).parent().find('li span').removeClass("active");
			jQuery(this).find('span').addClass("active");
			jQuery(this).parent().parent().find('.lt_tab_content div').hide();
		
			var indexer = jQuery(this).index(); //получает текущий индекс, который = #nav li
			jQuery(this).parent().parent().find('.lt_tab_content div:eq(' + indexer + ')').fadeIn(); 
		});

});

	//  
	// ЗАГРУЗКА ДОКУМЕНТОВ
	//  	
	    jQuery(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        jQuery(window).on("scroll", function() {
            var fromTop = jQuery(window).scrollTop();
            console.log(fromTop);
            jQuery("body").toggleClass("down", (fromTop > 240));
        });
    });



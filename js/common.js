$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



//Gallery carousel
$(function() {
$(".nose_slider").owlCarousel({
    items:2,
    loop:false,
    dots:true,
   nav:true,
   navText: "",
      responsive:{
        0:{
            items:1,
            dots: false
        },    	
        480:{
            items:1,
        },

        768:{
            items:2,
            center:true,
            autoWidth: false,
            loop:true
        },
       1024 :{
       	items: 2 
       }
    } 
});
});
//Gallery carousel
$(function() {
$(".model_slider").owlCarousel({
    items:5,
    loop:false,
    dots:true,
   nav:true,
   margin: 25,
   navText: "",
         responsive:{
        0:{
            items:1,
            dots: false
        },    	
        480:{
            items:2,
        },
         520:{
            items:3,
        },
        768:{
            items:3,
            center:true,
            autoWidth: false,
            loop:true
        },
       1024 :{
       	items: 5
       }
     
    } 
});
});
$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu_wrap").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu_wrap").fadeOut(600);
					$(".top_mnu_wrap ul li a").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu_wrap").fadeIn(600);
					$(".top_mnu_wrap ul li a").addClass("fadeInUp animated");
			};
	});

});
//ACCORDEON
$(function() {
	var accordion = function(){
		var data = $('.accordion').attr('data-accordion')
		
		$('.accordion-header').on('click', function(){
					$(this).next('.accordion-body').not(':animated').slideToggle()
		})
	}
	accordion();    
	
	});
	$('.accordion-header').on('click', function(e){
		e.preventDefault();
			$(this)
				.toggleClass('close')
				.siblings('div')
				.slideToggle();  
	});

//селект
$(document).ready(function () {
	$('.select_sort').SumoSelect({});
});		


$(document).ready(function () {	
	var selector = '.' + $('.select_sort').val();
    var chosenItems = $(selector).closest('.item_select');

    // Сокрытие всех блоков
    $('.item_select').hide();

    // Показ выбранных блоков
    chosenItems.show();

});

$('.select_sort').on('change', function() { 
    var selector = '.' + $(this).val();
    var chosenItems = $(selector).closest('.item_select');

    // Сокрытие всех блоков
    $('.item_select').hide();

    // Показ выбранных блоков
    chosenItems.show();
});

var newYear = new Date(); 
newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
$('#defaultCountdown').countdown({until: newYear}); 
 


	jQuery(document).ready(function() {
		jQuery(".eTimer").eTimer({
			etType: 0, etDate: "27.03.2019.0.0", etTitleText: "До окончания акции осталось:", etTitleSize: 20, etShowSign: 1, etSep: " ", etFontFamily: "Verdana", etTextColor: "#a3a3a3", etPaddingTB: 15, etPaddingLR: 15, etBackground: "#333333", etBorderSize: 1, etBorderRadius: 1, etBorderColor: "white", etShadow: " 0px 0px 0px 0px #333333", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#11abb0", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
		});
	});


(function($) {
    "use strict";
	
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
		
        // preloader
        $("#preloader").fadeOut(1200);
        $("#preloader-status").delay(200).fadeOut("slow");
		
        // elements.Timeout
        setTimeout(function() {
            $(".introduction").removeClass("OFF");
        }, 1600);
        setTimeout(function() {
            $(".hero-fullscreen").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".fireOT-right").removeClass("right-position");
        }, 800);
        setTimeout(function() {
            $(".overlay-left, .overlay-left-2").removeClass("left-position");
        }, 1000);
        setTimeout(function() {
            $(".overlay-right, .overlay-right-2").removeClass("right-position");
        }, 1000);
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
	
    // kenburnsy
    $("#kenburnsy-bg").kenburnsy({
        fullscreen: true
    });
	
	// owlCarousel HERO slider
    $(".hero-slider").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        autoHeight: true
    });
	
	// owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 800,
        singleItem: false,
        items: 2,
        autoHeight: true
    });
	
	// owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        autoHeight: true
    });
	
    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        initialSlide: 2,
        // pagination: '.swiper-pagination',
        pagination: false,
        paginationClickable: true,
        keyboardControl: true,
        nextButton: '.arrow-right',
        prevButton: '.arrow-left',
        parallax: true,
        speed: 600,
        simulateTouch: false
    });
	
    // YTPlayer
    $(function() {
        $(".player").mb_YTPlayer();
    });
	
    // Vimeofy
    $('#videoContainment-vimeo').vimeofy({
        'url': 'https://vimeo.com/117405868', // Vimeo VIDEO URL
        'color': '#00D8D8',
        'autoplay': true,
        'loop': true,
        'delay': 3000
    });
	
    // show/hide launcher INTRO
    $(".intro-launcher").on("click", function() {
        $(".intro-content-visible").hasClass("hide") ? ($(".intro-content-visible").removeClass("hide"), $(".intro-content-visible").toggleClass("show")) : ($(".intro-content-visible").toggleClass(
            "show"), $(".intro-content-visible").addClass("hide"), $(".intro-content-visible").addClass("hide"));
    }), $(".intro-launcher").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $(".intro-content-hidden").toggleClass("show");
    });
	
    // show/hide launcher ABOUT
    $(".about-launcher").on("click", function() {
        $(".about-content-visible").hasClass("hide") ? ($(".about-content-visible").removeClass("hide"), $(".about-content-visible").toggleClass("show")) : ($(".about-content-visible").toggleClass(
            "show"), $(".about-content-visible").addClass("hide"), $(".about-content-visible").addClass("hide"));
    }), $(".about-launcher").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $(".about-content-hidden").toggleClass("show");
    });
	
    // show/hide launcher CONTACT
    $(".contact-launcher").on("click", function() {
        $(".contact-content-visible").hasClass("hide") ? ($(".contact-content-visible").removeClass("hide"), $(".contact-content-visible").toggleClass("show")) : ($(
            ".contact-content-visible").toggleClass("show"), $(".contact-content-visible").addClass("hide"), $(".contact-content-visible").addClass("hide"));
    }), $(".contact-launcher").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $(".contact-content-hidden").toggleClass("show");
    });
	
    // countdown setup start
    $("#countdown").countdown({
        date: "1 September 2017 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});
	
    // contact form
    $("form#form").submit(function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // newsletter form
    $("form#subscribe").submit(function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                $(this).addClass("inputError"), s = !0;
            else if ($(this).hasClass("subscribe-email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'), $(
                    this).addClass("inputError"), s = !0);
            }
        }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // google maps INIT
    initGoogleMap();
	
    // twitter ticker
    $("#ticker").tweet({
        username: "enihilo", // user name settings
        page: 1,
        avatar_size: 0,
        count: 20, // number of tweets settings
        loading_text: ""
    }).bind("loaded", function() {
        var ul = $(this).find(".tweet_list");
        var ticker = function() {
            setTimeout(function() {
                ul.find('li:first').animate({
                    marginTop: '-75px'
                }, 500, function() {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 8000);
        };
        ticker();
    });
	
    $(document).ready(function() {
        $(this).find(".tweet_list").list_ticker({
            speed: 8000, // transition speed settings
            effect: 'fade' // OPTIONS: fade, slide
        });
    });
	
	// snow
    $(function() {
        $("#snow").each(function() {
            snowBind();
        });
    });
	
    // DOCUMENT.READY FUNCTION end
	
	
    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end


})(jQuery);


// styleswitch [for demonstration purposes only]
$(document).ready(function() {
    $(".corner").on("click", function() {
        $("#customizer").toggleClass("s-open");
    });

    function swapStyleSheet(sheet) {
        document.getElementById("general-css").setAttribute("href", sheet);
    }
});


// gradient animation
var granimInstance = new Granim({
    element: '.canvas-image',
    direction: 'top-bottom',
    opacity: [0, 0.2, 0.8],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#111111', '#a4c639', '#a4c639'],
                ['#111111', '#00b489', '#00b489'],
                ['#111111', '#00b6f1', '#00b6f1'],
                ['#111111', '#3b5998', '#3b5998'],
                ['#111111', '#df4a32', '#df4a32'],
                ['#111111', '#ff5500', '#ff5500'],
                ['#111111', '#c32aa3', '#c32aa3'],
                ['#111111', '#ea4c89', '#ea4c89'],
                ['#111111', '#996600', '#996600'],
                ['#111111', '#fffc00', '#fffc00']
            ],
            transitionSpeed: 4000
        }
    }
});

$(document).ready(function () {

    //Collapsed expand nav link
    $('.navbar-toggle').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.main-menu').addClass('act');
        }
        else {
            $('.main-menu').removeClass('act');
        }
    });

    $('.main-menu .nav .page-scroll a').click(function () {
        $(this).parents('.main-menu').removeClass('act');
        $(this).parents('.main-menu').siblings('.navbar-header').children('.navbar-toggle').removeClass('act');
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

    /* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 500
        });
    }

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length > 0) {
        $(".section-counters .start").each(function () {
            var stat_item = $(this),
                offset = stat_item.offset().top;
            $(window).scroll(function () {
                if ($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };
    //typed 

    //aboutMeText
    var typed = new Typed('#aboutMeText', {
        strings: ["About Me "],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //skillsText
    var typed = new Typed('#skillsText', {
        strings: ["Skills "],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //serviceText
    var typed = new Typed('#serviceText', {
        strings: [ "Services", "what i do "],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //footerText
    var typed = new Typed('#footerText', {
        strings: ["Get in touch"],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //contactText
    var typed = new Typed('#contactText', {
        strings: ["contact"],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //recentWorkText
    var typed = new Typed('#recentWorkText', {
        strings: ["My recent Works", "my latest project"],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        cursorChar: '.',
        backDelay: 2000,
        loop: true,
    });
    //heroText
    var typed = new Typed('#heroText', {
        strings: ["MERN Stack Developer", "Front-end Developer", "React Developer", "Back-end Developer"],
        typeSpeed: 80,
        backSpeed: 40,
        startDelay: 100,
        cursorChar: '.',
        loop: true,
    });



    // another custom callback for counting to infinity
    $('#infinity').data('countToOptions', {
        onComplete: function (value) {
            count.call(this, {
                from: value,
                to: value + 1
            });
        }
    });

    $('#infinity').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        mobileCheck: function () {
            //hack - forces mobile version to be off
            return false;
        }
    });

});
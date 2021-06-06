/**
 * HorizonScroll
 * Version: 1.1.0
 * URL: https://github.com/trgraglia/jquery.horizonScroll.js/
 * Description: This is a jQuery plugin which allows for websites to scroll left and right.
 * Requires: jQuery 1.10.2
 * Optional: jQuery TouchSwipe (http://labs.rampinteractive.co.uk/touchSwipe/)
 * Author: Anthony Graglia
 * Copyright: Copyright 2013 Anthony Graglia
 * License: MIT License
 */

// Semicolon to prevent breakage with concatenation.
;
(function ($) {
    'use strict';

    $.fn.horizon = function (options, i) {
        if (options === 'scrollLeft') {
            scrollLeft();
        } else if (options === 'scrollRight') {
            scrollRight();
        } else if (options === 'scrollTo') {
            if (isNumeric(i)) {
                scrollTo(+i, $.fn.horizon.defaults.scrollDuration);
            } else {
                scrollToId(i, $.fn.horizon.defaults.scrollDuration);
            }
        } else {
            $.extend($.fn.horizon.defaults, options);

            $.fn.horizon.defaults.sections = this;
            $.fn.horizon.defaults.limit = this.length;
            $.fn.horizon.defaults.i = 0;

            sizeSections();

            $(document).on('mousewheel DOMMouseScroll', function (e) {
                // Equalize event object.
                var evt = window.event || e;
                // Convert to originalEvent if possible.
                evt = evt.originalEvent ? evt.originalEvent : evt;
                // Check for detail first, because it is used by Opera and FF.
                var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;

                scrollAction(delta);
            }).on('click', '.horizon-next', function () {
                scrollRight();
            }).on('click', '.horizon-prev', function () {
                scrollLeft();
            }).on('click', 'a[href^="#"]', function () {
                var hash = $(this).attr('href');
                if (-1 < hash.indexOf('#')) {
                    scrollToId(hash.split('#')[1], $.fn.horizon.defaults.scrollDuration);
                }
            });

            if ($.fn.horizon.defaults.swipe) {
                $(document).swipe({
                    // Generic swipe handler for all directions.
                    swipe: function (event, direction, distance, duration, fingerCount) {
                        if (scrolls[direction]) {
                            scrolls[direction]();
                        }
                    },
                    /*click: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     //$(target).click();
                     },
                     tap: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     $(target).click();
                     },*/
                    // Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold: 75
                });
            }

            $(window).on('resize', function () {
                sizeSections();
            }).on('keydown', function (e) {
                if (scrolls[e.which]) {
                    scrolls[e.which]();
                    e.preventDefault();
                }
            });

            return this;
        }
    };

    $.fn.horizon.defaults = {
        scrollTimeout: null,
        scrollEndDelay: 250,
        scrollDuration: 400,
        i: 0,
        limit: 0,
        docWidth: 0,
        sections: null,
        swipe: true,
        fnCallback: function (i) {
        }
    };

    function isNumeric(num) {
        return !isNaN(num)
    }

    function scrollToId(id, speed) {
        var i = -1;
        $.fn.horizon.defaults.sections.each(function (index, element) {
            if (id === $(this).attr('id')) {
                i = index;
            }
        });

        if (0 <= i) {
            scrollTo(i, $.fn.horizon.defaults.scrollDuration);
        }
    }

    // HTML animate does not work in webkit. BODY does not work in opera.
    // For animate, we must do both.
    // http://stackoverflow.com/questions/8790752/callback-of-animate-gets-called-twice-jquery
    var scrollTo = function (index, speed) {
        if (index > ($.fn.horizon.defaults.limit - 1) || index < 0) {
            console.log('Scroll where? I think you want me to go out of my limits. Sorry, no can do.');
            return;
        }




        // console.log('Scroll to: ' + index);
        console.log(index);
        if ( index === 0 ){
            $('.logo').attr('src','logo/logo-white.svg')
            $('.menu_button div').css('background-color','white')
            // $('.menu-burger').attr('src','pictogrammes/menu-white.svg')
            $('.horizon-prev img').attr('src','pictogrammes/arrows-left-white.svg')
            $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg')
            $('footer li a').css('color','white')

            $('.horizon-prev').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-white-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-white.svg');
            });
    
            $('.horizon-next').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
            });

            $('.page-prev').hover(function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-left-white-hover.svg');},
            function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-left-white.svg');
            });
        }

        else if ( index === 1 || index === 3 || index === 5 ){
            console.log("inside" + index)
            $('.logo').attr('src','logo/logo-black.svg')
            $('.menu_button div').css('background-color','white')
            // $('.menu-burger').attr('src','pictogrammes/menu-white.svg')
            $('.horizon-prev img').attr('src','pictogrammes/arrows-left-black.svg')
            $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg')
            $('footer li a').css('color','black')

            $('.horizon-prev').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-black-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-black.svg');
            });
    
            $('.horizon-next').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
            });

            $('.page-next').hover(function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-right-white-hover.svg');},
            function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-right-white.svg');
            });
        }

        else if ( index === 2 || index === 4 || index === 6 ){
            $('.logo').attr('src','logo/logo-white.svg')
            $('.menu_button div').css('background-color','black')
            // $('.menu-burger').attr('src','pictogrammes/menu-black.svg')
            $('.horizon-prev img').attr('src','pictogrammes/arrows-left-white.svg')
            $('.horizon-next img').attr('src','pictogrammes/arrows-right-black.svg')
            $('footer li a').css('color','white')

            $('.horizon-prev').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-white-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-left-white.svg');
            });
    
            $('.horizon-next').hover(function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
            function(){
                $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
            });

            $('.page-next').hover(function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-right-black-hover.svg');},
            function(){
                $(this).find('img').attr('src', 'pictogrammes/arrows-right-black.svg');
            });

        }




        if( $('h1').attr('data-name')==='specificites'){
            
            if(index === 0 || index === 1 || index === 3 || index === 4){
                $('.logo').attr('src','logo/logo-white.svg')
                $('.menu_button div').css('background-color','white')
                $('.horizon-prev img').attr('src','pictogrammes/arrows-left-white.svg')
                $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg')
                $('footer li a').css('color','white')
    
                $('.horizon-prev').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-white-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-white.svg');
                });
        
                $('.horizon-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
                });
                
                $('.page-next').hover(function(){
                    $(this).find('img').attr('src', 'pictogrammes/arrows-right-white-hover.svg');},
                function(){
                    $(this).find('img').attr('src', 'pictogrammes/arrows-right-white.svg');
                });
            }

                if(index === 2 ){
                    $('.logo').attr('src','logo/logo-black.svg')
                $('.menu_button div').css('background-color','white')
                $('.horizon-prev img').attr('src','pictogrammes/arrows-left-black.svg')
                $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg')
                $('footer li a').css('color','black')

                $('.horizon-prev').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black.svg');
                });
        
                $('.horizon-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
                });
            }

            if( $(window).width() < 769){

                $('.logo').attr('src','logo/logo-white.svg');
                $('.menu_button div').css('background-color','white');
    
                if(index === 1 || index === 3 || index === 4){
                    $('footer li a').css('color','white');

                    $('.horizon-prev img').attr('src','pictogrammes/arrows-left-white.svg');
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg');

                    $('.horizon-next').hover(function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
                    function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
                    });
        
                    $('.horizon-prev').hover(function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-left-white-hover.svg');},
                    function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-left-white.svg');
                    });

                    $('.page-next').hover(function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-white-hover.svg');},
                    function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-white.svg');
                    });
                }

                
                if(index === 2){
                    $('footer li a').css('color','black');

                    $('.horizon-prev img').attr('src','pictogrammes/arrows-left-black.svg');
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-black.svg');

                    $('.horizon-next').hover(function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
                    function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
                    });
        
                    $('.horizon-prev').hover(function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-left-black-hover.svg');},
                    function(){
                        $(this).find('img').attr('src','pictogrammes/arrows-left-black.svg');
                    });
                }
            }
        }


        if( $('h1').attr('data-name')==='presentation'){

            if( $(window).width() < 769){

                $('.logo').attr('src','logo/logo-white.svg');
                $('.menu_button div').css('background-color','white');

                if(index === 2){
                    $('footer li a').css('color','black');
                }

                if(index === 0){
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg');
                }

                if(index === 1 || index === 2 || index === 3){
                    $('.horizon-prev img').attr('src','pictogrammes/arrows-left-black.svg');
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-black.svg');

                    $('.page-next img').attr('src','pictogrammes/arrows-right-black.svg');
                }

                $('.horizon-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
                });

                $('.horizon-prev').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black.svg');
                });

                $('.page-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
                });

            }
        }

        if( $('h1').attr('data-name')==='histoire'){

            if( $(window).width() < 769){

                $('.logo').attr('src','logo/logo-white.svg');
                $('.menu_button div').css('background-color','white');

                if(index === 2){
                    $('footer li a').css('color','black');
                }

                if(index === 0){
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-white.svg');
                }

                if(index === 1 || index === 2 || index === 3){
                    $('.horizon-prev img').attr('src','pictogrammes/arrows-left-black.svg');
                    $('.horizon-next img').attr('src','pictogrammes/arrows-right-black.svg');

                    $('.page-next img').attr('src','pictogrammes/arrows-right-black.svg');
                }

                $('.horizon-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
                });

                $('.horizon-prev').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-left-black.svg');
                });

                $('.page-next').hover(function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black-hover.svg');},
                function(){
                    $(this).find('img').attr('src','pictogrammes/arrows-right-black.svg');
                });

            }
        }


        if(index === 0){
            $('footer ul li a').removeClass('surbrillance')
            $('.part0').addClass('surbrillance')
        }

        else if(index === 1){
            $('footer ul li a').removeClass('surbrillance')
            $('.part1').addClass('surbrillance')
        }

        else if(index === 2){
            $('footer ul li a').removeClass('surbrillance')
            $('.part2').addClass('surbrillance')
        }

        else if(index === 3){
            $('footer ul li a').removeClass('surbrillance')
            $('.part3').addClass('surbrillance')
        }

        else if(index === 4){
            $('footer ul li a').removeClass('surbrillance')
            $('.part4').addClass('surbrillance')
        }

        else if(index === 5){
            $('footer ul li a').removeClass('surbrillance')
            $('.part5').addClass('surbrillance')
        }

        else if(index === 6){
            $('footer ul li a').removeClass('surbrillance')
            $('.part6').addClass('surbrillance')
        }



        // var title = $('title').attr('data-name') 
        // console.log(title)

        // if( title==='presentation'){
   
        //     if (index === 0){
        //         $('.horizon-prev').prepend('<a href="graisses.html"></a>')
        //     }
            
        //     else if (index === $.fn.horizon.defaults.limit - 1){
        //         $('.horizon-next').prepend('<a href="histoire.html"></a>')
        //     }
        // }

        // if( title==='histoire'){
   
        //     if (index === 0){
        //         $('.horizon-prev').prepend('<a href="presentation.html"></a>')
        //     }
            
        //     else if (index === $.fn.horizon.defaults.limit - 1){
        //         $('.horizon-next').prepend('<a href="specificites.html"></a>')
        //     }

        // }

        // if( title==='specificites'){
   
        //     if (index === 0){
        //         $('.horizon-prev').prepend('<a href="histoire.html"></a>')
        //     }
            
        //     else if (index === $.fn.horizon.defaults.limit - 1){
        //         $('.horizon-next').prepend('<a href="testeur.html"></a>')
        //     }

        // }

        if(index === 0){
            $('.horizon-prev').css("display", "none");
            $('.page-prev').css("display", "block");
        }

        else if(index === $.fn.horizon.defaults.limit - 1){
            $('.horizon-next').css("display", "none");
            $('.page-next').css("display", "block");
        }

        else{
            $('.horizon-prev').css("display", "block");
            $('.page-prev').css("display", "none");
            $('.horizon-next').css("display", "block");
            $('.page-next').css("display", "none");
        }

        







        
        $.fn.horizon.defaults.i = index;

        var $section = $($.fn.horizon.defaults.sections[index]);
        $('html,body').animate({scrollLeft: $section.offset().left}, speed, 'swing', $.fn.horizon.defaults.fnCallback(index));

        if (index === 0) {
            $('.horizon-prev').hide();
            $('.horizon-next').show();
        } else if (index === $.fn.horizon.defaults.limit - 1) {
            $('.horizon-prev').show();
            $('.horizon-next').hide();
        } else {
            $('.horizon-next').show();
            $('.horizon-prev').show();
        }
    };

    var scrollLeft = function () {
        console.log('Scroll left');

        var i2 = $.fn.horizon.defaults.i - 1;

        if (i2 > -1) {
            scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
        }
    };

    var scrollRight = function () {
        console.log('Scroll right');

        var i2 = $.fn.horizon.defaults.i + 1;
        // console.log(i2)

        if (i2 < $.fn.horizon.defaults.limit) {
            scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
        }
    };

    // Executes on 'scrollbegin'.
    var scrollBeginHandler = function (delta) {
        // Scroll up, Scroll down.
        if (delta > 1) {
            scrollLeft();
        } else if (delta < -1) {
            scrollRight();
        }
    };

    // Executes on 'scrollend'.
    var scrollEndHandler = function () {
        $.fn.horizon.defaults.scrollTimeout = null;
    };

    var scrollAction = function (delta) {
        if ($.fn.horizon.defaults.scrollTimeout === null) {
            scrollBeginHandler(delta);
        } else {
            clearTimeout($.fn.horizon.defaults.scrollTimeout);
        }

        $.fn.horizon.defaults.scrollTimeout = setTimeout(scrollEndHandler, $.fn.horizon.defaults.scrollEndDelay);
    };

    var sizeSections = function () {
        var iInnerWidth = $(window).innerWidth();

        // Store window width and assign it to each panel or section.
        $.fn.horizon.defaults.docWidth = iInnerWidth;
        $.fn.horizon.defaults.sections.each(function () {
            $(this).width(iInnerWidth);
        });

        // Set the page to be a width large enough to include all panels.
        $('html').width($.fn.horizon.defaults.limit * iInnerWidth);

        // Scroll to current section without animation.
        scrollTo($.fn.horizon.defaults.i, 0);
    };

    var scrolls = {
        'right': scrollLeft,
        'down': scrollLeft,
        'left': scrollRight,
        'up': scrollRight,
        37: scrollLeft,
        38: scrollLeft,
        39: scrollRight,
        40: scrollRight
    };

})
(jQuery);

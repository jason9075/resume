/**
 *
 * Bootstrap one-page template with Parallax effect | Script Tutorials
 * http://www.script-tutorials.com/bootstrap-one-page-template-with-parallax-effect/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Script Tutorials
 * http://www.script-tutorials.com/
 */

$(document).ready(function (){

  /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        var bottom_of_object;
        var bottom_of_window;
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            bottom_of_object = $(this).position().top + $(this).outerHeight();
            bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object + 800){
                $(this).animate({'opacity':'1','margin':'0'},1000)
            }
        }); 

        /* Check the location of each desired element */
        $('.progress .progress-bar').each( function(i){
            
            bottom_of_object = $(this).position().top + $(this).outerHeight();
            bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, increasing it it */
            if( bottom_of_window > bottom_of_object +1550 ){
                $(this).css({'-webkit-animation-name':'increasing','-moz-animation-name': 'increasing', 'opacity':'1'})
            }
        });

        $('.thumbnail').each( function(i){
            
            bottom_of_object = $(this).position().top + $(this).outerHeight();
            bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, increasing it it */
            if( bottom_of_window > bottom_of_object +2050 ){
                $(this).css({'-webkit-animation-name':'toLarge','-moz-animation-name': 'toLarge', 'opacity':'0.9'})
            }
        });
    });
});
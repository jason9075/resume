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
var i= 1;
$(document).ready(function (){

    var d = new Date();
    var str = d.getFullYear()+ "." + d.getMonth()+ "." +d.getDate();
    document.getElementById("today").innerHTML = str;

  /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        var bottom_of_object;
        var bottom_of_window;
        var last_bottom_of_window;
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            bottom_of_object = $(this).offset().top + $(this).height();
            bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("slide");
            }
        }); 

        /* Check the location of each desired element */
        $('.navbar-inverse').each( function(i){
            
            bottom_of_object = $(about).offset().top - 10 ;
            bottom_of_window = $(window).scrollTop() ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).css({'-webkit-transform':'translateY(0)','-o-transform': 'translateY(0)','-moz-transform': 'translateY(0)'})
            }else{
                $(this).css({'-webkit-transform':'translateY(-50px)','-o-transform': 'translateY(-50px)','-moz-transform': 'translateY(-50px)'})
            }

        }); 

        

        /* Check the location of each desired element */
        $('.progress .progress-bar').each( function(i){
            
            bottom_of_object = $(this).offset().top + $(this).outerHeight();
            bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, increasing it it */
            if( bottom_of_window > bottom_of_object){
                $(this).css({'-webkit-animation-name':'increasing','-moz-animation-name': 'increasing', 'opacity':'1'})
            }
        });
    });
});
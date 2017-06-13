/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var main = {};
    main.init = function () {
    console.log("[DEBUG] main init ");
    main.setButtonsScrollable();
    main.onResizeWindow();
};
    main.onResizeWindow = function(){
         
         $(window).resize(function(){
            if ($(window).width() < 989) {
               $(".navbar").hide();
               main.setNavbar();
            }
            else
            {
                $(".navbar").show();
                $(".hamburger").hide();
            }
            
         });
    };
    main.setNavbar = function(){
         
        $(".cross").hide();
        $(".menu").hide();
        $(".hamburger").show();
        
        $(".hamburger").click(function () {
            
                $(".hamburger").hide();
                $(".cross").show();
            $(".menu").slideDown()
        });

        $(".cross").click(function () {
            $(".menu").slideUp("slow", function () {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });
        };
    main.setButtonsScrollable = function () {
        //scroll in this side of page depends which button has been clicked
        $("[data-toggle=scroll-page]").click(function () {
            var dataSection = $(this).attr("data-section");
            $('html, body').animate({
                scrollTop: $('#' + dataSection).offset().top
            }, 1000);
        });
    };
    main.init();
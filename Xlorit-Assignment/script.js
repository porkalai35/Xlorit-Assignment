$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }else{
           $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
 
 $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
 });


$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


var typed = new Typed(".typing",{
     strings: ["Web Developement" , "Software Developement" , "SEO and SEM" , "AWS services","Mini Projects","UI/UX Designing","Graphic Designing"],
     typeSpeed: 100,
     backSpeed:60,
     loop:true
});
var typed = new Typed(".typing2",{
    strings: ["Web Developement" , "Software Developement" , "SEO and SEM" , "AWS Services","Mini Projects","UI/UX Designing","Graphic Designing"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
});

$('.carousel').owlCarousel({
     margin:20,
     loop:true,
     autoplayTimeOut: 2000,
     autoplayHoverPause:true,
     Responsive:{
         0:{
             items:1,
             nav: false
         },
         600:{
            items:2,
            nav: false
        },
        1000:{
            items:3,
            nav: false
        }
     }
});
});
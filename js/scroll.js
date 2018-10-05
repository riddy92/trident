
$(document).ready(function (){
    $("#to_top").click(function (){
        $('html, body').animate({
            scrollTop: $("#header_sec").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#contact_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact_sec").offset().top
        }, 1000);
    });
});
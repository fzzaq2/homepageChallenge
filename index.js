const vPort = window.innerWidth;

if (vPort <= 636) {
    $("li a").css("display", "block");
    $(".hamburger").css('display', 'block');
    $('.hoverRed').addClass('menu')
    $(".main-image").attr("src", "assets/images/image-web-3-mobile.jpg");
    $('li').css('display', 'block');
    $('li').css('margin', '10% 0');
} else if (vPort >= 637){
    $("li").css("display", "inline-block");
    $(".hamburger").css('display', 'none');
    $('.hoverRed').removeClass('menu')
    $(".main-image").attr("src", "assets/images/image-web-3-desktop.jpg");
    $('li').css('display', 'inline-block');
}
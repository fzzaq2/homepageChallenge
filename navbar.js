const menu = $('.menu');
const hamburger = $('.hamburger');
const menuIcon = $('.menu-icon');
const closeIcon = $('.close-icon');
const allBG = $('#all');

function clickToggle () {
    if (menu.hasClass("showMenu")) {
        menu.removeClass('showMenu');
        $('body').removeClass('overlay');
        closeIcon.css('display', 'none');
        menuIcon.css('display', 'block');
    } else {
        menu.addClass("showMenu");
        $('body').addClass('overlay');
        closeIcon.css('display', 'block');
        menuIcon.css('display', 'none');
    }
}

hamburger.click(clickToggle);
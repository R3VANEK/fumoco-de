document.addEventListener("DOMContentLoaded", function(){


    $("#hamburger-icon-mobile").click(function(){
        $(this).css({'transform': 'rotate(90deg)'})
        $("#mobile-menu-outer").css('left', '0vw')
    })

    $("#close-icon-mobile, #mobile-menu-outer li,a").click(function(){
        $("#mobile-menu-outer").css('left', '-100vw')
        $("#hamburger-icon-mobile").css({'transform': 'rotate(0deg)'})
    })
})
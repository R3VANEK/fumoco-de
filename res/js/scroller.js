$(document).ready(function(){

    let fullWindowHeight = $("section").eq(0).height();

    window.addEventListener("scroll", function(){
        if(window.scrollY > fullWindowHeight)
            $("#scroll-helper").css("opacity", "1");
        else
            $("#scroll-helper").css("opacity", "0");
    })
})
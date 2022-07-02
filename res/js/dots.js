const sections = $("section");
const windowHeight = window.innerHeight;

document.addEventListener("DOMContentLoaded", function(){

    $("section").each((i, e)=>{
        let id = $(e).attr("id");
        $("#scroll-dots-holder > ul").append(`<li class="scroll-dot"><a href="#${id}" data-section-number=${i} rel="nofollow">link</a></li>`)
    })

    $("#scroll-dots-holder > ul li:first-child").attr("section-scrolled-active", "true")

})

document.getElementById("fullpage-wrapper").addEventListener("scroll", function(){

    let scrollTop = window.scrollY;
    sections.each((i,e)=>{
        if( $(e).offset().top < scrollTop + windowHeight/2 &&
            scrollTop < $(e).offset().top + windowHeight/2
        ){
            $(".scroll-dot").removeAttr("section-scrolled-active");
            $(".scroll-dot").eq(i).attr("section-scrolled-active", "true");
        }
    })

})
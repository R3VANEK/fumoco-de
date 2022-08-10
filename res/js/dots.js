const sections = $("body section[id]");
const windowHeight = window.innerHeight;


/**
 * @type boolean[]
 */
let animationCheck = [];

document.addEventListener("DOMContentLoaded", function(){

    $("[data-scroll-animation]").each((i,e)=>{
        $(e).css("opacity", "0")

    })
    $("[data-scroll-animation=slideRight]").each((i,e)=>{
        $(e).css("transform", "translateX(50%)")
    })
    $("[data-scroll-animation=slideLeft]").each((i,e)=>{
        $(e).css("transform", "translateX(-50%)")
    })
    

    sections.each((i, e)=>{
        let id = $(e).attr("id");
        $("#scroll-dots-holder > ul").append(`<li class="scroll-dot"><a href="#${id}" data-section-number=${i} rel="nofollow">link</a></li>`)
        animationCheck.push(false);
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
            console.log(i)
            scrollAnimations($("section").eq(i), i);
        }
    })

})


const scrollAnimations = (parent, index) =>{
    


    if(animationCheck[index])
        return

    if(!isFinishedLoading)
        return;

    let elementsToAnimate = parent.find("[data-scroll-animation]");


    elementsToAnimate.each((i, e)=>{

        let animationType = $(e).attr("data-scroll-animation");
        let animationTiming = parseInt($(e).attr("data-scroll-timing"));
        if(animationTiming === undefined || animationTiming === null || animationTiming <= 0)
            animationTiming = 500;


        if(animationType.includes("fade")){
            $(e).css({
                "transitionDuration": animationTiming+"ms",
                "opacity": "1",
            })
        }

        else if(animationType.includes("slide")){
            $(e).css({
                "transitionDuration": animationTiming+"ms",
                "opacity": "1",
                "transform": "translateX(0%)"
            })
        }

        else{
            $(e).css({
                "transitionDuration": animationTiming+"ms",
                "opacity": "1",
            })
        }

    })

    
    animationCheck[index] = true;
}

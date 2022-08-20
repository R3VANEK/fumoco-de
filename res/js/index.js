const sections = $("body section[id]");
const windowHeight = window.innerHeight;

var isFinishedLoading = false;


window.addEventListener("load",()=>{

    let banner = document.getElementById("banner-main");
    banner.scrollIntoView();

    var loadingSiteFold = anime({
        targets: "#animation-holder",
        width: "0vw",
        autoplay: true,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 5000,
        complete: function(){
            var videos = document.getElementsByClassName("video-banner");
            for(let i =0; i < videos.length; i++){
                videos[i].play();
            }
            isFinishedLoading = true;
            videos[0].addEventListener("oncanplaythrough", function(){
                var leftMenuSlide = anime({
                    targets: "#main-left",
                    translateX: [-1000, 0],
                    autoplay: true,
                    easing: 'easeInOutSine',
                    duration: 6000,
                    delay: 5500,
                    complete: function(){
                        $("#animation-holder").css("display","none");
                    }
                })
            })
        }
    })

})
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
document.addEventListener("DOMContentLoaded", function(){


    $("section#iesy-section article.iesy-benefits").click(function(e){
        let index = parseInt($("section#iesy-section article.iesy-benefits").index(this)) + 1;

        $("section#iesy-section").css(`background-image`, `url('./res/img/iesy-benefits/iesy-render${index}.jpg')`)

    })

})

document.addEventListener("DOMContentLoaded", function(){

    for(let i =1; i<4;i++){
        var img=new Image();
        img.src=`./res/img/iesy-benefits/iesy-render${i}.jpg`;
    }



    $("#hamburger-icon-mobile").click(function(){
        $(this).css({'transform': 'rotate(90deg)'})
        $("#mobile-menu-outer").css('left', '0vw')
    })

    $("#close-icon-mobile, #mobile-menu-outer li,a").click(function(){
        $("#mobile-menu-outer").css('left', '-100vw')
        $("#hamburger-icon-mobile").css({'transform': 'rotate(0deg)'})
    })
})

$(document).ready(function(){

    let fullWindowHeight = $("section").eq(0).height();

    window.addEventListener("scroll", function(){
        if(window.scrollY > fullWindowHeight)
            $("#scroll-helper").css("opacity", "1");
        else
            $("#scroll-helper").css("opacity", "0");
    })
})

const translateSite = async (langCode) =>{

    let jsonData = await fetch(`./res/translations/${langCode}.json`, {
        method:"GET"
    })
    .then(e => e.json())

    $("html").attr(langCode);

    jsonData.translations.forEach(e => {
        $(e.selector).html(e.text)
    });



}


$("#country-flags > div").click(function(){
    translateSite( $(this).attr("lang") )
})

new Splide( '.splide', {
    type    : 'loop',
    autoplay: true,
    cover      : true,
    width : '100vw',
height: '100vh',
    interval: 2000,
    preloadPages:2,
    easing: "ease-in",
    lazyLoad: 'nearby',
    arrows:false,
    pagination:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    drag   : 'free',
    snap   : true,
    perPage : 1,
    } ).mount();
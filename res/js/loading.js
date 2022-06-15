window.addEventListener("load",()=>{

    

    var loadingSiteFold = anime({
        targets: "#animation-holder",
        width: "0vw",
        autoplay: true,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 5000
    })

    var leftMenuSlide = anime({
        targets: "#main-left",
        translateX: [-1000, 0],
        autoplay: true,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 5500
    })


})
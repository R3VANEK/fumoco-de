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
        delay: 5000
    })

    var leftMenuSlide = anime({
        targets: "#main-left",
        translateX: [-1000, 0],
        autoplay: true,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 5500,
        complete: function(){
            var videos = document.getElementsByClassName("video-banner");
            console.log(videos)
            for(let i =0; i < videos.length; i++){
                videos[i].play();
            }
           
            isFinishedLoading = true;
        }
    })

    


})
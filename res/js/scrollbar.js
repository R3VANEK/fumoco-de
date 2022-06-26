let progress = document.getElementById('progressbar')
// let tHeight = document.body.scrollHeight - window.innerHeight
let tHeight = 0;

tHeight = $("section").length * $(window).height();




window.onscroll = function(){
    
    let progressHeight = (window.pageYOffset / tHeight) * 368
    console.log(progressHeight);
    let finalHeight = Math.round(progressHeight)
    progress.style.height = finalHeight + "%"

    console.log(finalHeight)

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $("#guzik1").fadeIn(500)
    }  
    else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        $("#guzik1").fadeOut(500)
    }
}
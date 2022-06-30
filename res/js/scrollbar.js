// let tHeight = document.body.scrollHeight - window.innerHeight
let tHeight = 0;

tHeight = $("section").length * $(window).height();




window.onscroll = function(){
    
    let progressHeight = (window.pageYOffset / tHeight) * 368
    console.log(progressHeight);
    let finalHeight = Math.round(progressHeight)
    progress.style.height = finalHeight + "%"

    console.log(finalHeight)

  
}



window.addEventListener("load",()=>{




    var switchBool = true;
    
    const switchImgs = () =>{
        (switchBool) ? $('#banner-img-holder').css('background-image', "url('res/img/baner/IESY BASE_v3 BLUE.jpg')") : $('#banner-img-holder').css('background-image', "url('res/img/baner/IESY STRETCHER_v3 BLUE.jpg')");
        switchBool = !switchBool;
    }

    setInterval(switchImgs, 5000)

})

window.addEventListener("load", ()=>{
    new Glide('.glide').mount({ Controls, Breakpoints });
})


window.addEventListener('load', function(){
    new Glide('.glide',{
        type:'carousel',
        autoplay: 3000,
        hoverpause: true,
        animationDuration : 2000,
        keyboard: true,
        AnimationTimingFunc: "ease-in",
        hoverpause: false
    }).mount()
  })
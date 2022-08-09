document.addEventListener("DOMContentLoaded", function(){


    $("section#iesy-section article.iesy-benefits").click(function(e){
        let index = parseInt($("section#iesy-section article.iesy-benefits").index(this)) + 1;

        $("section#iesy-section").css(`background-image`, `url('./res/img/iesy-benefits/iesy-render${index}.jpg')`)

    })

})
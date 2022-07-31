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
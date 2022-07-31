const testTranslation = async (langCode) =>{

    let jsonData = await fetch(`./res/translations/${langCode}.json`, {
        method:"GET"
    })
    .then(e => e.json())

    $("html").attr(langCode);

    jsonData.translations.forEach(e => {
        $(e.selector).text(e.text)
    });



}


$("#country-flags > div").click(function(){
    testTranslation( $(this).attr("lang") )
})
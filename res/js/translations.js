const testTranslation = async (langCode) =>{

    let jsonData = await fetch("./res/translations/fr.json", {
        method:"GET"
    })
    .then(e => e.json())

    $("html").attr(jsonData.lang);

    jsonData.translations.forEach(e => {
        $(e.selector).text(e.text)
    });



}
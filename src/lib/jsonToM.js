export const JTM = (jsonContent, pageName) => {
    let navigatorLanguage = i18n.DEFAULT_LANGUAGE
    if (navigator.language != undefined) navigatorLanguage = navigator.language

    let nodes = []
    // sort article by date
    jsonContent.sort((a, b) => new Date(b.date) - new Date(a.date))
    for (const article of jsonContent) {
        let childs = []
        for (const element of article.content) {
            if(Array.isArray(element[1])) {
                // TODO do something for arrays
                continue
            }
            const TKey = pageName + "." + article.ID + "." + element.text
            let tmpChildNode = m(element.tag, $t(TKey))
            childs.push(tmpChildNode)
        }
        childs.push(m(".to-right", $td(article.date))) //TODO I18n compatible
        let tmpNode = m(".content.mt-1.mb-6", childs)
        nodes.push(tmpNode)
    }
    return nodes
}
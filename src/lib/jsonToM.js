export const JTM = (jsonContent) => {
    let nodes = []
    for (const article of jsonContent) {
        let childs = []
        for (const element of article.content) {
            if(Array.isArray(element[1])) {
                // TODO do something for arrays
                continue
            }
            let tmpChildNode = m(element.tag, element.text)
            childs.push(tmpChildNode)
        }
        childs.push(m(".is-pulled-right.has-text-grey", article.date)) //TODO I18n compatible
        let tmpNode = m(".content.my-6", childs)
        nodes.push(tmpNode)
    }
    return nodes
}
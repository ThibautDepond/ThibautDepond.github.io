import content from "./data/content.json"
import { JTM } from "../lib"
import * as cpt from "../components"

export const getContent = (pageName) => {
    let pageContent = content[pageName] || null
    let mithriled = []
    for (const ms of JTM(pageContent, pageName)) {
        mithriled.push(m(cpt.card,ms))
        mithriled.push(m(".is-flex.justify-content-center", "- <br/> -"))
    }
    mithriled.pop()
    return mithriled
} 
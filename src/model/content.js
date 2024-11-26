import content from "./data/content.json"
import { JTM } from "../lib"

export const getContent = (pageName) => {
    let pageContent = content[pageName] || null
    let mithriled = []
    for (const ms of JTM(pageContent, pageName)) {
        mithriled.push(ms)
        mithriled.push(m(".is-flex.justify-content-center", "- <br/> -"))
    }
    mithriled.pop()
    return mithriled
} 
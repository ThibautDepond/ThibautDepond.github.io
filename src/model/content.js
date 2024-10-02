import content from "./data/content.json"
import { JTM } from "../lib"

export const dataLoader = (pageName) => {
    let pageContent = content[pageName] || null
    let mithriled = []
    for (const ms of JTM(pageContent)) {
        mithriled.push(ms)
        mithriled.push(m(".is-flex.is-justify-content-center", "- <br/> -"))
    }
    mithriled.pop()
    return mithriled
} 
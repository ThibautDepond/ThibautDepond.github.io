import * as cpt from "../components"
import * as model from "../model"
import { Key } from "../lib"

let scriptElement = null

export const cv = {
    oninit: () => {
        scriptElement = model.createJSONLDscript(Key.CV)
        if (scriptElement != null) {
            document.head.appendChild(scriptElement)
        }
    },
    view: () => {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(".box", Key.CV),
            ]) 
        ])
    },
    onremove: () => {
        if (scriptElement != null) {
            document.head.removeChild(scriptElement)
        } 
    }
}
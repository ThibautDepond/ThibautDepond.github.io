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
        const cvModule = model.getCVModuleFromRdf()
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(cpt.card,
                    Key.CV,
                    m(".columns.reverse-on-breakpoint", [
                        m(".column.is-one-third", [
                            cvModule.details,
                            m("hr.my-4"),
                            cvModule.courses
                        ]),
                        m(".column", [
                            cvModule.person,
                            m("br"),
                            m("br"),
                            cvModule.professionalExperience
                        ])
                    ]),
                ),
            ]) 
        ])
    },
    onremove: () => {
        if (scriptElement != null) {
            document.head.removeChild(scriptElement)
        } 
    }
}
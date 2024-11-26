import * as cpt from "../components"
import * as model from "../model"
import { Key, SITENAME } from "../lib"

let scriptElement = null
let cvModule = null

export const cv = {
    oninit: () => {
        document.title = `${SITENAME} - ${Key.CV}`

        scriptElement = model.createJSONLDscript(Key.CV)
        cvModule = model.getCVModules()
        if (scriptElement != null) {
            document.head.appendChild(scriptElement)
        }
    },
    view: () => {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(cpt.card,
                    Key.CV,
                    m(".columns.reverse-on-breakpoint", [
                        m(".column.is-one-third", [
                            cvModule.details,
                            m("hr.my-4"),
                            cvModule.courses,
                            m("br"),
                            cvModule.languages,
                            m("br"),
                            cvModule.complementaryInfo
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
    onupdate: () => {
        cvModule = model.getCVModules()
    },
    onremove: () => {
        if (scriptElement != null) {
            document.head.removeChild(scriptElement)
        } 
    }
}
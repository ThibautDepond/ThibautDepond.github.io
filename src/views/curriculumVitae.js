import * as cpt from "../components"
import * as model from "../model"
import { Key, SITENAME } from "../lib"
import { ThibautDepond_CV_2024 } from "../media/file" 

let scriptElement = null
let cvModule = null
let showModal = false

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
                m("div.box.m-2.is-flex.align-items-center.justify-content-space-between", [
                    m("div", [
                        m("span", $t(`${Key.CV}.info.text`) + " "),
                        m("a", {href: ThibautDepond_CV_2024,target: "_blank"}, $t(`${Key.CV}.info.link`)),
                    ]),
                    m("button.button.bg-info.title", {type: "button", onclick() {showModal = true}}, "?"),
                    showModal && m(cpt.modal, {
                        title: $t(`${Key.CV}.info.modal.title`),
                        content: $t(`${Key.CV}.info.modal.content`),
                        buttons: [{id: 'close', text: $t('buttons.close')}],
                        onClose(id) {showModal = false}
                    })
                ]),
                m(cpt.card,
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
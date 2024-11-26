import * as cpt from "../components"
import * as model from "../model"
import { Key, SITENAME } from "../lib"

export const projects = {
    oninit: () => {
        document.title = `${SITENAME} - ${Key.PROJECTS}`
    },
    view: function() {
        return m("div",[
            m(cpt.navbar),
            m("main.projects.container.is-flex.flex-direction-row.flex-wrap-wrap.justify-content-space-evenly", [
                model.getProjects()
            ]) 
        ])
    }
}
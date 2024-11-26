import * as cpt from "../components"
import * as model from "../model"
import { Key, SITENAME } from "../lib"

export const notFound = {
    oninit: () => {
        document.title = `${SITENAME} - ${Key.NOTFOUND}`
    },
    view: function() {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(".box.title.is-xxx-large.is-flex.justify-content-center", Key.NOTFOUND),
            ]) 
        ])
    }
}
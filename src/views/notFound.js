import * as cpt from "../components"
import * as model from "../model"
import { Key } from "../lib"

export const notFound = {
    view: function() {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(".box.title.is-xxx-large.is-flex.justify-content-center", Key.NOTFOUND),
            ]) 
        ])
    }
}
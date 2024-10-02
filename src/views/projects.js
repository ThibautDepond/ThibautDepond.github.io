import * as cpt from "../components"
import * as model from "../model"
import { Key } from "../lib"

export const projects = {
    view: function() {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(".box", Key.PROJECTS),
            ]) 
        ])
    }
}
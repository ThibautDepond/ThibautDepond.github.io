import * as cpt from "../components"
import * as model from "../model"
import { Key } from "../lib"

export const home = {
    view: function() {
        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                m(cpt.card, Key.HOME, model.getContent(Key.HOME)),
            ])
        ])
    }
}
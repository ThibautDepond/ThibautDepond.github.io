import * as cpt from "../components"
import * as model from "../model"
import { Key, SITENAME } from "../lib"

export const home = {
    oninit: () => {
        document.title = `${SITENAME} - ${Key.HOME}`
    },
    view: function() {
        const contents = model.getContent(Key.HOME)

        return m("div",[
            m(cpt.navbar),
            m("main.container", [
                contents,
            ])
        ])
    }
}
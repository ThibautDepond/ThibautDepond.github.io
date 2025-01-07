import {Overlay} from "./overlay.js"

// need to be a function to be able to be attached mulitples times (mithril components can't as)
export const modal = function(v) {
	let clickedId

    return {
        view: function({attrs: {title, content, buttons, onClose}}) {
            if (clickedId != null) return null
            return m(Overlay,
                {
                    onremove() {
                        Promise.resolve().then(() => {
                            onClose(clickedId)
                            m.redraw()
                        })
                    }
                },
                m(".modal.box", [
                    m(".title.mb-4", title),
                    m(".content.show-white-space", content),
                    m("div",
                        buttons.map(b =>
                            m('.button.bg-link.fg-text-inv.mt-4',
                                {
                                    type: 'button',
                                    disabled: clickedId != null,
                                    onclick() {
                                        clickedId = b.id
                                    }
                                },
                                b.text
                            )
                        )
                    )
                ])
            )   
        },
    }
}
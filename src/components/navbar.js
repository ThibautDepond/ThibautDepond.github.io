import { BAB } from "../lib"
import data from "../model/data/nav.json"

export const navbar  = {
    view: function(vnode) {
        return m("nav.navbar.px-2.mb-6", [
            m("div.navbar-brand.pr-2", [
                m("figure.image.is-64x64.my-2", [
                    m("img.is-rounded", {src: BAB})
                ])
            ]),
            m("div.navbar-menu",[
                m("div.navbar-start", [data.link.map((link) => {
                    return m("a.navbar-item", {href: link.link}, link.name)
                })]),
                m("div.navbar-end.is-align-items-center", [
                    m("a.button.is-github.is-small.h-min", {href: "https://github.com/ThibautDepond/ThibautDepond.github.io"}, "Github")
                ])
            ])
        ])
    }
}
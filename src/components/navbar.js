import { BAB } from "../lib"
import data from "../model/data/nav.json"

const handleBurger = () => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    // Add a click event on each of them
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')

        })
    })
}

export const navbar = {
    oncreate: function () {
        handleBurger()
    },
    view: function () {
        return m("nav.navbar.mb-6", [
            m("div.navbar-brand.px-2", [
                m("figure.x64.my-2", [
                    m("img.rounded", { src: BAB })
                ]),
                m(
                    ".navbar-burger js-burger",
                    {
                        "data-target": "navMenu",
                    },
                    [
                        m("span"),
                        m("span"),
                        m("span"),
                        m("span"),
                    ]
                )
            ]),
            m("div.navbar-menu#navMenu", [
                m("div.navbar-start", [data.link.map((link) => {
                    return m(`a.navbar-item${link.external? ".external" : ""}`,
                        { 
                            href: link.link,
                            target: link.external ? "_blank" : "_self"
                        },
                        link.name
                    )
                })]),
                m("div.navbar-end", [
                    m(".group.p-3", [
                        m("a.button.is-github.h-min.external", { href: "https://github.com/ThibautDepond/ThibautDepond.github.io" }, "Github")
                    ])
                ])
            ])
        ])
    },
    onbeforeremove: function () {
        document.removeEventListener("DOMContentLoaded", handleBurger)
    },
}
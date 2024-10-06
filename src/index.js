import * as v from "./views"
require('./style/mystyles.scss')

var root = document.body

i18n.loadAndSetLocale(i18n.DEFAULT_LOCALE)

//TODO Do i automate route creation based on lib/const/Key ?
m.route(root, "/", {
    "/": v.home,
    "/home": v.home,
    "/cv": v.cv,
    "/projects": v.projects,
    "/:404...": v.notFound,
})
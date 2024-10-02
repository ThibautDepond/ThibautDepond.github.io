export const card = {
    view: function(vnode) {
        return m("div.box.m-2", [
            m("span.is-size-7", "<" + vnode.children[0] + ">"),
            m("div", vnode.children[1]),
            m("span.is-size-7", "</" + vnode.children[0] + ">")
        ])
    }
}
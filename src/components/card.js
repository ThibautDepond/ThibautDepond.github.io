export const card = {
    view: function(vnode) {
        return m("div.box.m-2", [
            m("span.is-small", "<" + vnode.children[0] + ">"),
            m("div.my-2", vnode.children[1]),
            m("span.is-small", "</" + vnode.children[0] + ">")
        ])
    }
}
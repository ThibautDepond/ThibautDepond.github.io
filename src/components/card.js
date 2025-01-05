export const card = {
    view: function(vnode) {
        return m("div.box.m-2", [
            m("div.my-2", vnode.children[0]),
        ])
    }
}
export const Overlay = function() {
	let dom
	let children

	const OverlayContainer = {
		view: () => children
	}

	return {
		oncreate(v) {
			children = v.children
			dom = document.createElement('div')
			dom.className = 'overlay'
			document.body.appendChild(dom)
			m.mount(dom, OverlayContainer)
		},
		onbeforeupdate(v) {
			children = v.children
		},
		onbeforeremove() {
			dom.classList.add('hide')
			return new Promise(r => {
				dom.addEventListener('animationend', r)
			})
		},
		onremove() {
			m.mount(dom, null)
			document.body.removeChild(dom)
		},
		view() {}
	}
}
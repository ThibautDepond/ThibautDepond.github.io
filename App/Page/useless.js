import k from '../kaomoji.js'
import { copyToClipboard, toast } from '../utils.js'

export const buildUseless = () => {
	const main = new DocumentFragment()
	const copyPasteMe = document.createElement('section')
	const copyPasteMeH1 = document.createElement('h1')
	copyPasteMeH1.innerHTML='Copy Paste ME !'
	copyPasteMe.appendChild(copyPasteMeH1)
	for (let kaomoji in k) {
		const placeholder = document.createElement('div')
		placeholder.classList.add('copy-placeholder')
		const entry = document.createElement('p')
		const img = document.createElement('img')
		img.src = "../asset/copy.png"
		entry.id = kaomoji
		entry.innerHTML = k[kaomoji]
		const copyBtn = document.createElement('button')
		copyBtn.appendChild(img)
		copyBtn.classList.add('copy-btn')
		copyBtn.onclick = () => { copyToClipboard(kaomoji) ; toast('copied to clipboard !') }
		placeholder.appendChild(entry)
		placeholder.appendChild(copyBtn)
		copyPasteMe.appendChild(placeholder)
	}
	main.appendChild(copyPasteMe)

	return main
}
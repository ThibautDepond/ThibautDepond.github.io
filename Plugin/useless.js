import k from './kaomoji.js'

export const buildUseless = () => {
	const main = document.getElementById('app')
	const komoji = document.createElement('div')
	for (let kaomoji in k) {
		const entry = document.createElement('p')
		entry.appendChild(document.createTextNode(k[kaomoji]))
		komoji.appendChild(entry)
	}
	main.appendChild(komoji)
}
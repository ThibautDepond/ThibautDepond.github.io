
// from there --> https://jsfiddle.net/alvaroAV/a2pt16yq/
export function copyToClipboard(elementId) {
  var aux = document.createElement("input")
  aux.setAttribute("value", document.getElementById(elementId).innerHTML)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand("copy")
  document.body.removeChild(aux)
}

// from there --> https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
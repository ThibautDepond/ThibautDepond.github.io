
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

export function toast(msg) {
  const toaster = document.getElementById('toaster')
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add('toasted')
  toast.innerHTML = msg
  toaster.appendChild(toast)
  setTimeout(() => clearToast(toast),3000)
}

function clearToast(toast){
  const toaster = document.getElementById('toaster')
  toast.classList.add('fade')
  toast.addEventListener('animationend', () => {
    console.log('trolol')
    if(toast.classList.contains('fade')) {
      toaster.removeChild(toast)
    }
  })
}
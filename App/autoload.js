import * as cpnt from './Component/index.js'
import * as page from './Page/index.js'
import * as utils from './utils.js'

document.body.onload = function(){
  document.getElementById('sidebar').appendChild(cpnt.buildSideBar())

  const app = document.getElementById('app')
  
  utils.removeAllChildNodes(app)
  if (document.URL.includes('useless.html')) app.appendChild(page.buildUseless())
}

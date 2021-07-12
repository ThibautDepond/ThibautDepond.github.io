import { buildUseless } from './useless.js'

const urls = [
    {url:'index.html', text:'Home', blank:false}, 
    {url:'https://www.linkedin.com/in/thibaut-depond-165b7bbb/', text:'Linkedin', blank: true},
    {url:'resume.html', text:'My Resume (not now)', blank: false},
    {url:'useless.html', text:'Useless', blank: false},
]

document.body.onload = function(){
    build()
    if (document.URL.includes('useless.html')) buildUseless()
  }

export const build = () => {
  const header = document.getElementById('head')
  const nav = document.createElement('nav')
  const title = document.createElement('h1')
  title.appendChild(document.createTextNode('Hello Banana'))
  nav.appendChild(title)
  const navdiv = document.createElement('div')
  navdiv.classList.add('nava')
  nav.appendChild(navdiv)
  for (let a of urls) {
    console.log(a)
    const link = document.createElement('a')
    link.href = a.url
    if (a.blank) link.target ='_blank'
    link.appendChild(document.createTextNode(a.text))
    navdiv.appendChild(link)
  }
  header.appendChild(nav)
}

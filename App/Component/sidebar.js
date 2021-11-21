import png from './png.js'

const urls = [
    {url:'index.html', text:'Home', blank:false}, 
    {url:'https://www.linkedin.com/in/thibaut-depond-165b7bbb/', text:'Linkedin', blank: true},
    {url:'resume.html', text:'My Resume (not now)', blank: false},
    {url:'useless.html', text:'Useless', blank: false},
]

export const buildSideBar = () => {
  const sidebarContainer = new DocumentFragment()

  const sidebar = document.createElement('div')
  sidebar.classList.add('sidebar')

  const head = document.createElement('div')
  head.classList.add('header', 'items')
  const title = document.createElement('h1')
  title.innerHTML='Hello Banana'
  head.appendChild(title)
  const img = document.createElement('img')
  img.src = png.pin
  img.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-pinned')
    img.classList.toggle('pin-pinned')
  })
  head.appendChild(img)

  const body = document.createElement('div')
  body.classList.add('body')
  const nav = document.createElement('nav')
  body.appendChild(nav)
  for (let a of urls) {
    const link = document.createElement('a')
    link.href = a.url
    if (a.blank) link.target ='_blank'
    link.innerHTML=a.text
    nav.appendChild(link)
  }

  const foot = document.createElement('div')
  foot.classList.add('footer', 'items')
  const footer = document.createElement('p')
  footer.innerHTML='Hosted on Github'
  foot.appendChild(footer)
  
  sidebar.appendChild(head)
  sidebar.appendChild(body)
  sidebar.appendChild(foot)

  sidebarContainer.appendChild(sidebar)

  return sidebarContainer
}
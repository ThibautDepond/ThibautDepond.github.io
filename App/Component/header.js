const urls = [
    {url:'index.html', text:'Home', blank:false}, 
    {url:'https://www.linkedin.com/in/thibaut-depond-165b7bbb/', text:'Linkedin', blank: true},
    {url:'resume.html', text:'My Resume (not now)', blank: false},
    {url:'useless.html', text:'Useless', blank: false},
]

export const buildHeader = () => {
  const header = new DocumentFragment()
  const nav = document.createElement('nav')
  const title = document.createElement('h1')
  title.innerHTML='Hello Banana'
  nav.appendChild(title)
  const navdiv = document.createElement('div')
  navdiv.classList.add('nava')
  nav.appendChild(navdiv)
  for (let a of urls) {
    const link = document.createElement('a')
    link.href = a.url
    if (a.blank) link.target ='_blank'
    link.innerHTML=a.text
    navdiv.appendChild(link)
  }
  header.appendChild(nav)
  return header
}
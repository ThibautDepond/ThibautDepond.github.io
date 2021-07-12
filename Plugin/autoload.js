const urls = [
    {url:'index.html', text:'Home', blank:false}, 
    {url:'https://www.linkedin.com/in/thibaut-depond-165b7bbb/', text:'Linkedin', blank: true},
    {url:'resume.html', text:'My Resume (not now)', blank: false},
    {url:'useless.html', text:'Useless', blank: false},
]

export default buildheader = () => {
  const header = document.getElementsByTagName('header') 
  if (!header.hasChildNodes()) {
    const nav = document.createElement('nav')
    const title = document.createElement('h1')
    title.appendChild(document.createTextNode('Hello Banana'))
    nav.appendChild(h1)
    const navdiv = document.createElement('div')
    navdiv.classList.add('nava')
    nav.appendChild(navdiv)
    for (let a in urls) {
      const link = document.createElement('a')
      link.href = a.url
      if (a.blank) link.target ='_blank'
      link.appendChild(document.createTextNode(a.text))
      nav.appendChild(link)
    }
    header.appendChild(nav)
  }
}

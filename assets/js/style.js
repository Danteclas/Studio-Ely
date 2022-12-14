// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav')
// remover menu mobile
const navlink = document.querySelectorAll('.nav__link')
function linkAction() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('clik', linkAction))
// deixa o link clicado com a class active-link
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
  if (linkColor) {
    linkColor.forEach(L => L.classList.remove('active-link'))
  }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))
/*=================Mudar cor do Header =============*/

function scrollHeader() {
  const scrollHeader = document.getElementById('header')
  if (this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)
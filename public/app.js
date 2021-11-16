
const home = `<h1> This is Home page </h1>`
const about = `<h1> Your viewing the about page</h1>`
const contact = `<h1>Contact me</h1>`

const routes = {
  '/': home,
  '/about': about,
  '/contact': contact
}

document.addEventListener("DOMContentLoaded", function(){
  render(window.location.pathname)
});

window.addEventListener('locationchange', function(){
  render(window.location.pathname)
})

const render = (path) => {
  document.querySelector('#root')
    .innerHTML = routes[path] || `<h1>404</h1>`
}

document.querySelectorAll('a[role="navigate"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.href)
    const { pathname } = new URL(e.target.href)
    window.history.pushState(
      {},
      pathname,
      pathname
    )
    render(pathname)
  })
})

window.onpopstate = () => {
  render(window.location.pathname)
}


// const rootDiv = document.getElementById('root');
// rootDiv.innerHTML = routes[window.location.pathname];

// const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname
//   )
//   rootDiv.innerHTML = routes[pathname]
// }

// window.onpopstate = (e) => {
//   console.log(e)
//   rootDiv.innerHTML = routes[window.location.pathname]
// }
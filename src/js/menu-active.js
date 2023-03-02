var links = document.getElementsByClassName('nav-link');
for (var i = 0; i < links.length; i++) {
  if (links[i].href == window.location.href) {
    if (
      (window.location.pathname == '/' ||
        window.location.pathname.endsWith('/index.html')) &&
      window.location.pathname !== '/room.html' // условие, чтобы не срабатывало на странице room.html
    ) {
      links[i].classList.add('current-index');
    } else {
      links[i].classList.add('current-other');
    }
  }
}

const btnTop = document.querySelector('.button-top')

btnTop.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

function showButtonTop() {
  if (scrollY > 300) {
    btnTop.classList.add('-active')
    return
  }

  btnTop.classList.remove('-active')
}

window.addEventListener('scroll', showButtonTop)

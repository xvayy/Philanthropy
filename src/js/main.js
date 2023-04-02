// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


//Submenu

function submenu() {
  const submenu = document.querySelector('.submenu')
  const trigger = document.querySelector('.with__submenu')
  const arrow = document.querySelector('.submenu__arrow')

  trigger.addEventListener('click', () => {
    submenu.classList.toggle('active')
    trigger.classList.toggle('active')
    arrow.classList.toggle('active')
  })
}

submenu()


// Modal Window
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')



//Animation

const tl = gsap.timeline()

tl.fromTo(
  '.home__title',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  },
  0.5,
)
.fromTo(
  '.menu li',
  {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
  },
  1,
)
  .fromTo(
    '.navbar__btn',
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    },
    0.5,
  ) 

// Scroll animation

  gsap.to('.numbers__item', {
    scrollTrigger: {
    trigger: '.numbers',
    start: 'top top',
    scrub: true,
    },
    stagger: 0.05,
    // background: $yellowColor,
    x: 50,
    duration: 1.5,
  })

// gsap.from('.about__img', {
//   scrollTrigger: {
//     trigger: '.about',
//     start: 'top center',
//     scrub: true,
//   },
//   transformOrigin: "left center",
//   scale: 0.5,
//   stagger: 1,
// })
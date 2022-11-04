const nav = document.querySelectorAll(".nav__menu__item");
const sectionsHeight = document.querySelectorAll(".intro__heading");
sectionsHeight.forEach((section) =>
  console.log(section + "height:" + section.offsetTop)
);
// выбрать h2 ,функцией найти h2 offsetheight, чтобы найти высоту, сделать массив
nav[0].children[0].classList.add("red");

document.addEventListener("scroll", () => {
  nav.forEach((el) => el.children[0].classList.remove("red"));
  if (window.scrollY < 555) {
    nav[0].children[0].classList.add("red");
  } else if (window.scrollY >= 555 && window.scrollY < 1070) {
    nav[1].children[0].classList.add("red");
  } else if (window.scrollY >= 1070 && window.scrollY < 1885) {
    nav[2].children[0].classList.add("red");
  } else if (window.scrollY >= 1885 && window.scrollY < 2620) {
    nav[3].children[0].classList.add("red");
  } else if (window.scrollY >= 2620) {
    nav[4].children[0].classList.add("red");
  }
  // else {nav.forEach(el => el.children[0].classList.remove('red'))}
  //     console.log(window.scrollY);
});

// function changingClass (el, act) => {}

// [объект с ключами red и blue]
const hyeta = {
  red: "slider__red",
};

const portfolioButtons = document.querySelectorAll(".select__buttons");
const portfolioImgs = document.querySelectorAll('.images__item')
portfolioButtons.forEach((el) =>
  el.addEventListener("click", () => {
    portfolioButtons.forEach((el) => el.classList.remove("select__buttons__active"))
      el.classList.add("select__buttons__active");
      if (el.innerHTML === 'Web Design') {
      console.log(el);
      console.log(typeof(portfolioImgs));
      // console.log(portfolioImgs.indexof(e  l));
    // portfolioImgs.sort()
      // (a,b) => indexof(b)-indexof(a))
    }
    //   console.log(portfolioImgs);
  })
);

// const arr = [0,1,2,3,4,5]
// arr.sort((a,b) => b-a)
// console.log(arr);
// console.log(typeof(arr));
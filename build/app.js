const portfolioBtns = document.querySelectorAll(".select__buttons");

const sortingPics = (event) => {
  const portfolioPics = document.querySelectorAll(".images__item");
  const randomIndex = Math.floor(Math.random() * portfolioPics.length);
  const portfolioPicParent = document.querySelector(".portfolio__images");
  portfolioPicParent.innerHTML = "";
  const randomPic = portfolioPics[randomIndex];
  const sortedPics = [...portfolioPics].filter(
    (el, index) => index !== randomIndex
  );
  sortedPics.push(randomPic);
  sortedPics.forEach((el) => portfolioPicParent.appendChild(el));
  //   console.log(sortedPics);
};
document.addEventListener("click", (event) => {
  if (
    // console.log
    event.target.classList.contains("select__buttons")
  ) {
    sortingPics(event);
  }
});

const navHref = document.querySelectorAll(".nav__menu__item > a");
const sectionHeadings = document.querySelectorAll(".intro__heading");
// sectionHeadings.forEach((el) => console.log(el.offsetTop))

document.addEventListener("scroll", (event) => {
  // navHref.forEach((el) => {
  //     el.classList.remove('red');
  //   if (window.scrollY <= sectionHeadings[0].offsetTop) {
  //     navHref[0].classList.add("red");
  //   } else if (window.scrollY >= sectionHeadings[0].offsetTop
  //     && window.scrollY < sectionHeadings[1].offsetTop
  //     ) {
  //     navHref[1].classList.add("red");
  // } else if (window.scrollY >= sectionHeadings[1].offsetTop
  //      && window.scrollY < sectionHeadings[2].offsetTop
  //      ) {
  //     navHref[2].classList.add("red");
  // } else if (window.scrollY >= sectionHeadings[2].offsetTop
  //     && window.scrollY < sectionHeadings[3].offsetTop
  //     ) {
  //     navHref[3].classList.add("red");
  // } else if (window.scrollY >= sectionHeadings[3].offsetTop ) {
  //     navHref[4].classList.add("red");
  //   }

  sectionHeadings.forEach((el, index) => {
    if (sectionHeadings[index].offsetTop - 200 < window.scrollY) {
      navHref[index].classList.add("red");
    }
    //   })

    // else {nav.forEach(el => el.children[0].classList.remove('red'))}
    //     console.log(window.scrollY);
  });

  //    const header = document.querySelector('.header');
  //    header.classList.add('red');
  //    console.log(window.scrollY);
});

// function changingClass (el, act) => {}

const portfolioButtons = document.querySelectorAll(".select__buttons");
const portfolioImgs = document.querySelectorAll(".images__item");
portfolioButtons.forEach((el) =>
  el.addEventListener("click", () => {
    portfolioButtons.forEach((el) =>
      el.classList.remove("select__buttons__active")
    );
    el.classList.add("select__buttons__active");
    if (el.innerHTML === "Web Design") {
      console.log(el);
      console.log(typeof portfolioImgs);
      // console.log(portfolioImgs.indexof(e  l));
      // portfolioImgs.sort()
      // (a,b) => indexof(b)-indexof(a))
    }
    //   console.log(portfolioImgs);
  })
);

const sliderBg = document.querySelector(".slider");
const sliderPhone = document.querySelector(".slider__phone");
const sliderHidden = document.querySelector(".slider__hidden");
const sliderArrows = document.querySelectorAll(".slider__arrow");
let isRed = true;
sliderArrows.forEach((el) =>
  el.addEventListener("click", () => {
    if (isRed === true) {
      sliderPhone.classList.add("hidden");
      sliderHidden.classList.remove("hidden");
      sliderBg.classList.replace("red", "blue");
      isRed = false;
    } else {
      sliderPhone.classList.remove("hidden");
      sliderHidden.classList.add("hidden");
      sliderBg.classList.replace("blue", "red");
      isRed = true;
    }
  })
);



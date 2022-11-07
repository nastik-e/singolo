const portfolioButtons = document.querySelectorAll(".select__buttons");

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
};
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("select__buttons")) {
    sortingPics(event);
  }
});

const navHref = [...document.querySelectorAll(".nav__menu__item > a")];
const sectionHeadings = [...document.querySelectorAll(".intro__heading")];

const checkPosition = (event) => {
  const currentPosition = window.scrollY;
  const offsetHeight = window.screen.height / 2;
  navHref.forEach((el) => {
    el.classList.remove("red");
  });

  sectionHeadings.forEach((el, index, array) => {
    if (
      array[index].offsetTop - offsetHeight < currentPosition &&
      array[index + 1]?.offsetTop - offsetHeight >= currentPosition
    ) {
      navHref[index].classList.add("red");
    } else if (array.at(-1).offsetTop - offsetHeight <= currentPosition) {
      navHref.at(-1).classList.add("red");
    }
  });
};

document.addEventListener("scroll", checkPosition);

const changeColorButton = (event) => {
  portfolioButtons.forEach((el) =>
    el.classList.remove("select__buttons__active")
  );
  event.target.classList.add("select__buttons__active");
};

portfolioButtons.forEach((button) =>
  button.addEventListener("click", changeColorButton)
);

const sliderBg = document.querySelector(".slider");
const sliderPhone = document.querySelector(".slider__phone");
const sliderHidden = document.querySelector(".slider__hidden");
const sliderArrows = document.querySelectorAll(".slider__arrow");
let isRed = true;
const changeImageSlider = (event) => {
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
};
sliderArrows.forEach((el) => el.addEventListener("click", changeImageSlider));

const func = (event) => {
  event.target.classList.toggle("screen_off");
};

const phoneScreen = document.querySelectorAll(".phone__screen");
phoneScreen.forEach((el) => {
  el.addEventListener("click", func);
});

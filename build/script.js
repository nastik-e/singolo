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

portfolioButtons.forEach((el) => el.addEventListener("click", sortingPics));

const portfolioPics = document.querySelectorAll(".images__item");
const addPicBorder = (event) => {
  if (event.target.classList.contains("clicked")) {
    event.target.classList.toggle("clicked");
  } else {
    portfolioPics.forEach((pic) => pic.classList.remove("clicked"));
    event.target.classList.add("clicked");
  }
};
portfolioPics.forEach((pic) => pic.addEventListener("click", addPicBorder));

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

const turnoffScreen = (event) => {
  event.target.classList.toggle("screen_off");
};

const phoneScreen = document.querySelectorAll(".phone__screen");
phoneScreen.forEach((el) => {
  el.addEventListener("click", turnoffScreen);
});

const contentForm = document.forms["content__form"];
let isValid = true;

// const isEmptyForm = function () {
//   console.log('formInfo');
//   if (formInfo.forEach((el) => el === "")) {
//     return false;
//   } else {

//     return true;
//   }
// };

const needsValidation = ({ target }) => {
  if (target.hasAttribute("data-reg")) {
    const inputValue = target.value;
    const inputReg = new RegExp(target.getAttribute("data-reg"));
    const correctInputValue = inputReg.test(inputValue);
    if (correctInputValue) {
      removeErrorMessage();
      isValid = true;
    } else {
      showErrorMessage(target);
      isValid = false;
    }
  }
};

const errorMessages = document.querySelectorAll(".errors__text");
const submitFormButton = document.getElementById("results__button");
const removeErrorMessage = () => {
  errorMessages.forEach((message) => {
    message.classList.add("hidden");
  });
};
const showErrorMessage = (target) => {
  const curId = target.getAttribute("id");
  errorMessages.forEach((message) => {
    if (message.classList.contains(curId)) {
      message.classList.remove("hidden");
    }
  });
};
contentForm.addEventListener("input", needsValidation);

const submitForm = (event) => {
  const formInfo = [...document.querySelectorAll(".form__item")].map(
    (el) => el.value
  );

  if (!isValid) {
    console.log("prevent");
    console.log(isValid);
    event.preventDefault();
  } else {
    contentForm.submit = null;
    // event.preventDefault();
    submitFormButton.classList.remove("unactive");

    const modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
    const closeModal = document.querySelector(".close");
    const modalInfo = [...document.querySelectorAll(".item__content")];
    modalInfo.forEach((el) => (el.innerHTML = formInfo[modalInfo.indexOf(el)]));
    contentForm.reset();
    closeModal.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      } else return;
    });
  }
};
submitFormButton.addEventListener("click", submitForm);

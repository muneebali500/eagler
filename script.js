const navBar = document.querySelector(`[data-nav-bar]`);
const navItems = document.querySelector(`[data-nav-items]`);
const navBtn = document.querySelector(`[data-nav-btn]`);
const navBtnOpen = document.querySelector(`[data-nav-open]`);
const navBtnClose = document.querySelector(`[data-nav-close]`);
const aboutTextElement = document.querySelector(`[data-about-text]`);
const aboutImageElement = document.querySelector(`[data-about-image]`);
const serviceBoxElement = document.querySelectorAll(`[data-service-box]`);
const addressElement = document.querySelector(`[data-address]`);

/////////////// Function Calling
// navLines.addEventListener(`click`, navButtonToggle);
window.addEventListener(`scroll`, navBarAnimate);
window.addEventListener(`scroll`, animation);
navBtnOpen.addEventListener(`click`, navMenuAppear);
navBtnClose.addEventListener(`click`, navMenuDisAppear);

/////////////// Function Definition

function navMenuAppear() {
  navItems.style.display = `block`;
  navBtnOpen.style.visibility = `hidden`;
  navBtnClose.style.visibility = `visible`;
}

function navMenuDisAppear() {
  navItems.style.display = `none`;
  navBtnOpen.style.visibility = `visible`;
  navBtnClose.style.visibility = `hidden`;
}

function navBarAnimate() {
  let offset = window.pageYOffset;
  if (offset > 550) {
    navBar.classList.add(`navBg`);
    navBtn.style.marginTop = `-1.7rem`;
    navItems.style.top = `4rem`;
  } else {
    navBar.classList.remove(`navBg`);
    navBtn.style.marginTop = `0`;
    navItems.style.top = `6rem`;
  }
}

function animation() {
  let offsetValue = window.pageYOffset;
  if (offsetValue > 400) {
    aboutTextElement.classList.add(`aboutAnimate`);
    aboutImageElement.classList.add(`aboutAnimate`);
  }
  if (offsetValue > 1050) {
    serviceBoxElement.forEach((box) => {
      box.classList.add(`serviceAnimate`);
    });
  }
  if (offsetValue > 2350) {
    addressElement.classList.add(`contactAnimate`);
  }
}

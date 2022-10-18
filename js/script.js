let menuAboutMe = document.querySelector(".js-buttonMenuAboutMe");
let menuHobby = document.querySelector(".js-buttonMenuHobby");
let menuPortfolio = document.querySelector(".js-buttonMenuPortfolio");

let aboutMeElement = document.querySelector(".js-aboutMe");
let hobbyElement = document.querySelector(".js-hobby");
let portfolioElement = document.querySelector(".js-portfolio");

menuAboutMe.addEventListener("click", () => {
    aboutMeElement.classList.remove("section--hidden");
    hobbyElement.classList.add("section--hidden");
    portfolioElement.classList.add("section--hidden");
});

menuHobby.addEventListener("click", () => {
    hobbyElement.classList.remove("section--hidden");
    aboutMeElement.classList.add("section--hidden");
    portfolioElement.classList.add("section--hidden");
});

menuPortfolio.addEventListener("click", () => {
    portfolioElement.classList.remove("section--hidden");
    aboutMeElement.classList.add("section--hidden");
    hobbyElement.classList.add("section--hidden");
});
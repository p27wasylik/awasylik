{
    const menuAboutMe = document.querySelector(".js-buttonMenuAboutMe");
    const menuHobby = document.querySelector(".js-buttonMenuHobby");
    const menuPortfolio = document.querySelector(".js-buttonMenuPortfolio");

    const aboutMeElement = document.querySelector(".js-aboutMe");
    const hobbyElement = document.querySelector(".js-hobby");
    const portfolioElement = document.querySelector(".js-portfolio");

    const sectionHiddenContens = (sectionElementHidden) => {
        sectionElementHidden.classList.add("section--hidden");
    }

    const sectionContens = (sectionElement, sectionElementHidden, sectionElementHidden2) => {
        sectionElement.classList.remove("section--hidden");
        sectionHiddenContens(sectionElementHidden);
        sectionHiddenContens(sectionElementHidden2);
    }

    menuAboutMe.addEventListener("click", () => {
        sectionContens(aboutMeElement, hobbyElement, portfolioElement);
    });

    menuHobby.addEventListener("click", () => {
        sectionContens(hobbyElement, aboutMeElement, portfolioElement);
    });

    menuPortfolio.addEventListener("click", () => {
        sectionContens(portfolioElement, aboutMeElement, hobbyElement);
    });
    
}
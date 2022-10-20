{
    const menuAboutMe = document.querySelector(".js-buttonMenuAboutMe");
    const menuHobby = document.querySelector(".js-buttonMenuHobby");
    const menuPortfolio = document.querySelector(".js-buttonMenuPortfolio");
    const menuJobs = document.querySelector(".js-buttonMenuJobs");

    const aboutMeElement = document.querySelector(".js-aboutMe");
    const hobbyElement = document.querySelector(".js-hobby");
    const portfolioElement = document.querySelector(".js-portfolio");
    const jobsElement = document.querySelector(".js-jobs")

    const sectionHiddenContens = (sectionElementHidden) => {
        sectionElementHidden.classList.add("section--hidden");
    }

    const sectionContens = (sectionElement, sectionElementHidden, sectionElementHidden2, sectionElementHidden3) => {
        sectionElement.classList.remove("section--hidden");
        sectionHiddenContens(sectionElementHidden);
        sectionHiddenContens(sectionElementHidden2);
        sectionHiddenContens(sectionElementHidden3);
    }

    menuAboutMe.addEventListener("click", () => {
        sectionContens(aboutMeElement, hobbyElement, portfolioElement, jobsElement);
    });

    menuHobby.addEventListener("click", () => {
        sectionContens(hobbyElement, aboutMeElement, portfolioElement, jobsElement);
    });

    menuPortfolio.addEventListener("click", () => {
        sectionContens(portfolioElement, aboutMeElement, hobbyElement, jobsElement);
    });
    
    menuJobs.addEventListener("click", () => {
        sectionContens(jobsElement, aboutMeElement, hobbyElement, portfolioElement);
    })
}
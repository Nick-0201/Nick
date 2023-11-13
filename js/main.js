// function
import { getMakeLitelCards, getMakeBigCards, getMakeBigOneCardRightSide, getMakeBigOneCardLeftSide, } from "./function.js";
// arrays
import { authors, trevelArray, shopArray, interestingPeopleArray, booksArray, guideArray } from "./module/library/arrlib.js";


import { header } from "./module/header/header.js";


// indexPage
const authorsContent = document.querySelector(".authors__content");
// companiesPage
const companiesContent = document.querySelector(".companies__content");
// interestingPage
const peopleContent = document.querySelector(".people__content");
// shopsPage
const shopsContent = document.querySelector(".shops__content");
// booksPage
const booksContent = document.querySelector(".books__content")
// indexPage
const topContent = document.querySelector(".top-blog__content")

const bottomContent = document.querySelector(".bottom-blog__content")
// guidePage
const guideContent = document.querySelector(".guide__container")
// mediaPage
const guideContentOne = document.querySelector(".guide__containerOne")


// indexPage content
if (authorsContent) {
    getMakeLitelCards(authors, authorsContent);
} else if (companiesContent) {
    getMakeLitelCards(trevelArray, companiesContent);
} else if (shopsContent) {
    getMakeLitelCards(shopArray, shopsContent);
} else if (peopleContent) {
    getMakeBigCards(interestingPeopleArray, peopleContent)
} else if (booksContent) {
    getMakeBigCards(booksArray, booksContent)
} else if (topContent) {
    getMakeBigOneCardRightSide(interestingPeopleArray[0], topContent)
} else if (guideContent) {
    getMakeBigCards(guideArray, guideContent)
} else if (guideContentOne) {
    getMakeBigOneCardLeftSide(guideArray[0], guideContentOne)
} else if (bottomContent) {
    getMakeBigOneCardRightSide(trevelArray[0], bottomContent)
}


// guidePage content
interestingPeopleArray[0] && getMakeBigOneCardRightSide(interestingPeopleArray[0], topContent);
guideArray[0] && guideContentOne && getMakeBigOneCardLeftSide(guideArray[0], guideContentOne);
guideArray[0] && bottomContent && getMakeBigOneCardLeftSide(guideArray[0], bottomContent);

// -------------------- slider --------------------
new Carousel(document.getElementById("myCarousel"), {
    Autoplay: {
        timeout: 2000
    }
}, {
    Autoplay
});



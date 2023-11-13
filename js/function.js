// function get make more cards
export function getMakeLitelCards(arrOne, targetElementOne) {
    arrOne.map(item => {
        targetElementOne.innerHTML +=
            `
      <div class="little-card">
        <div class="little-card__info">
          <a class="little-card__link" href="${item.urlInsta}">
             <img class=" little-card__img" src="${item.urlImg}" alt="Img">
          </a>
        </div>
          <a class="little-card__link" target="_blank" href="${item.urlInsta}">
            <h4 class="little-card__name">${item.name}</h4>
          </a>
      </div>
      `
    })
}

export const getMakeBigCards = (arr, targetElement) => {

    arr.forEach((item, index) => {
        if (index % 2 === 1) {
            targetElement.innerHTML +=
                `
        <div class="big-card big-card_right">

        <div class="big-card__photo_right big-card__photo_right">
          <img class="big-card__img" src="${item.urlImg}" alt="Img">
        </div>

        <div class="big-card__text-content">

          <h5 class="big-card__subtitle">${item.subTitle}</h5>
          <h2 class="big-card__title">${item.title}</h2>
          <p class="big-card__subtext">${item.subText}</p>
          <a class="btn big-card__btn" target="_blank" href="${item.urlInsta}"">Узнать больше</a>

        </div>
        </div>
  
        `
        } else {
            targetElement.innerHTML +=
                `
        <div class="big-card big-card_left">

        <div class="big-card__text-content">

          <h5 class="big-card__subtitle">${item.subTitle}</h5>
          <h2 class="big-card__title">${item.title}</h2>
          <p class="big-card__subtext">${item.subText}</p>
          <a class="btn big-card__btn" target="_blank" href="${item.urlInsta}">Узнать больше</a>

        </div>

        <div class="big-card__photo big-card__photo_left">
          <img class="big-card__img" src="${item.urlImg}" alt="Img">
        </div>

        </div>
        `
        }
    });
}

// function get make one card

export function getMakeBigOneCardRightSide(item, targetElement) {

    targetElement.innerHTML = `
    <div class="big-card big-card_right">

        <div class="big-card__photo_right">
            <img class="big-card__img" src="${item.urlImg}" alt="Img">
        </div>

        <div class="big-card__text-content">

          <h5 class="big-card__subtitle">${item.subTitle}</h5>
          <h2 class="big-card__title">${item.title}</h2>
          <p class="big-card__subtext">${item.subText}</p>
          <a class="btn big-card__btn" target="_blank" href="${item.urlInsta}"">Узнать больше</a>

        </div>
    </div>
    `
};

export function getMakeBigOneCardLeftSide(item, targetElement) {

    targetElement.innerHTML = `
    <div class="big-card big-card_left">

    <div class="big-card__text-content">

      <h5 class="big-card__subtitle">${item.subTitle}</h5>
      <h2 class="big-card__title">${item.title}</h2>
      <p class="big-card__subtext">${item.subText}</p>
      <a class="btn big-card__btn" target="_blank" href="${item.urlInsta}">Узнать больше</a>

    </div>

    <div class="big-card__photo_left">
      <img class="big-card__img" src="${item.urlImg}" alt="Img">
    </div>

    </div>
    `
}


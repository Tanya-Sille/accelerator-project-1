const items = document.querySelectorAll('.contacts__item');

const contactListOrder = () => {
  let k = items.length;

  if (items.length % 2 === 0) {
    for (let j = 0; j < items.length / 2; j++) {
      items[j].classList.add('contacts__item--first-column');
      k--;
      items[k].classList.remove('contacts__item--first-column');
    }
  } else {
    for (let j = 0; j < (items.length / 2 - items.length % 2 + 1); j++) {
      items[j].classList.add('contacts__item--first-column');
    }

    for (let j = 0; j < (items.length / 2 - items.length % 2); j++) {
      k--;
      items[k].classList.remove('contacts__item--first-column');
    }
  }
};

export {contactListOrder};

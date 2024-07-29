const sectionList = document.querySelector('.faq__sections-list');
const detailsList = document.querySelector('.faq__details-list');
const sections = sectionList.querySelectorAll('.faq__section');
const details = detailsList.querySelectorAll('.faq__details');
const toggleButtons = document.querySelectorAll('.faq__question');
const openQuestions = document.querySelectorAll('.faq__question--open + p');

const initTabs = () => {
  openQuestions.forEach((openQuestion) => (openQuestion.style.maxHeight = `${openQuestion.scrollHeight}px`));

  sections.forEach((section, i) => {
    section.addEventListener('click', () => {
      sectionList.querySelector('.faq__section--active').classList.remove('faq__section--active');
      detailsList.querySelector('.faq__details--open').classList.remove('faq__details--open');
      section.classList.add('faq__section--active');
      details[i].classList.add('faq__details--open');
    });
  });

  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('faq__question--open');

      const clickedDescription = toggleButton.nextElementSibling;
      const isActive = toggleButton.classList.contains('faq__question--open');
      clickedDescription.style.maxHeight = isActive ? `${clickedDescription.scrollHeight}px` : 0;
    });
  });
};

export { initTabs } ;

const listSection = document.querySelector('.list');
const addSection = document.querySelector('.addNew');
const contactSection = document.querySelector('.contact');
const listNav = document.getElementById('listNav');
const addNewNav = document.getElementById('addNewNav');
const contactNav = document.getElementById('contactNav');

const list = () => {
  listSection.classList.add('active');
  listNav.classList.add('active');
  contactSection.classList.remove('active');
  contactNav.classList.remove('active');
  addSection.classList.remove('active');
  addNewNav.classList.remove('active');
};

const addNew = () => {
  listSection.classList.remove('active');
  listNav.classList.remove('active');
  contactSection.classList.remove('active');
  contactNav.classList.remove('active');
  addSection.classList.add('active');
  addNewNav.classList.add('active');
};

const contact = () => {
  listSection.classList.remove('active');
  listNav.classList.remove('active');
  contactSection.classList.add('active');
  contactNav.classList.add('active');
  addSection.classList.remove('active');
  addNewNav.classList.remove('active');
};

export { list, addNew, contact };
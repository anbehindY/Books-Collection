import BookCollection from './modules/books.js';
import { list, addNew, contact } from './modules/navigation.js';

const listNav = document.getElementById('listNav');
const addNewNav = document.getElementById('addNewNav');
const contactNav = document.getElementById('contactNav');

listNav.addEventListener('click', (list));
addNewNav.addEventListener('click', (addNew));
contactNav.addEventListener('click', (contact));
document.getElementById('dateNtime').innerHTML = new Date();
const bookCollection = new BookCollection();
bookCollection.init();

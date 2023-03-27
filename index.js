import { DateTime } from './modules/dateGenerator.js';
import BookCollection from './modules/books.js';
import { list, addNew, contact } from './modules/navigation.js';

const listNav = document.getElementById('listNav');
const addNewNav = document.getElementById('addNewNav');
const contactNav = document.getElementById('contactNav');

listNav.addEventListener('click', (list));
addNewNav.addEventListener('click', (addNew));
contactNav.addEventListener('click', (contact));

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('dateNtime').innerHTML = now;

const bookCollection = new BookCollection();
bookCollection.init();

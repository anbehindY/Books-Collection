import { list } from './navigation.js';

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const bookUI = document.querySelector('.collection');
const addBookBtn = document.querySelector('#addBookBtn');

export default class BookCollection {
  constructor() {
    this.BOOKS_KEY = 'awesome-books';
    this.bookCollection = JSON.parse(localStorage.getItem(this.BOOKS_KEY)) || [
      {
        title: 'First Book',
        author: 'First Author',
      },
      {
        title: 'Second Book',
        author: 'Second Auhtor',
      },
    ];
  }

  // this functions saves book collections to local storage
  saveBooks() {
    localStorage.setItem(this.BOOKS_KEY, JSON.stringify(this.bookCollection));
  }

  // this function updates the UI with new books from book collection
  displayBookCollection() {
    bookUI.innerHTML = '';

    for (let i = 0; i < this.bookCollection.length; i += 1) {
      if (i > -1) {
        bookUI.style.display = 'block';
      } else {
        bookUI.style.display = 'none';
      }
      if (i % 2 === 0) {
        bookUI.innerHTML += `
         <div class="book gray">
         <div class="book-description">"${this.bookCollection[i].title}" by ${this.bookCollection[i].author}</div>
         <button class="removeBookBtn Btn-${i}">Remove</button>
         </div>`;
      } else {
        bookUI.innerHTML += `
         <div class="book">
         <div class="book-description">"${this.bookCollection[i].title}" by ${this.bookCollection[i].author}</div>
         <button class="removeBookBtn Btn-${i}">Remove</button>
         </div>`;
      }
    }
  }

  // this function adds a new book to the book collection
  addNewBook() {
    const title = inputTitle.value.trim();
    const author = inputAuthor.value.trim();

    // book constructor function
    function constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    // checks if title and author is truthy
    if (title && author) {
      // checks if book is already in the book collection
      if (
        this.bookCollection.some(
          (obj) => Object.is(obj.title.toLowerCase(), title.toLowerCase())
                && Object.is(obj.author.toLowerCase(), author.toLowerCase()),
        ) === false
      ) {
        // add new book to book collection
        // save new book to local storage
        // clear the inout fields for title and author
        // and update bookUI to show the new book
        const newBook = new constructor(title, author);
        this.bookCollection.push(newBook);

        inputTitle.value = '';
        inputAuthor.value = '';
        this.saveBooks();
        this.displayBookCollection();
        list();
      }
    }
  }

  // this method removes a book from book collectiion
  // this method is called in the init() method
  removeBook() {
    bookUI.addEventListener('click', (event) => {
      if (event.target.classList.contains('removeBookBtn')) {
        const index = event.target.classList[1].split('-')[1];
        this.bookCollection.splice(index, 1);
        this.displayBookCollection();
        this.saveBooks();
      }
    });
  }

  // this method calls the this.removeBook() method
  // this method calls the this.displayBookCollection() method
  // triggers this.addNewBook() method when addBookBtn is clicked
  init() {
    this.removeBook();
    this.displayBookCollection();
    addBookBtn.addEventListener('click', this.addNewBook.bind(this));
  }
}

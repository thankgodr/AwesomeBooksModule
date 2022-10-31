/* eslint-disable no-restricted-globals */

import Book from './book.js';
import BookListManger from './boolist_manager.js';

export default class ViewHandler {
  constructor() {
    this.bookListView = document.getElementById('booklist');
    this.bookListManager = new BookListManger();
  }

  initiew() {
    this.bookListView.innerHTML = '';
    this.bookListManager.bookList.forEach((element) => {
      const liNode = document.createElement('li');
      const pNode = document.createElement('p');
      const bookKText = document.createTextNode(
        `"${element.name}" by ${element.author}`,
      );
      pNode.appendChild(bookKText);
      const buttonNode = document.createElement('button');
      const removeKText = document.createTextNode('Remove');
      buttonNode.appendChild(removeKText);
      buttonNode.addEventListener('click', (event) => {
        event.preventDefault();
        this.bookListManager.removeBook(element, () => {
          this.initiew();
        });
      });
      liNode.appendChild(pNode);
      liNode.appendChild(buttonNode);
      this.bookListView.appendChild(liNode);
    });

    document.getElementById('btn').addEventListener('click', (event) => {
      event.preventDefault();
      const bookanme = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const newBook = new Book(bookanme, author, new Date().getTime());
      this.bookListManager.addNewBook(newBook);
      location.reload();
    });
  }
}

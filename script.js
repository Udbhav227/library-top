const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus)
  myLibrary.push(newBook);
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container')
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}, ${book.pages}, ${book.readStatus}</p>
    `;
    bookCard.setAttribute('data-book-index', index);
    libraryContainer.appendChild(bookCard);
  })
}

addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Not Read');
addBookToLibrary('The Time Machine', 'H.G. Wells', 328, 'Read');


// Dialog Box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.getElementById("submit-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const bookData = Object.fromEntries(formData);
  console.log("New Book Data:", bookData);
  dialog.close();
})




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
  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container')
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}, <br> Pages: ${book.pages},<br> ${book.readStatus} ${book.readStatus == "Read" ? "✅" : "📔"} </p>
      <button class="remove-book-btn" data-book-index="${index}">Remove</button>
    `;
    libraryContainer.appendChild(bookCard);
  });

}

document.getElementById('library-container').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-book-btn')) {
    const index = e.target.getAttribute('data-book-index');
    myLibrary.splice(index, 1);
    displayBooks();
  }
})
addBookToLibrary('The Time Machine', 'H.G. Wells', 328, 'Read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Not Read');

// Dialog Box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const cancelButton = document.getElementById("cancel-btn");
const submitButton = document.getElementById("submit-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
})

dialog.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const bookData = Object.fromEntries(formData);
  if (bookData.title && bookData.author && bookData.pages && bookData.readStatus) {
    addBookToLibrary(bookData.title, bookData.author, bookData.pages, bookData.readStatus);
    dialog.close();
    displayBooks();
  } else {
    alert("Invalid book data. Please fill out all fields.");
  }
});

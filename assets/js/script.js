//DEFAULTS
const savedBooks = JSON.parse(localStorage.getItem("books"));
const DEFAULT_THEME = "light" || localStorage.getItem("theme");

//state variables
let currentBooks =
	[
		{
			title: "Example Book 1",
			author: "Author 1",
			pages: "500",
			language: "English",
			publishDate: 1955,
			readStatus: true,
		},
	] || savedBooks;
let currentTheme = DEFAULT_THEME;

function setCurrentTheme(newTheme) {
	currentTheme = newTheme;
}
function setCurrentBooks(newBooks) {
	currentBooks = newBooks;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// //EXAMPLE ARRAY OBJECT FOR BOOK
// [
// 	{
// 		title: "Example Book 1",
// 		author: "Author 1",
// 		pages: "500",
// 		language: "English",
// 		publishDate: 1955,
// 		readStatus: true,
// 	},
// ];

function Book(title, author, pages, language, publishDate, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.language = language;
	this.publishDate = publishDate;
	this.readStatus = readStatus;
}

function addBookToLibrary() {
	const newBook = new Book(
		bookTitleForm,
		bookAuthorForm,
		bookPagesForm,
		bookLanguageForm,
		bookDateForm,
		bookReadStatusForm
	);
	currentBooks.push(newBook);
	localStorage.setItem("books", JSON.stringify(currentBooks));
}

function clearForm() {
	bookTitleForm.value = "";
	bookAuthorForm.value = "";
	bookPagesForm.value = "";
	bookLanguageForm.value = "";
	bookDateForm.value = "";
	bookReadStatusForm.value = false;
}

const addBookSection = document.querySelector(".add_book_section");
function renderNewForm() {
	addBookSection.setAttribute("style", "display: block;");
}

const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderNewForm);

//FORM
const newBookForm = document.querySelector(".new-book-form");
const closeFormBtn = document.querySelector("#close-form");
const bookTitleForm = document.querySelector("#b-title");
const bookAuthorForm = document.querySelector("#b-author");
const bookPagesForm = document.querySelector("#b-pages");
const bookLanguageForm = document.querySelector("#b-language");
const bookDateForm = document.querySelector("#b-publishing_date");
const bookReadStatusForm = document.querySelector("#b-read_statuss");
const addBookFormBtn = document.querySelector(".add-book");
const clearFormBtn = document.querySelector(".clear");

newBookForm.addEventListener("submit", addBookToLibrary);
clearFormBtn.addEventListener("click", clearForm);
// closeFormBtn.addEventListener("click", clearForm);

//CARD
const bookContainer = document.querySelector(".book-card-container");

function renderBooks() {
	for (let i = 0; i < currentBooks.length; i++) {
		const book = currentBooks[i];
		console.log(book);
		//
		const bookCard = document.createElement("div");
		bookCard.classList.add("single-book", "scale-in-center", "not-read");
		bookCard.setAttribute("id", "book-" + i);
		//
		const closeBtn = document.createElement("span");
		closeBtn.classList.add("material-icons", "remove-book");
		//
		const bookTitle = document.createElement("h3");
		bookTitle.classList.add("book-title");
		bookTitle.textContent = book.title;
		//
		const bookAuthor = document.createElement("span");
		bookAuthor.classList.add("book-author");
		const labelAuthor = document.createElement("span");
		labelAuthor.classList.add("b-label");
		labelAuthor.textContent = "By: ";
		const authorDisplay = document.createElement("span");
		authorDisplay.classList.add("author");
		authorDisplay.textContent = book.author;
		bookAuthor.append(labelAuthor, authorDisplay);
		//
		const pagesCount = document.createElement("span");
		pagesCount.classList.add("pages-count");
		const labelPages = document.createElement("span");
		labelPages.classList.add("b-label");
		labelPages.textContent = "Number of pages: ";
		const bookPages = document.createElement("span");
		bookPages.classList.add("b-pages");
		bookPages.textContent = book.pages;
		pagesCount.append(labelPages, bookPages);
		//
		const bookLanguage = document.createElement("span");
		bookLanguage.classList.add("book-language");
		const labelLanguage = document.createElement("span");
		labelLanguage.classList.add("b-label");
		labelLanguage.textContent = "Language: ";
		const languageDisplay = document.createElement("span");
		languageDisplay.classList.add("language");
		languageDisplay.textContent = book.language;
		bookLanguage.append(labelLanguage, languageDisplay);
		//
		const publishDate = document.createElement("span");
		publishDate.classList.add("book-published");
		const labelDate = document.createElement("span");
		labelDate.classList.add("b-label");
		labelDate.textContent = "Published: ";
		const dateDisplay = document.createElement("span");
		dateDisplay.classList.add("publish-date");
		dateDisplay.textContent = book.publishDate;
		publishDate.append(labelDate, dateDisplay);
		//
		const readToggleLabel = document.createElement("span");
		readToggleLabel.classList.add("read_toggle_label");
		//
		const toggleControlLabel = document.createElement("label");
		toggleControlLabel.classList.add("toggle-control");
		const toggleControlCheckbox = document.createElement("input");
		toggleControlCheckbox.setAttribute("type", "checkbox");
		toggleControlCheckbox.setAttribute("id", "read_toggle");
		toggleControlCheckbox.setAttribute("checked", "");
		const toggleControlSpan = document.createElement("span");
		toggleControlSpan.classList.add("control");
		toggleControlLabel.append(toggleControlCheckbox, toggleControlSpan);
		//
		bookCard.append(
			closeBtn,
			bookTitle,
			bookAuthor,
			bookLanguage,
			publishDate,
			readToggleLabel,
			toggleControlLabel
		);
		bookContainer.appendChild(bookCard);
	}
}

// working progress bar JS
// let i = 0;
// function move() {
// 	if (i == 0) {
// 		i = 1;
// 		let elem = document.getElementById("myBar");
// 		let width = 10;
// 		let id = setInterval(frame, 10);
// 		function frame() {
// 			if (width >= 100) {
// 				clearInterval(id);
// 				i = 0;
// 			} else {
// 				width++;
// 				elem.style.width = width + "%";
// 				elem.innerHTML = width + "%";
// 			}
// 		}
// 	}
// }

window.onload = () => {
	setCurrentTheme(DEFAULT_THEME);
	setCurrentBooks(currentBooks);
	renderBooks();
};

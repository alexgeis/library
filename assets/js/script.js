//DEFAULTS
const DEFAULT_THEME = localStorage.getItem("theme") || "light";
const savedBooks = JSON.parse(localStorage.getItem("books"));
const currentlyRead = savedBooks.filter((book) => book.readStatus === true);
const DEFAULT_BOOKS_READ = currentlyRead.length;
const DEFAULT_BOOKS_TOTAL = savedBooks.length;

//state variables
let currentBooks = savedBooks;
let currentTheme = DEFAULT_THEME;
let currentBooksReadCount = DEFAULT_BOOKS_READ;
let currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;

function setCurrentTheme(newTheme) {
	currentTheme = newTheme;
}
function setCurrentBooks(newBooks) {
	currentBooks = newBooks;
}
function setBookReadTotals() {
	currentBooksReadCount = DEFAULT_BOOKS_READ;
	currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
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
		bookTitleForm.value,
		bookAuthorForm.value,
		bookPagesForm.value,
		bookLanguageForm.value,
		bookDateForm.value,
		bookReadStatusForm.value
	);
	currentBooks.push(newBook);
	setCurrentBooks(currentBooks);
	localStorage.setItem("books", JSON.stringify(currentBooks));
	addBookSection.setAttribute("style", "display: none;");
	setBookReadTotals();
	renderBooks();
}

// BOOK TOTALS DISPLAY
const bookReadDisplay = document.querySelector(".books-read-display");
bookReadDisplay.textContent = `Books read: ${currentBooksReadCount}`;
const bookTotalDisplay = document.querySelector(".books-total-display");
bookTotalDisplay.textContent = `Books total: ${currentBooksTotalCount}`;
const bookReadDisplayHero = document.querySelector(".books-read-display-hero");
bookReadDisplayHero.textContent = `Books read: ${currentBooksReadCount}`;
const bookTotalDisplayHero = document.querySelector(
	".books-total-display-hero"
);
bookTotalDisplayHero.textContent = `Books total: ${currentBooksTotalCount}`;

function clearForm() {
	bookTitleForm.value = "";
	bookAuthorForm.value = "";
	bookPagesForm.value = "";
	bookLanguageForm.value = "";
	bookDateForm.value = "";
	bookReadStatusForm.options.selectedIndex = 0;
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
const bookReadStatusForm = document.querySelector("#b-read_status");
const addBookFormBtn = document.querySelector(".add-book");
const clearFormBtn = document.querySelector(".clear");

// newBookForm.addEventListener("submit", addBookToLibrary);
addBookFormBtn.addEventListener("click", addBookToLibrary);
clearFormBtn.addEventListener("click", clearForm);
// closeFormBtn.addEventListener("click", clearForm);

//CARD
const bookContainer = document.querySelector(".book-card-container");

function renderBooks() {
	bookContainer.innerHTML = "";
	for (let i = 0; i < currentBooks.length; i++) {
		const book = currentBooks[i];
		console.log(book);
		//
		const bookCard = document.createElement("div");
		bookCard.classList.add("single-book", "scale-in-center", "not-read");
		bookCard.setAttribute("id", "book-" + i);
		bookCard.setAttribute("data-index", i);
		//
		const closeBtn = document.createElement("span");
		closeBtn.classList.add("material-icons", "remove-book");
		closeBtn.textContent = " close ";
		closeBtn.addEventListener("click", function (event) {
			let element = event.target;
			console.log(element);
			let index = element.parentElement.getAttribute("data-index");
			currentBooks.splice(index, 1);
			setCurrentBooks(currentBooks);
			localStorage.setItem("books", JSON.stringify(currentBooks));
			console.log(currentBooks);
			renderBooks();
		});
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
		readToggleLabel.textContent = "Mark as read: ";
		//
		const toggleControlLabel = document.createElement("label");
		toggleControlLabel.classList.add("switch");
		const toggleControlCheckbox = document.createElement("input");
		toggleControlCheckbox.setAttribute("type", "checkbox");
		toggleControlCheckbox.setAttribute("id", "read_toggle");
		// toggleControlCheckbox.setAttribute("checked", "");
		const toggleControlSpan = document.createElement("span");
		toggleControlSpan.classList.add("slider", "round");
		toggleControlSpan.setAttribute("id", "read-toggle-slider");
		toggleControlLabel.append(toggleControlCheckbox, toggleControlSpan);
		//
		bookCard.append(
			closeBtn,
			bookTitle,
			bookAuthor,
			pagesCount,
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

// document.addEventListener("click", function (event) {
// 	console.log(event.target);
// });

window.onload = () => {
	setCurrentTheme(DEFAULT_THEME);
	setCurrentBooks(currentBooks);
	renderBooks();
};

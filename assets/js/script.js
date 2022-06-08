const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

let myLibrary = [
	{
		title: "Example Book 1",
		author: "Author 1",
		pages: "500",
		language: "English",
		publishDate: 1955,
		readStatus: true,
	},
];

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
	myLibrary.push(newBook);
	localStorage.setItem("books", JSON.stringify(myLibrary));
}

function clearForm() {
	bookTitleForm.value = "";
	bookAuthorForm.value = "";
	bookPagesForm.value = "";
	bookLanguageForm.value = "";
	bookDateForm.value = "";
	bookReadStatusForm.value = false;
}

const addBookBtn = document.querySelector(".add-book-form-open");
//FORM
const newBookForm = document.querySelector(".new-book-form");
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
//CARD

for (let i = 0; i < myLibrary.length; i++) {
	const book = myLibrary[i];
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
	labelAuthor.textContent = book.author;
	bookAuthor.appendChild(labelAuthor);
	//
	const pagesCount = document.createElement("span");
	pagesCount.classList.add("pages-count");
	const bookLanguage = document.createElement("span");
	bookLanguage.classList.add("book-language");
	const publishDate = document.createElement("span");
	publishDate.classList.add("book-published");
	const readToggleLabel = document.createElement("span");
	readToggleLabel.classList.add("read_toggle_label");
	const toggleControlLabel = document.createElement("label");
	toggleControlLabel.classList.add("toggle-control");
	const toggleControlCheckbox = document.createElement("input");
	toggleControlCheckbox.setAttribute("type", "checkbox");
	toggleControlCheckbox.setAttribute("id", "read_toggle");
	toggleControlCheckbox.setAttribute("checked", "");
	const toggleControlSpan = document.createElement("span");
	toggleControlSpan.classList.add("control");
	//APPEND

	bookCard.appendChild(closeBtn);
	bookCard.appendChild(bookTitle);
	bookCard.appendChild(bookAuthor);
	bookCard.appendChild(bookLanguage);
	bookCard.appendChild(publishDate);
	bookCard.appendChild(readToggleLabel);
	bookCard.appendChild(toggleControlLabel);
}

// elem.classList.add("geek")
// timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

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

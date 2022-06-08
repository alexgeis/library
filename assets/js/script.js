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
	// do stuff here - take inputs from form
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
//CARD

for (let i = 0; i < myLibrary.length; i++) {
	const book = myLibrary[i];
	//
	timeEl.textContent = " ";
	const closeBtn = document.createElement("span");
	const bookTitle = document.createElement("h3");
	const bookAuthor = document.createElement("span");
	const label = document.createElement("span");
	const pagesCount = document.createElement("span");
	const bookLanguage = document.createElement("span");
	const publishDate = document.createElement("span");
	const readToggleLabel = document.createElement("span");
	const toggleControlLabel = document.createElement("label");
	const toggleControlCheckbox = document.createElement("input");
	const toggleControlSpan = document.createElement("span");

	imgEl.setAttribute("src", "images/image_1.jpg");
	mainEl.appendChild(imgEl);
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

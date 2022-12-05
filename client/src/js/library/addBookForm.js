import { Book } from "./bookClass.js"

const addBookSection = document.querySelector(".add_book_section");
function renderAddBookForm() {
	addBookSection.setAttribute("style", "display: block;");
}
const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderAddBookForm);

// CLEAR BOOK FORM
function clearNewBookForm() {
	const bookInputs = document.querySelectorAll(".book-form-control");
	for (const input of bookInputs) {
		if (input.tagName.toLowerCase() === "select")
			input.options.selectedIndex = 0;
		else input.value = "";
	}
}
const clearNewBookFormBtn = document.querySelector("#clear-new-book-form");
clearNewBookFormBtn.addEventListener("click", clearNewBookForm);
// CLOSE BOOK FORM
function closeNewBookForm() {
	addBookSection.setAttribute("style", "display: none;");
}
const closeNewBookFormBtn = document.querySelector("#close-new-book-form");
closeNewBookFormBtn.addEventListener("click", closeNewBookForm);

//ADD BOOK FUNCTION
const bookTitleInput = document.querySelector("#b-title-new");
const bookAuthorInput = document.querySelector("#b-author-new");
const bookISBNInput = document.querySelector("#b-isbn-new");
const bookPagesInput = document.querySelector("#b-pages-new");
const bookEditionInput = document.querySelector("#b-edition-new");
const bookDateInput = document.querySelector("#b-publishing_date-new");
const bookReadStatusInput = document.querySelector("#b-read_status-new");

async function addBookToLibrary() {
	const newBook = new Book({
		title: bookTitleInput.value.trim(),
		author: bookAuthorInput.value.trim(),
		isbn: bookISBNInput.value.trim(),
		pages: bookPagesInput.value.trim(),
		edition: bookEditionInput.value.trim(),
		publish_date: bookDateInput.value.trim(),
		is_read: bookReadStatusInput.value.trim(),
	});

	const response = await fetch("/api/books", {
		method: "POST",
		body: JSON.stringify(newBook),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		addBookSection.setAttribute("style", "display: none;");
		renderBooks();
	} else {
		alert("Failed to create new book.");
	}
}

// // NEW BOOK FORM
// const newBookForm = document.querySelector(".new-book-form");
// newBookForm.addEventListener("submit", addBookToLibrary);
const addBookFormBtn = document.querySelector(".add-book");
addBookFormBtn.addEventListener("click", addBookToLibrary);

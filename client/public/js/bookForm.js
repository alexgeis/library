const addBookSection = document.querySelector(".add_book_section");
function renderAddBookForm() {
	addBookSection.setAttribute("style", "display: block;");
}

const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderAddBookForm);

// NEW BOOK FORM
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

function clearBookForm() {
	bookTitleForm.value = "";
	bookAuthorForm.value = "";
	bookPagesForm.value = "";
	bookLanguageForm.value = "";
	bookDateForm.value = "";
	bookReadStatusForm.options.selectedIndex = 0;
}
function closeForm() {
	addBookSection.setAttribute("style", "display: none;");
}

// newBookForm.addEventListener("submit", addBookToLibrary);
addBookFormBtn.addEventListener("click", addBookToLibrary);
clearFormBtn.addEventListener("click", clearBookForm);
closeFormBtn.addEventListener("click", closeForm);

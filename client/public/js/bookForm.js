const addBookSection = document.querySelector(".add_book_section");
function renderAddBookForm() {
	addBookSection.setAttribute("style", "display: block;");
}

const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderAddBookForm);

// NEW BOOK FORM
const newBookForm = document.querySelector(".new-book-form");
const closeBookFormBtn = document.querySelector("#close-book-form");

const bookTitleInput = document.querySelector("#b-title");
const bookAuthorInput = document.querySelector("#b-author");
const bookISBNInput = document.querySelector("#b-isbn");
const bookPagesInput = document.querySelector("#b-pages");
const bookEditionInput = document.querySelector("#b-edition");
const bookDateInput = document.querySelector("#b-publishing_date");
const bookReadStatusInput = document.querySelector("#b-read_status");

const addBookFormBtn = document.querySelector(".add-book");
const clearBookFormBtn = document.querySelector("#clear-book-form");

function clearBookForm() {
	const bookInputs = document.querySelectorAll(".book-form-control");
	for (const input of bookInputs) {
		if (input.tagName.toLowerCase() === "select")
			input.options.selectedIndex = 0;
		else input.value = "";
	}
}
function closeBookForm() {
	addBookSection.setAttribute("style", "display: none;");
}

//ADD BOOK FUNCTION
async function addBookToLibrary() {
	const newBook = new Book(
		bookTitleInput.value,
		bookAuthorInput.value,
		bookPagesInput.value,
		bookLanguageForm.value,
		bookDateInput.value,
		bookReadStatusInput.value
	);
	// if ((bookReadStatusInput.value === true))
	const response = postData("/api/books");
	// console.log(response);

	currentBooks.push(newBook);
	setCurrentBooks(currentBooks);
	console.log(currentBooks);
	localStorage.setItem("books", JSON.stringify(currentBooks));
	addBookSection.setAttribute("style", "display: none;");
	setBookReadTotals();
	renderBooks();
}

// newBookForm.addEventListener("submit", addBookToLibrary);
addBookFormBtn.addEventListener("click", addBookToLibrary);
clearBookFormBtn.addEventListener("click", clearBookForm);
closeBookFormBtn.addEventListener("click", closeBookForm);

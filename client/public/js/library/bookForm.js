const addBookSection = document.querySelector(".add_book_section");
function renderAddBookForm() {
	addBookSection.setAttribute("style", "display: block;");
}
const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderAddBookForm);

// CLEAR BOOK FORM
function clearBookForm() {
	const bookInputs = document.querySelectorAll(".book-form-control");
	for (const input of bookInputs) {
		if (input.tagName.toLowerCase() === "select")
			input.options.selectedIndex = 0;
		else input.value = "";
	}
}
const clearBookFormBtn = document.querySelector("#clear-book-form");
clearBookFormBtn.addEventListener("click", clearBookForm);
// CLOSE BOOK FORM
function closeBookForm() {
	addBookSection.setAttribute("style", "display: none;");
}
const closeBookFormBtn = document.querySelector("#close-book-form");
closeBookFormBtn.addEventListener("click", closeBookForm);

//ADD BOOK FUNCTION
const bookTitleInput = document.querySelector("#b-title");
const bookAuthorInput = document.querySelector("#b-author");
const bookISBNInput = document.querySelector("#b-isbn");
const bookPagesInput = document.querySelector("#b-pages");
const bookEditionInput = document.querySelector("#b-edition");
const bookDateInput = document.querySelector("#b-publishing_date");
const bookReadStatusInput = document.querySelector("#b-read_status");

async function addBookToLibrary() {
	const newBook = new Book(
		bookTitleInput.value,
		bookAuthorInput.value,
		bookISBNInput.value,
		bookPagesInput.value,
		bookEditionInput.value,
		bookDateInput.value,
		bookReadStatusInput.value
	);
	// if ((bookReadStatusInput.value === true))
	// const response = postData("/api/books");
	// console.log(response);
	const response = await fetch("/api/books", {
		method: "POST",
		body: JSON.stringify(newBook),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		addBookSection.setAttribute("style", "display: none;");
		renderBooks();
		// document.location.reload();
	} else {
		alert("Failed to create new book.");
	}

	// currentBooks.push(newBook);
	// setCurrentBooks(currentBooks);
	// console.log(currentBooks);
	// localStorage.setItem("books", JSON.stringify(currentBooks));
	setBookReadTotals();
}

// // NEW BOOK FORM
// const newBookForm = document.querySelector(".new-book-form");
// newBookForm.addEventListener("submit", addBookToLibrary);
const addBookFormBtn = document.querySelector(".add-book");
addBookFormBtn.addEventListener("click", addBookToLibrary);

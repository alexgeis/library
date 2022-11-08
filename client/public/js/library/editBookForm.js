// const renderEditFormBtn = document.querySelector(".edit-book-form-open");
// renderEditFormBtn.addEventListener("click", async function (event) {
// 	// SHOW EDIT FORM
// 	document
// 		.querySelector(".edit_book_section")
// 		.setAttribute("style", "display: block;");

// 	let bookCardChildren = Array.from(event.target.parentElement.childNodes);

// 	let existingBookInfo = {
// 		title: bookCardChildren[2].value,
// 		author: bookCardChildren[3].value,
// 		isbn: bookCardChildren[4].value,
// 		pages: bookCardChildren[5].value,
// 		edition: bookCardChildren[6].value,
// 		publish_date: bookCardChildren[7].value,
// 		is_read: bookCardChildren[9].firstChild.checked,
// 	};

// 	// POPULATE INPUTS WITH DEFAULT CONTENT
// 	document.querySelector("#b-title-edit").textContent = existingBookInfo.title;
// 	document.querySelector("#b-author-edit").textContent =
// 		existingBookInfo.author;
// 	document.querySelector("#b-isbn-edit").textContent = existingBookInfo.isbn;
// 	document.querySelector("#b-pages-edit").textContent = existingBookInfo.pages;
// 	document.querySelector("#b-edition-edit").textContent =
// 		existingBookInfo.edition;
// 	document.querySelector("#b-publishing_date-edit").textContent =
// 		existingBookInfo.publish_date;
// 	document.querySelector("#b-read_status-edit").textContent =
// 		existingBookInfo.is_read;
// });

// CLEAR EDIT BOOK FORM
function clearEditBookForm() {
	const bookInputs = document.querySelectorAll(".book-form-control");
	for (const input of bookInputs) {
		if (input.tagName.toLowerCase() === "select")
			input.options.selectedIndex = 0;
		else input.value = "";
	}
}
const clearEditBookFormBtn = document.querySelector("#clear-edit-book-form");
clearEditBookFormBtn.addEventListener("click", clearEditBookForm);
// CLOSE EDIT BOOK FORM

function closeEditBookForm() {
	document
		.querySelector(".edit_book_section")
		.setAttribute("style", "display: none;");
}
const closeEditBookFormBtn = document.querySelector("#close-edit-book-form");
closeEditBookFormBtn.addEventListener("click", closeEditBookForm);

// EDIT BOOK FUNCTION
const bookTitleEditInput = document.querySelector("#b-title-edit");
const bookAuthorEditInput = document.querySelector("#b-author-edit");
const bookISBNEditInput = document.querySelector("#b-isbn-edit");
const bookPagesEditInput = document.querySelector("#b-pages-edit");
const bookEditionEditInput = document.querySelector("#b-edition-edit");
const bookDateEditInput = document.querySelector("#b-publishing_date-edit");
const bookReadStatusEditInput = document.querySelector("#b-read_status-edit");

async function editBookLibrary() {
	const newBookUpdate = new Book({
		title: bookTitleEditInput.value.trim(),
		author: bookAuthorEditInput.value.trim(),
		isbn: bookISBNEditInput.value.trim(),
		pages: bookPagesEditInput.value.trim(),
		edition: bookEditionEditInput.value.trim(),
		publish_date: bookDateEditInput.value.trim(),
		is_read: bookReadStatusEditInput.value,
	});

	const bookID = document.querySelector("#edit-book-id").dataset.bookId;
	const fetchURLEdit = `/api/books/${bookID}`;
	const response = await fetch(fetchURLEdit, {
		method: "PUT",
		body: JSON.stringify(newBookUpdate),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		document
			.querySelector(".edit_book_section")
			.setAttribute("style", "display: none;");
		renderBooks();
	} else {
		alert("Failed to create new book.");
	}
}

const editBookFormBtn = document.querySelector(".edit-book");
editBookFormBtn.addEventListener("click", editBookLibrary);

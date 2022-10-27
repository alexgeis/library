async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

//ADD BOOK FUNCTION
async function addBookToLibrary() {
	const newBook = new Book(
		bookTitleForm.value,
		bookAuthorForm.value,
		bookPagesForm.value,
		bookLanguageForm.value,
		bookDateForm.value,
		bookReadStatusForm.value
	);
	// if ((bookReadStatusForm.value === true))
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
// 	console.log(themeToggle.checked);
// });

window.onload = () => {
	setCurrentTheme(DEFAULT_THEME);
	setCurrentBooks(currentBooks);
	renderBooks();
};

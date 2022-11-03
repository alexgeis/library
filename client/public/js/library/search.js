// SEARCH BAR
function renderSearch(search) {
	if (search === "") return;

	const allBooks = getData("/api/books");

	const filterBooks = [];
	for (let i = 0; i < allBooks.length; i++) {
		const book = allBooks[i];
		let lowerTitle = book.title.toLowerCase();
		let lowerSearch = search.toLowerCase();
		if (lowerTitle.includes(lowerSearch)) {
			filterBooks.push(book);
		}
	}

	setCurrentBooks(filterBooks);
	renderBooks();
}

const searchInput = document.querySelector("#book-search");
searchInput.addEventListener("keyup", (e) => {
	let currentVal = e.target.value; // "mow"
	renderSearch(currentVal);
	if (currentVal === "") renderBooks();
});

// SEARCH BAR
async function renderSearch(search) {
	if (search === "") renderBooks();

	const allBooksData = await fetch("/api/books");
	const allBooks = await allBooksData.json();

	const filterBooks = allBooks.filter((book) => {
		const lowerTitle = book.title.toLowerCase();
		const lowerSearch = search.toLowerCase();
		return lowerTitle.includes(lowerSearch);
	});

	// const filterBooks = [];
	// for (let i = 0; i < allBooks.length; i++) {
	// 	const book = allBooks[i];
	// 	let lowerTitle = book.title.toLowerCase();
	// 	let lowerSearch = search.toLowerCase();
	// 	if (lowerTitle.includes(lowerSearch)) {
	// 		filterBooks.push(book);
	// 	}
	// }

	setCurrentBooks(filterBooks);
	renderBooks(search);
}

const searchInput = document.querySelector("#book-search");
searchInput.addEventListener("keyup", (e) => {
	let currentVal = e.target.value;
	renderSearch(currentVal);
	if (currentVal === "") renderBooks();
});

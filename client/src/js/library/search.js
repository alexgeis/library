import { renderBooks } from "./renderBooks.js"

// SEARCH BAR
// async function renderSearch(search) {
// 	if (search === "") renderBooks();

// 	// const allBooksData = await fetch("/api/books");
// 	// console.log({ allBooksData });
// 	// const allBooks = await allBooksData.json();

// 	// const filterBooks = allBooks.filter((book) => {
// 	// 	const lowerTitle = book.title.toLowerCase();
// 	// 	const lowerSearch = search.toLowerCase();
// 	// 	return lowerTitle.includes(lowerSearch);
// 	// });

// 	// const filterBooks = [];
// 	// for (let i = 0; i < allBooks.length; i++) {
// 	// 	const book = allBooks[i];
// 	// 	let lowerTitle = book.title.toLowerCase();
// 	// 	let lowerSearch = search.toLowerCase();
// 	// 	if (lowerTitle.includes(lowerSearch)) {
// 	// 		filterBooks.push(book);
// 	// 	}
// 	// }

// 	// setCurrentBooks(filterBooks);
// 	renderBooks(search);
// }

const searchInput = document.querySelector("#book-search");
searchInput.addEventListener("keyup", (e) => {
	let currentVal = e.target.value;
	// renderSearch(currentVal);
	renderBooks(currentVal);
});
const searchInputHero = document.querySelector("#book-search-hero");
searchInputHero.addEventListener("keyup", (e) => {
	let currentVal = e.target.value;
	// renderSearch(currentVal);
	renderBooks(currentVal);
});

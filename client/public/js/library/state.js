/* IF USING LOCAL STORAGE AS DB */

//DEFAULTS
const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
const currentlyRead = savedBooks.filter((book) => book.readStatus === true);
const DEFAULT_BOOKS_READ = currentlyRead.length;
const DEFAULT_BOOKS_TOTAL = savedBooks.length;

//state variables
let currentBooks = savedBooks;
let currentBooksReadCount = DEFAULT_BOOKS_READ;
let currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
//state variable updates
function setCurrentBooks(newBooks) {
	currentBooks = newBooks;
}
function setBookReadTotals() {
	currentBooksReadCount = DEFAULT_BOOKS_READ;
	currentBooksTotalCount = DEFAULT_BOOKS_TOTAL;
}

import "./hamburgerMenu";
import "./logout";
import "../themeToggle";

// PROGRESS BAR
export const renderProgressBar = async () => {
	const currentBooksData = await fetch("/api/books");
	let currentBooks = await currentBooksData.json();

	const currentBooksReadCount = currentBooks.filter(
		(book) => book.is_read === true
	).length;
	const currentBooksTotalCount = currentBooks.length;
	// BOOK TOTALS DISPLAY
	const bookReadDisplay = document.querySelector(".books-read-display");
	bookReadDisplay.textContent = `Books read: ${currentBooksReadCount}`;

	const bookTotalDisplay = document.querySelector(".books-total-display");
	bookTotalDisplay.textContent = `Books total: ${currentBooksTotalCount}`;

	const bookReadDisplayHero = document.querySelector(
		".books-read-display-hero"
	);
	bookReadDisplayHero.textContent = `Books read: ${currentBooksReadCount}`;

	const bookTotalDisplayHero = document.querySelector(
		".books-total-display-hero"
	);
	bookTotalDisplayHero.textContent = `Books total: ${currentBooksTotalCount}`;

	// PROGRESS BAR DISPLAY
	const progressBar = document.querySelector(".progress-bar");
	const progressBarHero = document.querySelector(".progress-bar-hero");

	let progressWidth;
	if (currentBooksReadCount === 0 && currentBooksTotalCount === 0) {
		progressWidth = 0;
	} else {
		progressWidth = Math.floor(
			(currentBooksReadCount / currentBooksTotalCount) * 100
		);
	}

	progressBar.style.width = `${progressWidth}%`;
	progressBarHero.style.width = `${progressWidth}%`;
};

import "../../css/libraryStyle.css";
import { renderBooks } from "./renderBooks.js"
import { renderProgressBar } from "./heroDisplay.js"

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	// setCurrentBooks(currentBooks);
	renderProgressBar();
	renderBooks();
};

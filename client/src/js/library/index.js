import "../../css/libraryStyle.css";

import "./hamburgerMenu";
import "./logout";
import "./addBookForm";
import "./editBookForm";
import "./editUserForm";
import "../themeToggle";

//images


import { renderBooks } from "./renderBooks.js"
import { renderProgressBar } from "./heroDisplay.js"

window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	// setCurrentBooks(currentBooks);
	renderProgressBar();
	renderBooks();
};

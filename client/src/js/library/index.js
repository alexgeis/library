// STYLES
import "../../css/libraryStyle.css";

// JAVASCRIPT
import "./hamburgerMenu";
import "./logout";
import "./addBookForm";
import "./editBookForm";
import "./editUserForm";
import "../themeToggle";

//images
import magnifyBlackIcon from "../../assets/icons/magnify.svg";
document.querySelector("#search-icon").src = magnifyBlackIcon;
import magnifyWhiteIcon from "../../assets/icons/magnify-white.png";
document.querySelector("#search-icon-hero").src = magnifyWhiteIcon;
import openBookIcon from "../../assets/icons/book-open-page-variant-outline.svg";
document.querySelector("#site-logo").src = openBookIcon;
import plusWhiteIcon from "../../assets/icons/plus-white.png";
document.querySelector("#add-book-plus").src = plusWhiteIcon;

// pageload rendering
import { renderBooks } from "./renderBooks.js"
import { renderProgressBar } from "./heroDisplay.js"
window.onload = () => {
	// setCurrentTheme(DEFAULT_THEME);
	// setCurrentBooks(currentBooks);
	renderProgressBar();
	renderBooks();
};

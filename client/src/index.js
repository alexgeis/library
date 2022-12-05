import styles from "./css/homepageStyle.css";

import { loginUserHandler } from "./js/login/login.js"
const loginSubmitBtn = document.querySelector(".login-submit-btn");
loginSubmitBtn.addEventListener("submit", loginUserHandler);

import bookshelfIcon from "./assets/icons/book-open-page-variant-outline.svg"

document.querySelector("#lib-icon-home-page").src = bookshelfIcon;


// window.onload = () => {
// 	setCurrentTheme(DEFAULT_THEME);
// 	setCurrentBooks(currentBooks);
// 	renderBooks();
// };

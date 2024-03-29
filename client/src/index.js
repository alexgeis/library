import styles from "./css/homepageStyle.css";

import { loginUserHandler } from "./js/login/login";
const loginSubmitBtn = document.querySelector(".login-submit-btn");

loginSubmitBtn.addEventListener("click", loginUserHandler);

import bookshelfIcon from "./assets/icons/book-open-page-variant-outline.svg";

document.querySelector("#lib-icon-home-page").src = bookshelfIcon;

import openBookLightIcon from "../assets/icons/book-open-page-variant-outline_light.svg"
import openBookDarkIcon from "../assets/icons/book-open-page-variant-outline.svg"
import faviconLightIcon from "../assets/icons/favicon_light.ico"
import faviconDarkIcon from "../assets/icons/favicon.ico"

const DEFAULT_THEME = localStorage.getItem("theme") || "light";
let currentTheme = DEFAULT_THEME;

const headerEl = document.querySelector("#header-container");
const heroEl = document.querySelector("#hero-container");
const bookSectionEl = document.querySelector("#book-container");
const addBookFormEl = document.querySelector(".add_book_section");
const faviconEl = document.querySelector("#favicon");
const siteLogoEl = document.querySelector("#site-logo");
const themeToggle = document.querySelector("#theme-toggle");

export function setCurrentTheme(newTheme) {
	currentTheme = newTheme;
	if (currentTheme === "dark") {
		headerEl.classList.add("dark");
		heroEl.classList.add("dark");
		bookSectionEl.classList.add("dark");
		addBookFormEl.classList.add("dark");
		faviconEl.setAttribute("href", faviconLightIcon);
		siteLogoEl.setAttribute(
			"src",
			openBookLightIcon
		);
		themeToggle.checked = true;
	}
}

themeToggle.addEventListener("click", function (event) {
	let element = event.target;
	if (element.checked) {
		headerEl.classList.toggle("dark");
		heroEl.classList.toggle("dark");
		bookSectionEl.classList.toggle("dark");
		addBookFormEl.classList.toggle("dark");
		faviconEl.setAttribute("href", faviconLightIcon);
		siteLogoEl.setAttribute(
			"src",
			openBookLightIcon
		);
		setCurrentTheme("dark");
		localStorage.setItem("theme", "dark");
	} else {
		headerEl.classList.toggle("dark");
		heroEl.classList.toggle("dark");
		bookSectionEl.classList.toggle("dark");
		addBookFormEl.classList.toggle("dark");
		faviconEl.setAttribute("href", faviconDarkIcon);
		siteLogoEl.setAttribute(
			"src",
			openBookDarkIcon
		);
		setCurrentTheme("light");
		localStorage.setItem("theme", "light");
	}
});

(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["themeToggle"],{

/***/ "./src/js/themeToggle.js":
/*!*******************************!*\
  !*** ./src/js/themeToggle.js ***!
  \*******************************/
/***/ (() => {

const DEFAULT_THEME = localStorage.getItem("theme") || "light";
let currentTheme = DEFAULT_THEME;
const headerEl = document.querySelector("#header-container");
const heroEl = document.querySelector("#hero-container");
const bookSectionEl = document.querySelector("#book-container");
const addBookFormEl = document.querySelector(".add_book_section");
const faviconEl = document.querySelector("#favicon");
const siteLogoEl = document.querySelector("#site-logo");
const themeToggle = document.querySelector("#theme-toggle");
function setCurrentTheme(newTheme) {
  currentTheme = newTheme;
  if (currentTheme === "dark") {
    headerEl.classList.add("dark");
    heroEl.classList.add("dark");
    bookSectionEl.classList.add("dark");
    addBookFormEl.classList.add("dark");
    faviconEl.setAttribute("href", "../assets/icons/favicon_light.ico");
    siteLogoEl.setAttribute("src", "../assets/icons/book-open-page-variant-outline_light.svg");
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
    faviconEl.setAttribute("href", "../assets/icons/favicon_light.ico");
    siteLogoEl.setAttribute("src", "./assets/icons/book-open-page-variant-outline_light.svg");
    setCurrentTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    headerEl.classList.toggle("dark");
    heroEl.classList.toggle("dark");
    bookSectionEl.classList.toggle("dark");
    addBookFormEl.classList.toggle("dark");
    faviconEl.setAttribute("href", "../assets/icons/favicon.ico");
    siteLogoEl.setAttribute("src", "../assets/icons/book-open-page-variant-outline.svg");
    setCurrentTheme("light");
    localStorage.setItem("theme", "light");
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/themeToggle.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUN4QlosWUFBWSxDQUFDdUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7RUFDdkM7QUFDRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvdGhlbWVUb2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG5cbmNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXItY29udGFpbmVyXCIpO1xuY29uc3QgaGVyb0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWNvbnRhaW5lclwiKTtcbmNvbnN0IGJvb2tTZWN0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stY29udGFpbmVyXCIpO1xuY29uc3QgYWRkQm9va0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX2Jvb2tfc2VjdGlvblwiKTtcbmNvbnN0IGZhdmljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2aWNvblwiKTtcbmNvbnN0IHNpdGVMb2dvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nb1wiKTtcbmNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZS10b2dnbGVcIik7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUaGVtZShuZXdUaGVtZSkge1xuXHRjdXJyZW50VGhlbWUgPSBuZXdUaGVtZTtcblx0aWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcblx0XHRoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcblx0XHRoZXJvRWwuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG5cdFx0Ym9va1NlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcblx0XHRhZGRCb29rRm9ybUVsLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuXHRcdGZhdmljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiLi4vYXNzZXRzL2ljb25zL2Zhdmljb25fbGlnaHQuaWNvXCIpO1xuXHRcdHNpdGVMb2dvRWwuc2V0QXR0cmlidXRlKFxuXHRcdFx0XCJzcmNcIixcblx0XHRcdFwiLi4vYXNzZXRzL2ljb25zL2Jvb2stb3Blbi1wYWdlLXZhcmlhbnQtb3V0bGluZV9saWdodC5zdmdcIlxuXHRcdCk7XG5cdFx0dGhlbWVUb2dnbGUuY2hlY2tlZCA9IHRydWU7XG5cdH1cbn1cblxudGhlbWVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0aWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuXHRcdGhlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGhlcm9FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRib29rU2VjdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGFkZEJvb2tGb3JtRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0ZmF2aWNvbkVsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9hc3NldHMvaWNvbnMvZmF2aWNvbl9saWdodC5pY29cIik7XG5cdFx0c2l0ZUxvZ29FbC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcInNyY1wiLFxuXHRcdFx0XCIuL2Fzc2V0cy9pY29ucy9ib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmVfbGlnaHQuc3ZnXCJcblx0XHQpO1xuXHRcdHNldEN1cnJlbnRUaGVtZShcImRhcmtcIik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG5cdH0gZWxzZSB7XG5cdFx0aGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0aGVyb0VsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGJvb2tTZWN0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0YWRkQm9va0Zvcm1FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRmYXZpY29uRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4uL2Fzc2V0cy9pY29ucy9mYXZpY29uLmljb1wiKTtcblx0XHRzaXRlTG9nb0VsLnNldEF0dHJpYnV0ZShcblx0XHRcdFwic3JjXCIsXG5cdFx0XHRcIi4uL2Fzc2V0cy9pY29ucy9ib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmUuc3ZnXCJcblx0XHQpO1xuXHRcdHNldEN1cnJlbnRUaGVtZShcImxpZ2h0XCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcblx0fVxufSk7XG4iXSwibmFtZXMiOlsiREVGQVVMVF9USEVNRSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjdXJyZW50VGhlbWUiLCJoZWFkZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlcm9FbCIsImJvb2tTZWN0aW9uRWwiLCJhZGRCb29rRm9ybUVsIiwiZmF2aWNvbkVsIiwic2l0ZUxvZ29FbCIsInRoZW1lVG9nZ2xlIiwic2V0Q3VycmVudFRoZW1lIiwibmV3VGhlbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZWxlbWVudCIsInRhcmdldCIsInRvZ2dsZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
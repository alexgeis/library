(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["addBookForm"],{

/***/ "./src/js/library/addBookForm.js":
/*!***************************************!*\
  !*** ./src/js/library/addBookForm.js ***!
  \***************************************/
/***/ (() => {

const addBookSection = document.querySelector(".add_book_section");
function renderAddBookForm() {
  addBookSection.setAttribute("style", "display: block;");
}
const addBookBtn = document.querySelector(".add-book-form-open");
addBookBtn.addEventListener("click", renderAddBookForm);

// CLEAR BOOK FORM
function clearNewBookForm() {
  const bookInputs = document.querySelectorAll(".book-form-control");
  for (const input of bookInputs) {
    if (input.tagName.toLowerCase() === "select") input.options.selectedIndex = 0;else input.value = "";
  }
}
const clearNewBookFormBtn = document.querySelector("#clear-new-book-form");
clearNewBookFormBtn.addEventListener("click", clearNewBookForm);
// CLOSE BOOK FORM
function closeNewBookForm() {
  addBookSection.setAttribute("style", "display: none;");
}
const closeNewBookFormBtn = document.querySelector("#close-new-book-form");
closeNewBookFormBtn.addEventListener("click", closeNewBookForm);

//ADD BOOK FUNCTION
const bookTitleInput = document.querySelector("#b-title-new");
const bookAuthorInput = document.querySelector("#b-author-new");
const bookISBNInput = document.querySelector("#b-isbn-new");
const bookPagesInput = document.querySelector("#b-pages-new");
const bookEditionInput = document.querySelector("#b-edition-new");
const bookDateInput = document.querySelector("#b-publishing_date-new");
const bookReadStatusInput = document.querySelector("#b-read_status-new");
async function addBookToLibrary() {
  const newBook = new Book({
    title: bookTitleInput.value.trim(),
    author: bookAuthorInput.value.trim(),
    isbn: bookISBNInput.value.trim(),
    pages: bookPagesInput.value.trim(),
    edition: bookEditionInput.value.trim(),
    publish_date: bookDateInput.value.trim(),
    is_read: bookReadStatusInput.value.trim()
  });
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify(newBook),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    addBookSection.setAttribute("style", "display: none;");
    renderBooks();
  } else {
    alert("Failed to create new book.");
  }
}

// // NEW BOOK FORM
// const newBookForm = document.querySelector(".new-book-form");
// newBookForm.addEventListener("submit", addBookToLibrary);
const addBookFormBtn = document.querySelector(".add-book");
addBookFormBtn.addEventListener("click", addBookToLibrary);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/addBookForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNmLE9BQU8sQ0FBQztJQUM3QmdCLE9BQU8sRUFBRTtNQUFFLGNBQWMsRUFBRTtJQUFtQjtFQUMvQyxDQUFDLENBQUM7RUFDRixJQUFJTixRQUFRLENBQUNPLEVBQUUsRUFBRTtJQUNoQjVDLGNBQWMsQ0FBQ0ksWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN0RHlDLFdBQVcsRUFBRTtFQUNkLENBQUMsTUFBTTtJQUNOQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7RUFDcEM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxjQUFjLEdBQUc5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDMUQ2QyxjQUFjLENBQUN6QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVvQixnQkFBZ0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2FkZEJvb2tGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZEJvb2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfYm9va19zZWN0aW9uXCIpO1xuZnVuY3Rpb24gcmVuZGVyQWRkQm9va0Zvcm0oKSB7XG5cdGFkZEJvb2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJvb2stZm9ybS1vcGVuXCIpO1xuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkQm9va0Zvcm0pO1xuXG4vLyBDTEVBUiBCT09LIEZPUk1cbmZ1bmN0aW9uIGNsZWFyTmV3Qm9va0Zvcm0oKSB7XG5cdGNvbnN0IGJvb2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvb2stZm9ybS1jb250cm9sXCIpO1xuXHRmb3IgKGNvbnN0IGlucHV0IG9mIGJvb2tJbnB1dHMpIHtcblx0XHRpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKVxuXHRcdFx0aW5wdXQub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gMDtcblx0XHRlbHNlIGlucHV0LnZhbHVlID0gXCJcIjtcblx0fVxufVxuY29uc3QgY2xlYXJOZXdCb29rRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItbmV3LWJvb2stZm9ybVwiKTtcbmNsZWFyTmV3Qm9va0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyTmV3Qm9va0Zvcm0pO1xuLy8gQ0xPU0UgQk9PSyBGT1JNXG5mdW5jdGlvbiBjbG9zZU5ld0Jvb2tGb3JtKCkge1xuXHRhZGRCb29rU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xufVxuY29uc3QgY2xvc2VOZXdCb29rRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbmV3LWJvb2stZm9ybVwiKTtcbmNsb3NlTmV3Qm9va0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTmV3Qm9va0Zvcm0pO1xuXG4vL0FERCBCT09LIEZVTkNUSU9OXG5jb25zdCBib29rVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi10aXRsZS1uZXdcIik7XG5jb25zdCBib29rQXV0aG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItYXV0aG9yLW5ld1wiKTtcbmNvbnN0IGJvb2tJU0JOSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItaXNibi1uZXdcIik7XG5jb25zdCBib29rUGFnZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wYWdlcy1uZXdcIik7XG5jb25zdCBib29rRWRpdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWVkaXRpb24tbmV3XCIpO1xuY29uc3QgYm9va0RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wdWJsaXNoaW5nX2RhdGUtbmV3XCIpO1xuY29uc3QgYm9va1JlYWRTdGF0dXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1yZWFkX3N0YXR1cy1uZXdcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkoKSB7XG5cdGNvbnN0IG5ld0Jvb2sgPSBuZXcgQm9vayh7XG5cdFx0dGl0bGU6IGJvb2tUaXRsZUlucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRhdXRob3I6IGJvb2tBdXRob3JJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0aXNibjogYm9va0lTQk5JbnB1dC52YWx1ZS50cmltKCksXG5cdFx0cGFnZXM6IGJvb2tQYWdlc0lucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRlZGl0aW9uOiBib29rRWRpdGlvbklucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRwdWJsaXNoX2RhdGU6IGJvb2tEYXRlSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGlzX3JlYWQ6IGJvb2tSZWFkU3RhdHVzSW5wdXQudmFsdWUudHJpbSgpLFxuXHR9KTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ib29rc1wiLCB7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdCb29rKSxcblx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdH0pO1xuXHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRhZGRCb29rU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuXHRcdHJlbmRlckJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0YWxlcnQoXCJGYWlsZWQgdG8gY3JlYXRlIG5ldyBib29rLlwiKTtcblx0fVxufVxuXG4vLyAvLyBORVcgQk9PSyBGT1JNXG4vLyBjb25zdCBuZXdCb29rRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWJvb2stZm9ybVwiKTtcbi8vIG5ld0Jvb2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkQm9va1RvTGlicmFyeSk7XG5jb25zdCBhZGRCb29rRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJvb2tcIik7XG5hZGRCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQm9va1RvTGlicmFyeSk7XG4iXSwibmFtZXMiOlsiYWRkQm9va1NlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXJBZGRCb29rRm9ybSIsInNldEF0dHJpYnV0ZSIsImFkZEJvb2tCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJOZXdCb29rRm9ybSIsImJvb2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiY2xlYXJOZXdCb29rRm9ybUJ0biIsImNsb3NlTmV3Qm9va0Zvcm0iLCJjbG9zZU5ld0Jvb2tGb3JtQnRuIiwiYm9va1RpdGxlSW5wdXQiLCJib29rQXV0aG9ySW5wdXQiLCJib29rSVNCTklucHV0IiwiYm9va1BhZ2VzSW5wdXQiLCJib29rRWRpdGlvbklucHV0IiwiYm9va0RhdGVJbnB1dCIsImJvb2tSZWFkU3RhdHVzSW5wdXQiLCJhZGRCb29rVG9MaWJyYXJ5IiwibmV3Qm9vayIsIkJvb2siLCJ0aXRsZSIsInRyaW0iLCJhdXRob3IiLCJpc2JuIiwicGFnZXMiLCJlZGl0aW9uIiwicHVibGlzaF9kYXRlIiwiaXNfcmVhZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsInJlbmRlckJvb2tzIiwiYWxlcnQiLCJhZGRCb29rRm9ybUJ0biJdLCJzb3VyY2VSb290IjoiIn0=
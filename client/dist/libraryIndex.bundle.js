(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["libraryIndex"],{

/***/ "./src/js/library/addBookForm.js":
/*!***************************************!*\
  !*** ./src/js/library/addBookForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookClass.js */ "./src/js/library/bookClass.js");

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
  const newBook = new _bookClass_js__WEBPACK_IMPORTED_MODULE_0__.Book({
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

/***/ }),

/***/ "./src/js/library/bookClass.js":
/*!*************************************!*\
  !*** ./src/js/library/bookClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
//BOOK CONSTRUCTOR
const Book = function (_ref) {
  let {
    title,
    author,
    isbn,
    pages,
    edition,
    publish_date,
    is_read
  } = _ref;
  return {
    title,
    author,
    isbn,
    pages,
    edition,
    publish_date,
    is_read
    // insertion_date: new Date().toLocaleString(),
  };
};

// CLASS VERSION //
// class Book {
// 	constructor(title, author, pages, language, publishDate, readStatus) {
// 		this.title = title;
// 		this.author = author;
// 		this.pages = pages;
// 		this.language = language;
// 		this.publishDate = publishDate;
// 		this.readStatus = readStatus;
// 		this.insertion_date = new Date().toLocaleString();
// 	}
// }

/***/ }),

/***/ "./src/js/library/editBookForm.js":
/*!****************************************!*\
  !*** ./src/js/library/editBookForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookClass */ "./src/js/library/bookClass.js");


// const renderEditFormBtn = document.querySelector(".edit-book-form-open");
// renderEditFormBtn.addEventListener("click", async function (event) {
// 	// SHOW EDIT FORM
// 	document
// 		.querySelector(".edit_book_section")
// 		.setAttribute("style", "display: block;");

// 	let bookCardChildren = Array.from(event.target.parentElement.childNodes);

// 	let existingBookInfo = {
// 		title: bookCardChildren[2].value,
// 		author: bookCardChildren[3].value,
// 		isbn: bookCardChildren[4].value,
// 		pages: bookCardChildren[5].value,
// 		edition: bookCardChildren[6].value,
// 		publish_date: bookCardChildren[7].value,
// 		is_read: bookCardChildren[9].firstChild.checked,
// 	};

// 	// POPULATE INPUTS WITH DEFAULT CONTENT
// 	document.querySelector("#b-title-edit").textContent = existingBookInfo.title;
// 	document.querySelector("#b-author-edit").textContent =
// 		existingBookInfo.author;
// 	document.querySelector("#b-isbn-edit").textContent = existingBookInfo.isbn;
// 	document.querySelector("#b-pages-edit").textContent = existingBookInfo.pages;
// 	document.querySelector("#b-edition-edit").textContent =
// 		existingBookInfo.edition;
// 	document.querySelector("#b-publishing_date-edit").textContent =
// 		existingBookInfo.publish_date;
// 	document.querySelector("#b-read_status-edit").textContent =
// 		existingBookInfo.is_read;
// });

// CLEAR EDIT BOOK FORM
function clearEditBookForm() {
  const bookInputs = document.querySelectorAll(".book-form-control");
  for (const input of bookInputs) {
    if (input.tagName.toLowerCase() === "select") input.options.selectedIndex = 0;else input.value = "";
  }
}
const clearEditBookFormBtn = document.querySelector("#clear-edit-book-form");
clearEditBookFormBtn.addEventListener("click", clearEditBookForm);
// CLOSE EDIT BOOK FORM

function closeEditBookForm() {
  document.querySelector(".edit_book_section").setAttribute("style", "display: none;");
}
const closeEditBookFormBtn = document.querySelector("#close-edit-book-form");
closeEditBookFormBtn.addEventListener("click", closeEditBookForm);

// EDIT BOOK FUNCTION
const bookTitleEditInput = document.querySelector("#b-title-edit");
const bookAuthorEditInput = document.querySelector("#b-author-edit");
const bookISBNEditInput = document.querySelector("#b-isbn-edit");
const bookPagesEditInput = document.querySelector("#b-pages-edit");
const bookEditionEditInput = document.querySelector("#b-edition-edit");
const bookDateEditInput = document.querySelector("#b-publishing_date-edit");
const bookReadStatusEditInput = document.querySelector("#b-read_status-edit");
async function editBookLibrary() {
  const newBookUpdate = new _bookClass__WEBPACK_IMPORTED_MODULE_0__.Book({
    title: bookTitleEditInput.value.trim(),
    author: bookAuthorEditInput.value.trim(),
    isbn: bookISBNEditInput.value.trim(),
    pages: bookPagesEditInput.value.trim(),
    edition: bookEditionEditInput.value.trim(),
    publish_date: bookDateEditInput.value.trim(),
    is_read: bookReadStatusEditInput.value
  });
  const bookID = document.querySelector("#edit-book-id").dataset.bookId;
  const fetchURLEdit = `/api/books/${bookID}`;
  const response = await fetch(fetchURLEdit, {
    method: "PUT",
    body: JSON.stringify(newBookUpdate),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    document.querySelector(".edit_book_section").setAttribute("style", "display: none;");
    renderBooks();
  } else {
    alert("Failed to create new book.");
  }
}
const editBookFormBtn = document.querySelector(".edit-book");
editBookFormBtn.addEventListener("click", editBookLibrary);

/***/ }),

/***/ "./src/js/library/editUserForm.js":
/*!****************************************!*\
  !*** ./src/js/library/editUserForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userClass */ "./src/js/library/userClass.js");

const usernameInput = document.querySelector("#username-edit");
const emailInput = document.querySelector("#email-edit");
const passwordInput = document.querySelector("#password-edit");
const editUserSection = document.querySelector(".edit_user_section");
let existingUserDataGlobal;
async function renderEditUserForm() {
  const responseUserData = await fetch("/api/users/user/ID");
  const responseUser = await responseUserData.json();
  let existingUserData = {
    email: responseUser.email,
    username: responseUser.username
  };
  usernameInput.value = existingUserData.username;
  emailInput.value = existingUserData.email;
  existingUserDataGlobal = existingUserData;
  editUserSection.setAttribute("style", "display: block;");
}
const settingsBtn = document.querySelector("#settings");
settingsBtn.addEventListener("click", renderEditUserForm);

// CLEAR EDIT USER FORM
function clearEditUserForm() {
  const userInputs = document.querySelectorAll(".user-form-control");
  for (const input of userInputs) {
    input.value = "";
  }
}
const clearEditUserFormBtn = document.querySelector("#clear-edit-user-form");
clearEditUserFormBtn.addEventListener("click", clearEditUserForm);

// CLOSE EDIT BOOK FORM
function closeEditUserForm() {
  document.querySelector(".edit_user_section").setAttribute("style", "display: none;");
}
const closeEditUserFormBtn = document.querySelector("#close-edit-user-form");
closeEditUserFormBtn.addEventListener("click", closeEditUserForm);

// EDIT USER FUNCTION
async function editUser() {
  const existingErrMsg = document.querySelector(".existing-err-msg");
  existingErrMsg.style.visibility = "hidden";
  const newUserUpdate = new _userClass__WEBPACK_IMPORTED_MODULE_0__.User({
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value
  });

  // if (existingUserDataGlobal.email === newUserUpdate.email)
  // 	delete newUserUpdate.email;
  // if (existingUserDataGlobal.username === newUserUpdate.username)
  // 	delete newUserUpdate.username;
  if (newUserUpdate.password.trim() === "") delete newUserUpdate.password;else if (newUserUpdate.password.length < 8) {
    existingErrMsg.style.visibility = "visible";
    existingErrMsg.textContent = "New password must be at least 8 characters";
    return;
  }
  const existingUserData = await fetch("/api/users/existing", {
    method: "POST",
    body: JSON.stringify(newUserUpdate),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const existingUserResponse = await existingUserData.json();
  if (existingUserResponse.existingEmail && existingUserResponse.existingUsername) {
    existingErrMsg.style.visibility = "visible";
    existingErrMsg.textContent = "Username and email are both already taken";
  } else if (existingUserResponse.existingEmail && !existingUserResponse.existingUsername) {
    existingErrMsg.style.visibility = "visible";
    existingErrMsg.textContent = "Email is already taken";
  } else if (!existingUserResponse.existingEmail && existingUserResponse.existingUsername) {
    existingErrMsg.style.visibility = "visible";
    existingErrMsg.textContent = "Username is already taken";
  }
  const responseUserData = await fetch("/api/users/user/ID");
  const responseUser = await responseUserData.json();
  let userId = {
    id: responseUser.id
  };
  const fetchURLEdit = `/api/users/${userId.id}`;
  const response = await fetch(fetchURLEdit, {
    method: "PUT",
    body: JSON.stringify(newUserUpdate),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    document.querySelector(".edit_user_section").setAttribute("style", "display: none;");
    renderBooks();
  } else {
    alert("Failed to update user.");
  }
}
const editUserFormBtn = document.querySelector(".edit-user");
editUserFormBtn.addEventListener("click", editUser);

/***/ }),

/***/ "./src/js/library/fetchBookInfo.js":
/*!*****************************************!*\
  !*** ./src/js/library/fetchBookInfo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBookInfo": () => (/* binding */ fetchBookInfo)
/* harmony export */ });
const fetchBookInfo = async query => {
  const libUrlAPI = "http://openlibrary.org/search.json?q=";
  const cleanQueryStr = query.split(" ").join("+");
  const libAPIQueryStr = libUrlAPI + cleanQueryStr;
  const responseLibraryData = await fetch(libAPIQueryStr);
  const responseLibrary = await responseLibraryData.json();
  console.log(responseLibrary);
  return responseLibrary;
};
fetchBookInfo("lord of the rings");

/***/ }),

/***/ "./src/js/library/hamburgerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/library/hamburgerMenu.js ***!
  \*****************************************/
/***/ (() => {

//hamburger mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/***/ }),

/***/ "./src/js/library/heroDisplay.js":
/*!***************************************!*\
  !*** ./src/js/library/heroDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProgressBar": () => (/* binding */ renderProgressBar)
/* harmony export */ });
// PROGRESS BAR
const renderProgressBar = async () => {
  const currentBooksData = await fetch("/api/books");
  let currentBooks = await currentBooksData.json();
  const currentBooksReadCount = currentBooks.filter(book => book.is_read === true).length;
  const currentBooksTotalCount = currentBooks.length;
  // BOOK TOTALS DISPLAY
  const bookReadDisplay = document.querySelector(".books-read-display");
  bookReadDisplay.textContent = `Books read: ${currentBooksReadCount}`;
  const bookTotalDisplay = document.querySelector(".books-total-display");
  bookTotalDisplay.textContent = `Books total: ${currentBooksTotalCount}`;
  const bookReadDisplayHero = document.querySelector(".books-read-display-hero");
  bookReadDisplayHero.textContent = `Books read: ${currentBooksReadCount}`;
  const bookTotalDisplayHero = document.querySelector(".books-total-display-hero");
  bookTotalDisplayHero.textContent = `Books total: ${currentBooksTotalCount}`;

  // PROGRESS BAR DISPLAY
  const progressBar = document.querySelector(".progress-bar");
  const progressBarHero = document.querySelector(".progress-bar-hero");
  let progressWidth;
  if (currentBooksReadCount === 0 && currentBooksTotalCount === 0) {
    progressWidth = 0;
  } else {
    progressWidth = Math.floor(currentBooksReadCount / currentBooksTotalCount * 100);
  }
  progressBar.style.width = `${progressWidth}%`;
  progressBarHero.style.width = `${progressWidth}%`;
};

/***/ }),

/***/ "./src/js/library/index.js":
/*!*********************************!*\
  !*** ./src/js/library/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_libraryStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/libraryStyle.css */ "./src/css/libraryStyle.css");
/* harmony import */ var _hamburgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburgerMenu */ "./src/js/library/hamburgerMenu.js");
/* harmony import */ var _hamburgerMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hamburgerMenu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout */ "./src/js/library/logout.js");
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addBookForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addBookForm */ "./src/js/library/addBookForm.js");
/* harmony import */ var _editBookForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editBookForm */ "./src/js/library/editBookForm.js");
/* harmony import */ var _editUserForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editUserForm */ "./src/js/library/editUserForm.js");
/* harmony import */ var _themeToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themeToggle */ "./src/js/themeToggle.js");
/* harmony import */ var _renderBooks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderBooks.js */ "./src/js/library/renderBooks.js");
/* harmony import */ var _heroDisplay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heroDisplay.js */ "./src/js/library/heroDisplay.js");








//images



window.onload = () => {
  // setCurrentTheme(DEFAULT_THEME);
  // setCurrentBooks(currentBooks);
  (0,_heroDisplay_js__WEBPACK_IMPORTED_MODULE_8__.renderProgressBar)();
  (0,_renderBooks_js__WEBPACK_IMPORTED_MODULE_7__.renderBooks)();
};

/***/ }),

/***/ "./src/js/library/logout.js":
/*!**********************************!*\
  !*** ./src/js/library/logout.js ***!
  \**********************************/
/***/ (() => {

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};
document.querySelector("#logout").addEventListener("click", logout);

/***/ }),

/***/ "./src/js/library/renderBooks.js":
/*!***************************************!*\
  !*** ./src/js/library/renderBooks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBooks": () => (/* binding */ renderBooks)
/* harmony export */ });
/* harmony import */ var _fetchBookInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchBookInfo.js */ "./src/js/library/fetchBookInfo.js");

const renderBooks = async function () {
  let searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  const bookContainer = document.querySelector(".book-card-container");
  bookContainer.innerHTML = "";
  const currentBooksData = await fetch("/api/books");
  let currentBooks = await currentBooksData.json();
  const lowerSearchTerm = searchTerm.toLowerCase();
  if (lowerSearchTerm !== "" && typeof lowerSearchTerm === "string") {
    const filteredCurrentBooks = currentBooks.filter(book => {
      return book.title.toLowerCase().includes(lowerSearchTerm) || book.author.toLowerCase().includes(lowerSearchTerm);
    });
    currentBooks = filteredCurrentBooks;
  }
  for (let i = 0; i < currentBooks.length; i++) {
    const book = currentBooks[i];
    const bookCard = document.createElement("div");
    if (book.is_read === true || book.is_read === "true") {
      bookCard.classList.add("read");
    } else if (book.is_read === false) bookCard.classList.add("not-read");
    bookCard.classList.add("single-book", "scale-in-center");
    bookCard.setAttribute("id", "book-" + i);
    bookCard.setAttribute("data-index", i);

    // CLOSE AND DELETE
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("material-icons", "remove-book");
    closeBtn.textContent = " close ";
    closeBtn.addEventListener("click", async function () {
      const fetchURL = `/api/books/${book.id}`;
      const response = await fetch(fetchURL, {
        method: "DELETE"
      });
      if (response.ok) {
        renderProgressBar();
        renderBooks();
      } else {
        alert("Failed to delete book.");
      }
    });
    // EDIT BUTTON
    const editBtn = document.createElement("span");
    editBtn.classList.add("material-icons", "edit-book-form-open");
    editBtn.textContent = " edit ";
    editBtn.addEventListener("click", async function (event) {
      // SHOW EDIT FORM
      document.querySelector(".edit_book_section").setAttribute("style", "display: block;");
      let bookCardChildren = Array.from(event.target.parentElement.childNodes);
      let existingBookInfo = {
        title: bookCardChildren[2].textContent,
        author: bookCardChildren[3].textContent.split(" ").slice(1).join(" "),
        isbn: bookCardChildren[4].textContent.split(" ")[1],
        pages: bookCardChildren[5].textContent.split(" ")[3],
        edition: bookCardChildren[6].textContent.split(" ")[1],
        publish_date: bookCardChildren[7].textContent.split(" ")[1],
        is_read: bookCardChildren[9].firstChild.checked,
        book_id: book.id
      };

      // POPULATE INPUTS WITH DEFAULT CONTENT
      document.querySelector("#b-title-edit").value = existingBookInfo.title;
      document.querySelector("#b-author-edit").value = existingBookInfo.author;
      document.querySelector("#b-isbn-edit").value = existingBookInfo.isbn;
      document.querySelector("#b-pages-edit").value = existingBookInfo.pages;
      document.querySelector("#b-edition-edit").value = existingBookInfo.edition;
      document.querySelector("#b-publishing_date-edit").value = existingBookInfo.publish_date;
      document.querySelector("#b-read_status-edit").value = existingBookInfo.is_read;
      document.querySelector("#edit-book-id").dataset.bookId = existingBookInfo.book_id;
    });
    // BOOK COVER IMG
    const bookCoverImg = document.createElement("img");
    bookCoverImg.classList.add("book-cover-img");
    bookCoverImg.setAttribute("src", "../assets/img/book-cover-placeholder.jpeg");
    bookCoverImg.setAttribute("alt", "book cover image");
    //
    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
    //
    const bookAuthor = document.createElement("span");
    bookAuthor.classList.add("book-author");
    const labelAuthor = document.createElement("span");
    labelAuthor.classList.add("b-label");
    labelAuthor.textContent = "By: ";
    const authorDisplay = document.createElement("span");
    authorDisplay.classList.add("author");
    authorDisplay.textContent = book.author;
    bookAuthor.append(labelAuthor, authorDisplay);
    //
    const bookIsbn = document.createElement("span");
    bookIsbn.classList.add("book-isbn");
    const labelIsbn = document.createElement("span");
    labelIsbn.classList.add("b-label");
    labelIsbn.textContent = "ISBN: ";
    const isbnDisplay = document.createElement("span");
    isbnDisplay.classList.add("isbn");
    isbnDisplay.textContent = book.isbn;
    bookIsbn.append(labelIsbn, isbnDisplay);
    //
    const pagesCount = document.createElement("span");
    pagesCount.classList.add("pages-count");
    const labelPages = document.createElement("span");
    labelPages.classList.add("b-label");
    labelPages.textContent = "Pages: ";
    const bookPages = document.createElement("span");
    bookPages.classList.add("pages");
    bookPages.textContent = book.pages;
    pagesCount.append(labelPages, bookPages);
    //
    const bookEdition = document.createElement("span");
    bookEdition.classList.add("book-edition");
    const labelEdition = document.createElement("span");
    labelEdition.classList.add("b-label");
    labelEdition.textContent = "Edition: ";
    const editionDisplay = document.createElement("span");
    editionDisplay.classList.add("edition");
    editionDisplay.textContent = book.edition;
    bookEdition.append(labelEdition, editionDisplay);
    //
    const publishDate = document.createElement("span");
    publishDate.classList.add("book-published");
    const labelDate = document.createElement("span");
    labelDate.classList.add("b-label");
    labelDate.textContent = "Published: ";
    const dateDisplay = document.createElement("span");
    dateDisplay.classList.add("publish-date");
    dateDisplay.textContent = book.publish_date;
    publishDate.append(labelDate, dateDisplay);
    // FETCH BUTTON

    const fetchBtn = document.createElement("span");
    fetchBtn.classList.add("material-icons", "fetch-book-data-button");
    fetchBtn.textContent = " fetch info ";
    fetchBtn.addEventListener("click", async function (event) {
      const bookDataResponse = await (0,_fetchBookInfo_js__WEBPACK_IMPORTED_MODULE_0__.fetchBookInfo)(book.title.toLowerCase().trim());
      const bookData = bookDataResponse.docs[0];
      const fetchedBookData = {
        title: bookData.title,
        author: bookData.author_name[0],
        isbn: bookData.isbn[0],
        publish_date: bookData.first_publish_year,
        cover_img_src: `https://covers.openlibrary.org/b/isbn/${bookData.isbn[0]}-M.jpg`
      };
      const replaceBookData = _ref => {
        let {
          title,
          author,
          isbn,
          publish_date,
          cover_img_src
        } = _ref;
        bookTitle.textContent = title;
        bookAuthor.textContent = author;
        bookIsbn.textContent = isbn;
        publishDate.textContent = publish_date;
        bookCoverImg.setAttribute("src", cover_img_src);
      };
      replaceBookData(fetchedBookData);
    });
    // READ TOGGLE
    const readToggleLabel = document.createElement("span");
    readToggleLabel.classList.add("read_toggle_label");
    readToggleLabel.textContent = "Mark as read: ";
    //
    const toggleControlLabel = document.createElement("label");
    toggleControlLabel.classList.add("switch");
    const toggleControlCheckbox = document.createElement("input");
    toggleControlCheckbox.setAttribute("type", "checkbox");
    toggleControlCheckbox.classList.add("read_toggle");
    // if (book.is_read===true) toggleControlCheckbox.setAttribute("checked", "");
    if (book.is_read === true || book.is_read === "true") toggleControlCheckbox.checked = true;
    // if (bookReadStatusForm.value === true) toggleControlCheckbox.checked = true;
    const toggleControlSpan = document.createElement("span");
    toggleControlSpan.classList.add("read-toggle-slider", "round");
    toggleControlLabel.append(toggleControlCheckbox, toggleControlSpan);
    //

    toggleControlCheckbox.addEventListener("click", async function (event) {
      let element = event.target;
      let bookContainer = element.parentElement.parentElement;
      if (bookContainer.classList.contains("not-read")) {
        bookContainer.classList.remove("not-read");
        bookContainer.classList.add("read");
      } else if (bookContainer.classList.contains("read")) {
        bookContainer.classList.remove("read");
        bookContainer.classList.add("not-read");
      }
      let index = bookContainer.getAttribute("data-index");
      currentBooks[index].is_read = element.checked;
      const newReadStatusData = {
        is_read: currentBooks[index].is_read
      };
      const fetchURL = `/api/books/${book.id}`;
      const response = await fetch(fetchURL, {
        method: "PUT",
        body: JSON.stringify(newReadStatusData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        renderProgressBar();
        renderBooks();
        // // direct logged-in user to home page
        // document.location.replace("/");
      } else {
        alert("Failed to update book read status.");
      }

      // renderBooks();
    });

    bookCard.append(closeBtn, editBtn, bookCoverImg, bookTitle, bookAuthor, bookIsbn, pagesCount, bookEdition, publishDate, fetchBtn, readToggleLabel, toggleControlLabel);
    bookContainer.appendChild(bookCard);
  }
};

/***/ }),

/***/ "./src/js/library/userClass.js":
/*!*************************************!*\
  !*** ./src/js/library/userClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
//USER CONSTRUCTOR
const User = function (_ref) {
  let {
    username,
    email,
    password
  } = _ref;
  return {
    username,
    email,
    password
  };
};

// CLASS VERSION //
// class User {
// 	constructor(username, email, password) {
// 		this.username = username;
// 		this.email = email;
// 		this.password = password;
// 	}
// }

/***/ }),

/***/ "./src/js/themeToggle.js":
/*!*******************************!*\
  !*** ./src/js/themeToggle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentTheme": () => (/* binding */ setCurrentTheme)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/libraryStyle.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/libraryStyle.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/magnify-white.png */ "./src/assets/icons/magnify-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/book-wall-background.jpg */ "./src/assets/img/book-wall-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/plus-black.png */ "./src/assets/icons/plus-black.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    /* main theme */\n    --white: white;\n    --primary-light: #f8f9fa;\n    --secondary-light: #e9ecef;\n\n    --primary-dark-blue: #3a0ca3;\n    --primary-light-blue: #4cc9f0;\n    --primary-dark-purple: #7209b7;\n    --secondary-mid-blue: #4361ee;\n\n    --highlight-pink: #f72585;\n\n    --black: #000;\n    --primary-dark: #212529;\n    --secondary-dark-gray: #979dac;\n    /* DARK MODE BELOW */\n    /* OTHER THEME BELOW */\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    font-family: 'Arvo', serif;\n}\nbody {\n    min-height: 100vh;\n    background-color: azure;\n}\n\n/* DARK MODE */\n#header-container.dark {\n    background: linear-gradient(83deg, var(--primary-dark-blue) 80%, var(--secondary-mid-blue)); \n    color: var(--white);\n    transition: 0.7s ease;\n}\n#header-container.dark .book-totals {\n    color: var(--black);\n    transition: 0.7s ease;\n}\n#header-container.dark #search-icon {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    transition: 0.7s ease;\n}\ndiv#hero-container.dark {\n    /* background: var(--secondary-dark-gray);\n     */\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    color: var(--white);\n    transition: 0.7s ease; \n}\n#book-container.dark {\n    background: var(--primary-dark);\n    color: var(--white);\n    transition: 0.7s ease;\n}\n#order_by,\n#order_direction,\nheader.dark > .header > .hamburger > .bar  {\n    background-color: var(--white);\n    transition: 0.7s ease;\n}\n\n.dark * .nav-link {\n    color: var(--white);\n    transition: 0.7s ease;\n}\n\n.dark * .add-book-form-open {\n    background-color: var(--primary-light);\n    color: var(--black);\n    transition: 0.7s ease;\n}\n.dark * #add-book-plus {\n    width: 28px;\n    height: 28px;\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n/* ----CONTAINER */\n.container {\n    display: flex;\n    flex-direction: column;\n    /* display:grid; */\n    /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */\n}\n/* target page sections */\n.container > * {\n    padding: 1rem;\n    width: 100%;\n    /* display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */\n}\n/* target wrappers within page sections */\n.content-container {\n    margin-right: auto;\n    margin-left:  auto;\n    max-width: 1024px;\n    padding-right: 10px;\n    padding-left:  10px;\n}\n/* ----HEADER */\n#header-container {\n    background: linear-gradient(135deg, var(--primary-light) 80%, var(--primary-light-blue)); \n    transition: 0.7s ease;\n    color: var(--black);\n    box-shadow: 0px 12px 10px -15px var(--primary-dark);\n    z-index: 99;\n    /*\n    display: grid;\n    grid-template-columns: repeat(4,min-content) minmax(75px,1fr);\n    /* grid-template-columns: repeat(2,75px) minmax(75px,1fr); */\n    /*grid-auto-flow: column;\n    gap: 1.2rem;\n    align-items: center;\n    */\n}\n.header  {\n    display: grid;\n    /* grid-template-columns: repeat(3,min-content) minmax(75px,1fr); */\n    grid-template-columns: repeat(3, minmax(min-content, 75px));\n    /* grid-template-columns: repeat(2,75px) minmax(75px,1fr); */\n    grid-auto-flow: column;\n    gap: 1.2rem;\n    align-items: center;\n}\n\n.header .add-book,\n.add-book-form-open {\n    padding: .3rem;\n    width: max-content;\n    /* max-width: 75px; */\n    border-radius: 1rem;\n}\n.add-book-form-open {\n    background-color: var(--primary-light-blue);\n    color: var(--white);\n    display: flex;\n    align-items: center;\n    border: 2px solid var(--highlight-pink);\n}\n.add-book-form-open:hover,\n.add-book-form-open:focus {\n    background: var(--primary-light-blue);\n}\n\n.add-book-form-open:focus {\n    outline: 1px solid var(--white);\n    outline-offset: -4px;\n}\n.add-book-form-open:active {\n    transform: scale(0.99);\n}\n\n#add-book-plus {\n    width: 28px;\n    height: 28px;\n}\n\n.theme {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/* TOGGLE BUTTON */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* The slider */\n.slider,\n.read-toggle-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--secondary-dark-gray);\n    /* transition to color once checked */\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before,\n.read-toggle-slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: var(--white);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n/* transition of switch background color */\ninput:checked + .slider {\n    background-color: var(--primary-dark);\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px var(--primary-dark);\n}\n/* transition of .slider:before - the toggle switch circle */\ninput:checked + .slider:before,\ninput:checked + .read-toggle-slider:before {\n    -webkit-transform: translateX(17px);\n    -ms-transform: translateX(17px);\n    transform: translateX(17px);\n}\n\n/* Rounded sliders */\n.slider.round,\n.read-toggle-slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before,\n.read-toggle-slider.round:before {\n    border-radius: 50%;\n}\n\n.toggle-text {\n    text-align: center;\n}\n/* READ TOGGLE */\n.single-book .switch {\n    position: absolute;\n    cursor: pointer;\n    right: 7px;\n    bottom: 4px;\n}\n\ninput:checked + .read-toggle-slider {\n    background-color: var(--primary-light-blue);\n}\n\ninput:focus + .read-toggle-slider {\n    box-shadow: 0 0 1px var(--primary-light-blue); \n}\n\n/* NAVIGATION */\nnav {\n    display: flex;\n}\n.header ul {\n    list-style: none;\n    display: flex;\n    gap: 10px;\n}\n.header ul a {\n    text-decoration: none;\n}\n.nav-link {\n    color: var(--black);\n    transition: 0.7s ease;\n    text-decoration: none;\n}\n.nav-link:hover {\n    text-decoration: underline;\n    color: var(--primary-dark-blue);\n    transition: .4s;\n}\n.hamburger {\n    display: none;\n    cursor: pointer;\n}\n.bar {\n    display:block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: black;\n}\n\n/* \n~~  HERO SECTION ~~\n*/\n#hero-container {\n    /* background-color: var(--primary-dark-blue); */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center top;\n    display:none;\n}\n\n/* .hero {\n    padding:0.8rem;\n    \n    display: grid;\n    grid-template-columns: repeat(2,1fr);;\n   \n} */\n.header #search-section,\n.hero #search-section {\n    display:grid;\n    grid-template-columns: 30px 1fr;\n}\n.header #book-search,\n.hero #book-search {\n    max-width: 70%;\n    min-width: 10px;\n}\n\n\n.book-totals,\n.book-totals-hero {\n    border: var(--highlight-pink) 1px solid;\n    background-color: var(--primary-light);\n    min-height: 50px;\n    border-radius: 1rem;\n    width: max-content;\n    padding: 1rem;\n    font-size: .8rem;\n    margin: .5rem;\n}\n.book-progress-bar,\n.book-progress-bar-hero {\n    width: 100%;\n    background-color: grey;\n    margin: .3rem 0;\n}\n.progress-bar,\n.progress-bar-hero {\n    /* width: 10%; */\n    height: 30px;\n    background-color: var(--highlight-pink);\n    text-align: center;\n    line-height: 30px;\n    color: white;\n}\n/* \n~~  BOOK SECTION ~~\n*/\n\n#book-container {\n    /* background-color: rgb(210, 38, 207); */\n    min-height: calc(100vh - 150px);\n}\n\n.book-section {\n    /* grid-column: ; */\n    padding:1rem;\n}\n\n.book-sort-status-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n.book-section .sort {\n    padding-bottom: 1rem;\n}\n.book-section .sort select {\n        border: solid rgba(93, 104, 116, 0.5) 1px;\n        background-color: transparent;\n        border-radius: 3px;\n        height: 1.5rem;\n        padding-left: 0.3rem;\n        padding-right: 0.3rem;\n        margin-left: 0.3rem;\n}\n.book-section .status {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-right: 1rem;\n}\n.status .read_color {\n    background: linear-gradient(135deg, var(--primary-light-blue) 0%, var(--highlight-pink) 100%);\n    height: 30px;\n    width: 50px;\n    border-radius: 3px;\n    margin: 0.2rem;\n}\n.status .unread_color {\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n    margin-left: 1.5rem;\n    height: 30px;\n    width: 50px;\n    border-radius: 3px;\n    margin: 0.2rem;\n}\n/* \n    BOOK CARDS\n*/\n.book-card-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));\n    grid-gap: 20px;\n    margin: 2rem auto;\n    justify-content: center;\n    position: relative;\n}\n.book-card-container .scale-in-center {\n    -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n    animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.book-card-container .single-book {\n    border-radius: 5px;\n    padding: 3rem 1rem;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    line-height: 1.2;\n    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);\n    position: relative;\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n}\n.book-card-container .single-book > * {\n    padding-top: 3px;\n}\n.book-card-container .single-book .book-title,\n.book-card-container .single-book .book-author {\n    word-wrap: break-word; \n    max-width: 20ch;\n}\n.book-card-container .read {\n    background: linear-gradient(135deg, var(--primary-light-blue) 0%, var(--highlight-pink) 100%);\n    color: white;\n}\n.book-card-container .not-read {\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n    color: black;\n}\n.book-card-container .remove-book {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    cursor: pointer;\n}\n.book-card-container .edit-book-form-open {\n    position: absolute;\n    top: 5px;\n    right: 35px;\n    /* width: 10px; */\n    height: 20;\n    cursor: pointer;\n    overflow: clip;\n}\n.book-card-container .fetch-book-data-button {\n    position: absolute;\n    top: 5px;\n    right: 65px;\n    /* width: 10px; */\n    height: 20;\n    cursor: pointer;\n    overflow: clip;\n}\n.book-card-container .book-cover-img {\n    position: absolute;\n    top: 40px;\n    right: 70px;\n    width: 100px;\n    height: 150px;\n}\n\n.book-card-container .read_toggle_label {\n    font-size: 12px;\n    position: absolute;\n    right: 65px;\n    bottom: 7.5px;\n}\n/* \n    FORM SECTION\n*/\n.add_book_section,\n.login_section,\n.signup_section,\n.edit_book_section,\n.edit_user_section {\n    display: none;\n    /* hide for now */\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(4px);\n    align-items: center;\n}\n\n.new-book-form,\n.login-form,\n.signup-form,\n.edit-book-form,\n.edit-user-form {\n    width: max-content;\n    max-width: 100vw;\n    max-height: 100vh;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1rem;\n    text-align: start;\n    padding: 1rem 1rem;\n    border: solid 1px #d3d3d3;\n    border-radius: 5px;\n    position: relative;\n    background-color: #fff;\n    overflow-y: scroll;\n}\n.close-form {\n    position: absolute;\n    right: 5px;\n}\n.close-form:hover {\n      cursor: pointer;\n}\n\n.form_title {\n    font-size: 1.5rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 1;\n    text-align: center;\n    padding-top: 0;\n    text-transform: capitalize;\n    color: #000;\n    font-weight: 500;\n}\n\n.new-book-form h4,\n.login-form h4, \n.signup-form h4,\n.edit-book-form h4,\n.edit-user-form h4 {\n    font-size: .7rem;\n    text-align: center;\n    margin-top: -.8rem;\n}\n\n.edit-user-form .existing-err-msg {\n    color: red;\n    visibility: hidden;\n}\n\n.new-book-form input,\n.login-form input,\n.signup-form input,\n.edit-book-form input,\n.edit-user-form input {\n    margin-left: .7rem;\n}\n\n.err-msg {\n    display: none;\n    color: red;\n}\n\n#login-err-no-user-email {\n    color: black;\n    /* padding: .1rem .2rem; */\n    animation: fadeIn 1s;  \n    transition: opacity 1s;\n}\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n}\n.removed {\n    opacity: 0;\n}\n\n#edit-book-id {\n    visibility: hidden;\n}\n\n.new-book-buttons,\n.login-buttons,\n.signup-buttons,\n.edit-book-buttons,\n.edit-user-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n    margin: 0 auto;\n}\n\n.new-book-buttons button,\n.login-buttons button,\n.signup-buttons button,\n.edit-book-buttons button,\n.edit-user-buttons button {\n    box-sizing: border-box;\n    appearance: none;\n    background-color: transparent;\n    border: 2px solid rgba(2, 132, 199, 0.8);\n    border-radius: 0.6rem;\n    color: rgba(2, 132, 199, 0.8);\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    font-size: 1rem;\n    line-height: 1;\n    /* margin: 20px; */\n    padding: min(75px,1.2rem) 2.8rem;\n    text-decoration: none;\n    text-align: center;\n    text-transform: uppercase;\n    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;\n}\n.new-book-buttons button:hover,\n.new-book-buttons button:focus,\n.login-buttons button:hover,\n.login-buttons button:focus,\n.signup-buttons button:hover,\n.signup-buttons button:focus,\n.edit-book-buttons button:hover,\n.edit-book-buttons button:focus,\n.edit-user-buttons button:hover,\n.edit-user-buttons button:focus {\n    color: #fff;\n    outline: 0;\n    box-shadow: 0 0 40px 40px rgba(2, 132, 199, 0.8) inset;\n}\n\n.empty_library_section {\n    position: relative;\n    display: none;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}\n\n@media(max-width:480px) {\n    /* .header {\n        background-color: aqua;\n        padding: 1rem;\n        display: grid;\n        grid-template-columns: repeat(2,50px) minmax(75px,1fr);\n    } */\n    .header {\n        gap: .2rem;\n    }\n\n}\n\n@media(max-width:881px) {\n    .hamburger {\n        display: block;\n    }\n\n    .hamburger.active .bar:nth-child(2){\n        opacity: 0;\n    }\n    .hamburger.active .bar:nth-child(1){\n        transform: translateY(8px) rotate(45deg);\n    }\n    .hamburger.active .bar:nth-child(3){\n        transform: translateY(-8px) rotate(-45deg);\n    }\n    .nav-menu {\n        position: fixed;\n        right: -100%;\n        top: 108px;\n        gap: 0;\n        flex-direction: column;\n        background-color: white;\n        /* background-color: black; */\n        color: white;\n        width: 100%;\n        text-align: center;\n        transition: 0.3s;\n    }\n    .dark * .nav-menu {\n        background-color: #000;\n    }\n    .nav-item {\n        margin: 16px 0;\n    }\n    .nav-link {\n        color:#0c4a6e;\n    }\n    .nav-menu.active {\n        right: 0;\n    }\n}\n\n@media(max-width:881px) {\n    .container {\n    grid-template-rows: repeat(2,min-content) 5fr;\n}\n\n    .header #search-section, \n    .header .book-totals {\n        display: none;\n    }\n    \n    .header {\n        /* grid-template-columns: repeat(2,75px) minmax(75px,1fr);  */\n        grid-template-columns: repeat(2,min-content) minmax(75px,1fr); \n        gap: 10px;\n    }\n    #hero-container {\n        display:block;\n    }\n    .hero {\n        /* display: grid;\n    grid-template-columns: repeat(2, minmax(185px, 1fr)); */\n    /* grid-template-columns: minmax(150px,1fr);; */\n    /* grid-auto-flow: column; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    }\n    #search-section-hero {\n        display: flex;\n        gap: 10px;\n    }\n\n    #book-container {\n        min-height: calc(100vh - 162px);\n    }\n\n    .book-card-container {\n        grid-template-columns: repeat(auto-fit, minmax(250px,300px));\n    }\n\n    .book-card-container .book-cover-img {\n        top: 35px;\n        right: 15px;\n        width: 90px;\n    }\n\n    .book-card-container .single-book .book-title,\n    .book-card-container .single-book .book-author {\n        max-width: 10ch;\n    }\n}\n\n@media(max-width:1081px) {\n .hero {\n    /* grid-template-columns: repeat(2, 1fr); */\n    grid-auto-flow: row;\n }\n}\n\n\n/* CODE FOR NEW BOOK BUTTON \n\n .new-book {\n    border: none;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n    outline: transparent;\n    background: linear-gradient(\n      135deg,\n      rgb(33, 150, 243) 0%,\n      rgb(21, 101, 192) 100%\n    );\n    color: #fff;\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),\n      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n\n    span {\n      font-size: 2rem;\n      line-height: 1.2;\n      border-radius: 50%;\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    @include break-points('md') {\n      transition: transform 0.25s, opacity 0.25s;\n\n      &:hover {\n        transform: rotate(90deg) scale(1.2);\n      }\n    }\n  }*/", "",{"version":3,"sources":["webpack://./src/css/libraryStyle.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    /* main theme */\n    --white: white;\n    --primary-light: #f8f9fa;\n    --secondary-light: #e9ecef;\n\n    --primary-dark-blue: #3a0ca3;\n    --primary-light-blue: #4cc9f0;\n    --primary-dark-purple: #7209b7;\n    --secondary-mid-blue: #4361ee;\n\n    --highlight-pink: #f72585;\n\n    --black: #000;\n    --primary-dark: #212529;\n    --secondary-dark-gray: #979dac;\n    /* DARK MODE BELOW */\n    /* OTHER THEME BELOW */\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody, html {\n    font-family: 'Arvo', serif;\n}\nbody {\n    min-height: 100vh;\n    background-color: azure;\n}\n\n/* DARK MODE */\n#header-container.dark {\n    background: linear-gradient(83deg, var(--primary-dark-blue) 80%, var(--secondary-mid-blue)); \n    color: var(--white);\n    transition: 0.7s ease;\n}\n#header-container.dark .book-totals {\n    color: var(--black);\n    transition: 0.7s ease;\n}\n#header-container.dark #search-icon {\n    content: url(../assets/icons/magnify-white.png);\n    transition: 0.7s ease;\n}\ndiv#hero-container.dark {\n    /* background: var(--secondary-dark-gray);\n     */\n     background-image: url(../assets/img/book-wall-background.jpg);\n    color: var(--white);\n    transition: 0.7s ease; \n}\n#book-container.dark {\n    background: var(--primary-dark);\n    color: var(--white);\n    transition: 0.7s ease;\n}\n#order_by,\n#order_direction,\nheader.dark > .header > .hamburger > .bar  {\n    background-color: var(--white);\n    transition: 0.7s ease;\n}\n\n.dark * .nav-link {\n    color: var(--white);\n    transition: 0.7s ease;\n}\n\n.dark * .add-book-form-open {\n    background-color: var(--primary-light);\n    color: var(--black);\n    transition: 0.7s ease;\n}\n.dark * #add-book-plus {\n    width: 28px;\n    height: 28px;\n    content: url(\"../assets/icons/plus-black.png\");\n}\n/* ----CONTAINER */\n.container {\n    display: flex;\n    flex-direction: column;\n    /* display:grid; */\n    /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */\n}\n/* target page sections */\n.container > * {\n    padding: 1rem;\n    width: 100%;\n    /* display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */\n}\n/* target wrappers within page sections */\n.content-container {\n    margin-right: auto;\n    margin-left:  auto;\n    max-width: 1024px;\n    padding-right: 10px;\n    padding-left:  10px;\n}\n/* ----HEADER */\n#header-container {\n    background: linear-gradient(135deg, var(--primary-light) 80%, var(--primary-light-blue)); \n    transition: 0.7s ease;\n    color: var(--black);\n    box-shadow: 0px 12px 10px -15px var(--primary-dark);\n    z-index: 99;\n    /*\n    display: grid;\n    grid-template-columns: repeat(4,min-content) minmax(75px,1fr);\n    /* grid-template-columns: repeat(2,75px) minmax(75px,1fr); */\n    /*grid-auto-flow: column;\n    gap: 1.2rem;\n    align-items: center;\n    */\n}\n.header  {\n    display: grid;\n    /* grid-template-columns: repeat(3,min-content) minmax(75px,1fr); */\n    grid-template-columns: repeat(3, minmax(min-content, 75px));\n    /* grid-template-columns: repeat(2,75px) minmax(75px,1fr); */\n    grid-auto-flow: column;\n    gap: 1.2rem;\n    align-items: center;\n}\n\n.header .add-book,\n.add-book-form-open {\n    padding: .3rem;\n    width: max-content;\n    /* max-width: 75px; */\n    border-radius: 1rem;\n}\n.add-book-form-open {\n    background-color: var(--primary-light-blue);\n    color: var(--white);\n    display: flex;\n    align-items: center;\n    border: 2px solid var(--highlight-pink);\n}\n.add-book-form-open:hover,\n.add-book-form-open:focus {\n    background: var(--primary-light-blue);\n}\n\n.add-book-form-open:focus {\n    outline: 1px solid var(--white);\n    outline-offset: -4px;\n}\n.add-book-form-open:active {\n    transform: scale(0.99);\n}\n\n#add-book-plus {\n    width: 28px;\n    height: 28px;\n}\n\n.theme {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/* TOGGLE BUTTON */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* The slider */\n.slider,\n.read-toggle-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--secondary-dark-gray);\n    /* transition to color once checked */\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before,\n.read-toggle-slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: var(--white);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n/* transition of switch background color */\ninput:checked + .slider {\n    background-color: var(--primary-dark);\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px var(--primary-dark);\n}\n/* transition of .slider:before - the toggle switch circle */\ninput:checked + .slider:before,\ninput:checked + .read-toggle-slider:before {\n    -webkit-transform: translateX(17px);\n    -ms-transform: translateX(17px);\n    transform: translateX(17px);\n}\n\n/* Rounded sliders */\n.slider.round,\n.read-toggle-slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before,\n.read-toggle-slider.round:before {\n    border-radius: 50%;\n}\n\n.toggle-text {\n    text-align: center;\n}\n/* READ TOGGLE */\n.single-book .switch {\n    position: absolute;\n    cursor: pointer;\n    right: 7px;\n    bottom: 4px;\n}\n\ninput:checked + .read-toggle-slider {\n    background-color: var(--primary-light-blue);\n}\n\ninput:focus + .read-toggle-slider {\n    box-shadow: 0 0 1px var(--primary-light-blue); \n}\n\n/* NAVIGATION */\nnav {\n    display: flex;\n}\n.header ul {\n    list-style: none;\n    display: flex;\n    gap: 10px;\n}\n.header ul a {\n    text-decoration: none;\n}\n.nav-link {\n    color: var(--black);\n    transition: 0.7s ease;\n    text-decoration: none;\n}\n.nav-link:hover {\n    text-decoration: underline;\n    color: var(--primary-dark-blue);\n    transition: .4s;\n}\n.hamburger {\n    display: none;\n    cursor: pointer;\n}\n.bar {\n    display:block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: black;\n}\n\n/* \n~~  HERO SECTION ~~\n*/\n#hero-container {\n    /* background-color: var(--primary-dark-blue); */\n    background-image: url(../assets/img/book-wall-background.jpg);\n    background-position: center top;\n    display:none;\n}\n\n/* .hero {\n    padding:0.8rem;\n    \n    display: grid;\n    grid-template-columns: repeat(2,1fr);;\n   \n} */\n.header #search-section,\n.hero #search-section {\n    display:grid;\n    grid-template-columns: 30px 1fr;\n}\n.header #book-search,\n.hero #book-search {\n    max-width: 70%;\n    min-width: 10px;\n}\n\n\n.book-totals,\n.book-totals-hero {\n    border: var(--highlight-pink) 1px solid;\n    background-color: var(--primary-light);\n    min-height: 50px;\n    border-radius: 1rem;\n    width: max-content;\n    padding: 1rem;\n    font-size: .8rem;\n    margin: .5rem;\n}\n.book-progress-bar,\n.book-progress-bar-hero {\n    width: 100%;\n    background-color: grey;\n    margin: .3rem 0;\n}\n.progress-bar,\n.progress-bar-hero {\n    /* width: 10%; */\n    height: 30px;\n    background-color: var(--highlight-pink);\n    text-align: center;\n    line-height: 30px;\n    color: white;\n}\n/* \n~~  BOOK SECTION ~~\n*/\n\n#book-container {\n    /* background-color: rgb(210, 38, 207); */\n    min-height: calc(100vh - 150px);\n}\n\n.book-section {\n    /* grid-column: ; */\n    padding:1rem;\n}\n\n.book-sort-status-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n.book-section .sort {\n    padding-bottom: 1rem;\n}\n.book-section .sort select {\n        border: solid rgba(93, 104, 116, 0.5) 1px;\n        background-color: transparent;\n        border-radius: 3px;\n        height: 1.5rem;\n        padding-left: 0.3rem;\n        padding-right: 0.3rem;\n        margin-left: 0.3rem;\n}\n.book-section .status {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-right: 1rem;\n}\n.status .read_color {\n    background: linear-gradient(135deg, var(--primary-light-blue) 0%, var(--highlight-pink) 100%);\n    height: 30px;\n    width: 50px;\n    border-radius: 3px;\n    margin: 0.2rem;\n}\n.status .unread_color {\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n    margin-left: 1.5rem;\n    height: 30px;\n    width: 50px;\n    border-radius: 3px;\n    margin: 0.2rem;\n}\n/* \n    BOOK CARDS\n*/\n.book-card-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));\n    grid-gap: 20px;\n    margin: 2rem auto;\n    justify-content: center;\n    position: relative;\n}\n.book-card-container .scale-in-center {\n    -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n    animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.book-card-container .single-book {\n    border-radius: 5px;\n    padding: 3rem 1rem;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    line-height: 1.2;\n    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);\n    position: relative;\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n}\n.book-card-container .single-book > * {\n    padding-top: 3px;\n}\n.book-card-container .single-book .book-title,\n.book-card-container .single-book .book-author {\n    word-wrap: break-word; \n    max-width: 20ch;\n}\n.book-card-container .read {\n    background: linear-gradient(135deg, var(--primary-light-blue) 0%, var(--highlight-pink) 100%);\n    color: white;\n}\n.book-card-container .not-read {\n    background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-dark-gray) 100%);\n    color: black;\n}\n.book-card-container .remove-book {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    cursor: pointer;\n}\n.book-card-container .edit-book-form-open {\n    position: absolute;\n    top: 5px;\n    right: 35px;\n    /* width: 10px; */\n    height: 20;\n    cursor: pointer;\n    overflow: clip;\n}\n.book-card-container .fetch-book-data-button {\n    position: absolute;\n    top: 5px;\n    right: 65px;\n    /* width: 10px; */\n    height: 20;\n    cursor: pointer;\n    overflow: clip;\n}\n.book-card-container .book-cover-img {\n    position: absolute;\n    top: 40px;\n    right: 70px;\n    width: 100px;\n    height: 150px;\n}\n\n.book-card-container .read_toggle_label {\n    font-size: 12px;\n    position: absolute;\n    right: 65px;\n    bottom: 7.5px;\n}\n/* \n    FORM SECTION\n*/\n.add_book_section,\n.login_section,\n.signup_section,\n.edit_book_section,\n.edit_user_section {\n    display: none;\n    /* hide for now */\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(4px);\n    align-items: center;\n}\n\n.new-book-form,\n.login-form,\n.signup-form,\n.edit-book-form,\n.edit-user-form {\n    width: max-content;\n    max-width: 100vw;\n    max-height: 100vh;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1rem;\n    text-align: start;\n    padding: 1rem 1rem;\n    border: solid 1px #d3d3d3;\n    border-radius: 5px;\n    position: relative;\n    background-color: #fff;\n    overflow-y: scroll;\n}\n.close-form {\n    position: absolute;\n    right: 5px;\n}\n.close-form:hover {\n      cursor: pointer;\n}\n\n.form_title {\n    font-size: 1.5rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 1;\n    text-align: center;\n    padding-top: 0;\n    text-transform: capitalize;\n    color: #000;\n    font-weight: 500;\n}\n\n.new-book-form h4,\n.login-form h4, \n.signup-form h4,\n.edit-book-form h4,\n.edit-user-form h4 {\n    font-size: .7rem;\n    text-align: center;\n    margin-top: -.8rem;\n}\n\n.edit-user-form .existing-err-msg {\n    color: red;\n    visibility: hidden;\n}\n\n.new-book-form input,\n.login-form input,\n.signup-form input,\n.edit-book-form input,\n.edit-user-form input {\n    margin-left: .7rem;\n}\n\n.err-msg {\n    display: none;\n    color: red;\n}\n\n#login-err-no-user-email {\n    color: black;\n    /* padding: .1rem .2rem; */\n    animation: fadeIn 1s;  \n    transition: opacity 1s;\n}\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n}\n.removed {\n    opacity: 0;\n}\n\n#edit-book-id {\n    visibility: hidden;\n}\n\n.new-book-buttons,\n.login-buttons,\n.signup-buttons,\n.edit-book-buttons,\n.edit-user-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n    margin: 0 auto;\n}\n\n.new-book-buttons button,\n.login-buttons button,\n.signup-buttons button,\n.edit-book-buttons button,\n.edit-user-buttons button {\n    box-sizing: border-box;\n    appearance: none;\n    background-color: transparent;\n    border: 2px solid rgba(2, 132, 199, 0.8);\n    border-radius: 0.6rem;\n    color: rgba(2, 132, 199, 0.8);\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    font-size: 1rem;\n    line-height: 1;\n    /* margin: 20px; */\n    padding: min(75px,1.2rem) 2.8rem;\n    text-decoration: none;\n    text-align: center;\n    text-transform: uppercase;\n    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;\n}\n.new-book-buttons button:hover,\n.new-book-buttons button:focus,\n.login-buttons button:hover,\n.login-buttons button:focus,\n.signup-buttons button:hover,\n.signup-buttons button:focus,\n.edit-book-buttons button:hover,\n.edit-book-buttons button:focus,\n.edit-user-buttons button:hover,\n.edit-user-buttons button:focus {\n    color: #fff;\n    outline: 0;\n    box-shadow: 0 0 40px 40px rgba(2, 132, 199, 0.8) inset;\n}\n\n.empty_library_section {\n    position: relative;\n    display: none;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n}\n\n@media(max-width:480px) {\n    /* .header {\n        background-color: aqua;\n        padding: 1rem;\n        display: grid;\n        grid-template-columns: repeat(2,50px) minmax(75px,1fr);\n    } */\n    .header {\n        gap: .2rem;\n    }\n\n}\n\n@media(max-width:881px) {\n    .hamburger {\n        display: block;\n    }\n\n    .hamburger.active .bar:nth-child(2){\n        opacity: 0;\n    }\n    .hamburger.active .bar:nth-child(1){\n        transform: translateY(8px) rotate(45deg);\n    }\n    .hamburger.active .bar:nth-child(3){\n        transform: translateY(-8px) rotate(-45deg);\n    }\n    .nav-menu {\n        position: fixed;\n        right: -100%;\n        top: 108px;\n        gap: 0;\n        flex-direction: column;\n        background-color: white;\n        /* background-color: black; */\n        color: white;\n        width: 100%;\n        text-align: center;\n        transition: 0.3s;\n    }\n    .dark * .nav-menu {\n        background-color: #000;\n    }\n    .nav-item {\n        margin: 16px 0;\n    }\n    .nav-link {\n        color:#0c4a6e;\n    }\n    .nav-menu.active {\n        right: 0;\n    }\n}\n\n@media(max-width:881px) {\n    .container {\n    grid-template-rows: repeat(2,min-content) 5fr;\n}\n\n    .header #search-section, \n    .header .book-totals {\n        display: none;\n    }\n    \n    .header {\n        /* grid-template-columns: repeat(2,75px) minmax(75px,1fr);  */\n        grid-template-columns: repeat(2,min-content) minmax(75px,1fr); \n        gap: 10px;\n    }\n    #hero-container {\n        display:block;\n    }\n    .hero {\n        /* display: grid;\n    grid-template-columns: repeat(2, minmax(185px, 1fr)); */\n    /* grid-template-columns: minmax(150px,1fr);; */\n    /* grid-auto-flow: column; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    }\n    #search-section-hero {\n        display: flex;\n        gap: 10px;\n    }\n\n    #book-container {\n        min-height: calc(100vh - 162px);\n    }\n\n    .book-card-container {\n        grid-template-columns: repeat(auto-fit, minmax(250px,300px));\n    }\n\n    .book-card-container .book-cover-img {\n        top: 35px;\n        right: 15px;\n        width: 90px;\n    }\n\n    .book-card-container .single-book .book-title,\n    .book-card-container .single-book .book-author {\n        max-width: 10ch;\n    }\n}\n\n@media(max-width:1081px) {\n .hero {\n    /* grid-template-columns: repeat(2, 1fr); */\n    grid-auto-flow: row;\n }\n}\n\n\n/* CODE FOR NEW BOOK BUTTON \n\n .new-book {\n    border: none;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n    outline: transparent;\n    background: linear-gradient(\n      135deg,\n      rgb(33, 150, 243) 0%,\n      rgb(21, 101, 192) 100%\n    );\n    color: #fff;\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),\n      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n\n    span {\n      font-size: 2rem;\n      line-height: 1.2;\n      border-radius: 50%;\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    @include break-points('md') {\n      transition: transform 0.25s, opacity 0.25s;\n\n      &:hover {\n        transform: rotate(90deg) scale(1.2);\n      }\n    }\n  }*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/libraryStyle.css":
/*!**********************************!*\
  !*** ./src/css/libraryStyle.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_libraryStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./libraryStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/libraryStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_libraryStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_libraryStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_libraryStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_libraryStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons/magnify-white.png":
/*!********************************************!*\
  !*** ./src/assets/icons/magnify-white.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f64cf3289a3e659bbe0.png";

/***/ }),

/***/ "./src/assets/icons/plus-black.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/plus-black.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e4640c82f731c2d5fc0.png";

/***/ }),

/***/ "./src/assets/img/book-wall-background.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/book-wall-background.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "beb8fbe5a00cae96cf55.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxTQUFTLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxTQUFTLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssb0JBQW9CLHFC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QTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9hZGRCb29rRm9ybS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9ib29rQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvZWRpdEJvb2tGb3JtLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2VkaXRVc2VyRm9ybS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9mZXRjaEJvb2tJbmZvLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvaGVyb0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvbG9nb3V0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L3JlbmRlckJvb2tzLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L3VzZXJDbGFzcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvdGhlbWVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2Nzcy9saWJyYXJ5U3R5bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY3NzL2xpYnJhcnlTdHlsZS5jc3M/NGJhYyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2sgfSBmcm9tIFwiLi9ib29rQ2xhc3MuanNcIlxuXG5jb25zdCBhZGRCb29rU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX2Jvb2tfc2VjdGlvblwiKTtcbmZ1bmN0aW9uIHJlbmRlckFkZEJvb2tGb3JtKCkge1xuXHRhZGRCb29rU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcbn1cbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ib29rLWZvcm0tb3BlblwiKTtcbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckFkZEJvb2tGb3JtKTtcblxuLy8gQ0xFQVIgQk9PSyBGT1JNXG5mdW5jdGlvbiBjbGVhck5ld0Jvb2tGb3JtKCkge1xuXHRjb25zdCBib29rSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib29rLWZvcm0tY29udHJvbFwiKTtcblx0Zm9yIChjb25zdCBpbnB1dCBvZiBib29rSW5wdXRzKSB7XG5cdFx0aWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIilcblx0XHRcdGlucHV0Lm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0ZWxzZSBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdH1cbn1cbmNvbnN0IGNsZWFyTmV3Qm9va0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLW5ldy1ib29rLWZvcm1cIik7XG5jbGVhck5ld0Jvb2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhck5ld0Jvb2tGb3JtKTtcbi8vIENMT1NFIEJPT0sgRk9STVxuZnVuY3Rpb24gY2xvc2VOZXdCb29rRm9ybSgpIHtcblx0YWRkQm9va1NlY3Rpb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cbmNvbnN0IGNsb3NlTmV3Qm9va0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW5ldy1ib29rLWZvcm1cIik7XG5jbG9zZU5ld0Jvb2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU5ld0Jvb2tGb3JtKTtcblxuLy9BREQgQk9PSyBGVU5DVElPTlxuY29uc3QgYm9va1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItdGl0bGUtbmV3XCIpO1xuY29uc3QgYm9va0F1dGhvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWF1dGhvci1uZXdcIik7XG5jb25zdCBib29rSVNCTklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWlzYm4tbmV3XCIpO1xuY29uc3QgYm9va1BhZ2VzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcGFnZXMtbmV3XCIpO1xuY29uc3QgYm9va0VkaXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1lZGl0aW9uLW5ld1wiKTtcbmNvbnN0IGJvb2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcHVibGlzaGluZ19kYXRlLW5ld1wiKTtcbmNvbnN0IGJvb2tSZWFkU3RhdHVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcmVhZF9zdGF0dXMtbmV3XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KCkge1xuXHRjb25zdCBuZXdCb29rID0gbmV3IEJvb2soe1xuXHRcdHRpdGxlOiBib29rVGl0bGVJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0YXV0aG9yOiBib29rQXV0aG9ySW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGlzYm46IGJvb2tJU0JOSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdHBhZ2VzOiBib29rUGFnZXNJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0ZWRpdGlvbjogYm9va0VkaXRpb25JbnB1dC52YWx1ZS50cmltKCksXG5cdFx0cHVibGlzaF9kYXRlOiBib29rRGF0ZUlucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRpc19yZWFkOiBib29rUmVhZFN0YXR1c0lucHV0LnZhbHVlLnRyaW0oKSxcblx0fSk7XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYm9va3NcIiwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9vayksXG5cdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHR9KTtcblx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0YWRkQm9va1NlY3Rpb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblx0XHRyZW5kZXJCb29rcygpO1xuXHR9IGVsc2Uge1xuXHRcdGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBuZXcgYm9vay5cIik7XG5cdH1cbn1cblxuLy8gLy8gTkVXIEJPT0sgRk9STVxuLy8gY29uc3QgbmV3Qm9va0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1ib29rLWZvcm1cIik7XG4vLyBuZXdCb29rRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZEJvb2tUb0xpYnJhcnkpO1xuY29uc3QgYWRkQm9va0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ib29rXCIpO1xuYWRkQm9va0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEJvb2tUb0xpYnJhcnkpO1xuIiwiLy9CT09LIENPTlNUUlVDVE9SXG5leHBvcnQgY29uc3QgQm9vayA9IGZ1bmN0aW9uICh7XG5cdHRpdGxlLFxuXHRhdXRob3IsXG5cdGlzYm4sXG5cdHBhZ2VzLFxuXHRlZGl0aW9uLFxuXHRwdWJsaXNoX2RhdGUsXG5cdGlzX3JlYWQsXG59KSB7XG5cdHJldHVybiB7XG5cdFx0dGl0bGUsXG5cdFx0YXV0aG9yLFxuXHRcdGlzYm4sXG5cdFx0cGFnZXMsXG5cdFx0ZWRpdGlvbixcblx0XHRwdWJsaXNoX2RhdGUsXG5cdFx0aXNfcmVhZCxcblx0XHQvLyBpbnNlcnRpb25fZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuXHR9O1xufTtcblxuLy8gQ0xBU1MgVkVSU0lPTiAvL1xuLy8gY2xhc3MgQm9vayB7XG4vLyBcdGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBsYW5ndWFnZSwgcHVibGlzaERhdGUsIHJlYWRTdGF0dXMpIHtcbi8vIFx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyBcdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG4vLyBcdFx0dGhpcy5wYWdlcyA9IHBhZ2VzO1xuLy8gXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbi8vIFx0XHR0aGlzLnB1Ymxpc2hEYXRlID0gcHVibGlzaERhdGU7XG4vLyBcdFx0dGhpcy5yZWFkU3RhdHVzID0gcmVhZFN0YXR1cztcbi8vIFx0XHR0aGlzLmluc2VydGlvbl9kYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuLy8gXHR9XG4vLyB9XG4iLCJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vYm9va0NsYXNzXCJcblxuLy8gY29uc3QgcmVuZGVyRWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYm9vay1mb3JtLW9wZW5cIik7XG4vLyByZW5kZXJFZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyBcdC8vIFNIT1cgRURJVCBGT1JNXG4vLyBcdGRvY3VtZW50XG4vLyBcdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdF9ib29rX3NlY3Rpb25cIilcbi8vIFx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG5cbi8vIFx0bGV0IGJvb2tDYXJkQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXMpO1xuXG4vLyBcdGxldCBleGlzdGluZ0Jvb2tJbmZvID0ge1xuLy8gXHRcdHRpdGxlOiBib29rQ2FyZENoaWxkcmVuWzJdLnZhbHVlLFxuLy8gXHRcdGF1dGhvcjogYm9va0NhcmRDaGlsZHJlblszXS52YWx1ZSxcbi8vIFx0XHRpc2JuOiBib29rQ2FyZENoaWxkcmVuWzRdLnZhbHVlLFxuLy8gXHRcdHBhZ2VzOiBib29rQ2FyZENoaWxkcmVuWzVdLnZhbHVlLFxuLy8gXHRcdGVkaXRpb246IGJvb2tDYXJkQ2hpbGRyZW5bNl0udmFsdWUsXG4vLyBcdFx0cHVibGlzaF9kYXRlOiBib29rQ2FyZENoaWxkcmVuWzddLnZhbHVlLFxuLy8gXHRcdGlzX3JlYWQ6IGJvb2tDYXJkQ2hpbGRyZW5bOV0uZmlyc3RDaGlsZC5jaGVja2VkLFxuLy8gXHR9O1xuXG4vLyBcdC8vIFBPUFVMQVRFIElOUFVUUyBXSVRIIERFRkFVTFQgQ09OVEVOVFxuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItdGl0bGUtZWRpdFwiKS50ZXh0Q29udGVudCA9IGV4aXN0aW5nQm9va0luZm8udGl0bGU7XG4vLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1hdXRob3ItZWRpdFwiKS50ZXh0Q29udGVudCA9XG4vLyBcdFx0ZXhpc3RpbmdCb29rSW5mby5hdXRob3I7XG4vLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1pc2JuLWVkaXRcIikudGV4dENvbnRlbnQgPSBleGlzdGluZ0Jvb2tJbmZvLmlzYm47XG4vLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wYWdlcy1lZGl0XCIpLnRleHRDb250ZW50ID0gZXhpc3RpbmdCb29rSW5mby5wYWdlcztcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWVkaXRpb24tZWRpdFwiKS50ZXh0Q29udGVudCA9XG4vLyBcdFx0ZXhpc3RpbmdCb29rSW5mby5lZGl0aW9uO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcHVibGlzaGluZ19kYXRlLWVkaXRcIikudGV4dENvbnRlbnQgPVxuLy8gXHRcdGV4aXN0aW5nQm9va0luZm8ucHVibGlzaF9kYXRlO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcmVhZF9zdGF0dXMtZWRpdFwiKS50ZXh0Q29udGVudCA9XG4vLyBcdFx0ZXhpc3RpbmdCb29rSW5mby5pc19yZWFkO1xuLy8gfSk7XG5cbi8vIENMRUFSIEVESVQgQk9PSyBGT1JNXG5mdW5jdGlvbiBjbGVhckVkaXRCb29rRm9ybSgpIHtcblx0Y29uc3QgYm9va0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9vay1mb3JtLWNvbnRyb2xcIik7XG5cdGZvciAoY29uc3QgaW5wdXQgb2YgYm9va0lucHV0cykge1xuXHRcdGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIpXG5cdFx0XHRpbnB1dC5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xuXHRcdGVsc2UgaW5wdXQudmFsdWUgPSBcIlwiO1xuXHR9XG59XG5jb25zdCBjbGVhckVkaXRCb29rRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItZWRpdC1ib29rLWZvcm1cIik7XG5jbGVhckVkaXRCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJFZGl0Qm9va0Zvcm0pO1xuLy8gQ0xPU0UgRURJVCBCT09LIEZPUk1cblxuZnVuY3Rpb24gY2xvc2VFZGl0Qm9va0Zvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdF9ib29rX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cbmNvbnN0IGNsb3NlRWRpdEJvb2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1lZGl0LWJvb2stZm9ybVwiKTtcbmNsb3NlRWRpdEJvb2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUVkaXRCb29rRm9ybSk7XG5cbi8vIEVESVQgQk9PSyBGVU5DVElPTlxuY29uc3QgYm9va1RpdGxlRWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXRpdGxlLWVkaXRcIik7XG5jb25zdCBib29rQXV0aG9yRWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWF1dGhvci1lZGl0XCIpO1xuY29uc3QgYm9va0lTQk5FZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItaXNibi1lZGl0XCIpO1xuY29uc3QgYm9va1BhZ2VzRWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXBhZ2VzLWVkaXRcIik7XG5jb25zdCBib29rRWRpdGlvbkVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1lZGl0aW9uLWVkaXRcIik7XG5jb25zdCBib29rRGF0ZUVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wdWJsaXNoaW5nX2RhdGUtZWRpdFwiKTtcbmNvbnN0IGJvb2tSZWFkU3RhdHVzRWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXJlYWRfc3RhdHVzLWVkaXRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGVkaXRCb29rTGlicmFyeSgpIHtcblx0Y29uc3QgbmV3Qm9va1VwZGF0ZSA9IG5ldyBCb29rKHtcblx0XHR0aXRsZTogYm9va1RpdGxlRWRpdElucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRhdXRob3I6IGJvb2tBdXRob3JFZGl0SW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGlzYm46IGJvb2tJU0JORWRpdElucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRwYWdlczogYm9va1BhZ2VzRWRpdElucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRlZGl0aW9uOiBib29rRWRpdGlvbkVkaXRJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0cHVibGlzaF9kYXRlOiBib29rRGF0ZUVkaXRJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0aXNfcmVhZDogYm9va1JlYWRTdGF0dXNFZGl0SW5wdXQudmFsdWUsXG5cdH0pO1xuXG5cdGNvbnN0IGJvb2tJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1ib29rLWlkXCIpLmRhdGFzZXQuYm9va0lkO1xuXHRjb25zdCBmZXRjaFVSTEVkaXQgPSBgL2FwaS9ib29rcy8ke2Jvb2tJRH1gO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVVJMRWRpdCwge1xuXHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdCb29rVXBkYXRlKSxcblx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdH0pO1xuXHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRkb2N1bWVudFxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdF9ib29rX3NlY3Rpb25cIilcblx0XHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuXHRcdHJlbmRlckJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0YWxlcnQoXCJGYWlsZWQgdG8gY3JlYXRlIG5ldyBib29rLlwiKTtcblx0fVxufVxuXG5jb25zdCBlZGl0Qm9va0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYm9va1wiKTtcbmVkaXRCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdEJvb2tMaWJyYXJ5KTtcbiIsImltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlckNsYXNzXCJcblxuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWUtZWRpdFwiKTtcbmNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsLWVkaXRcIik7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1lZGl0XCIpO1xuXG5jb25zdCBlZGl0VXNlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfdXNlcl9zZWN0aW9uXCIpO1xubGV0IGV4aXN0aW5nVXNlckRhdGFHbG9iYWw7XG5hc3luYyBmdW5jdGlvbiByZW5kZXJFZGl0VXNlckZvcm0oKSB7XG5cdGNvbnN0IHJlc3BvbnNlVXNlckRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvdXNlci9JRFwiKTtcblx0Y29uc3QgcmVzcG9uc2VVc2VyID0gYXdhaXQgcmVzcG9uc2VVc2VyRGF0YS5qc29uKCk7XG5cblx0bGV0IGV4aXN0aW5nVXNlckRhdGEgPSB7XG5cdFx0ZW1haWw6IHJlc3BvbnNlVXNlci5lbWFpbCxcblx0XHR1c2VybmFtZTogcmVzcG9uc2VVc2VyLnVzZXJuYW1lLFxuXHR9O1xuXG5cdHVzZXJuYW1lSW5wdXQudmFsdWUgPSBleGlzdGluZ1VzZXJEYXRhLnVzZXJuYW1lO1xuXHRlbWFpbElucHV0LnZhbHVlID0gZXhpc3RpbmdVc2VyRGF0YS5lbWFpbDtcblxuXHRleGlzdGluZ1VzZXJEYXRhR2xvYmFsID0gZXhpc3RpbmdVc2VyRGF0YTtcblxuXHRlZGl0VXNlclNlY3Rpb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5jb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dGluZ3NcIik7XG5zZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyRWRpdFVzZXJGb3JtKTtcblxuLy8gQ0xFQVIgRURJVCBVU0VSIEZPUk1cbmZ1bmN0aW9uIGNsZWFyRWRpdFVzZXJGb3JtKCkge1xuXHRjb25zdCB1c2VySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51c2VyLWZvcm0tY29udHJvbFwiKTtcblx0Zm9yIChjb25zdCBpbnB1dCBvZiB1c2VySW5wdXRzKSB7XG5cdFx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHR9XG59XG5jb25zdCBjbGVhckVkaXRVc2VyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItZWRpdC11c2VyLWZvcm1cIik7XG5jbGVhckVkaXRVc2VyRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJFZGl0VXNlckZvcm0pO1xuXG4vLyBDTE9TRSBFRElUIEJPT0sgRk9STVxuZnVuY3Rpb24gY2xvc2VFZGl0VXNlckZvcm0oKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdF91c2VyX3NlY3Rpb25cIilcblx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbn1cbmNvbnN0IGNsb3NlRWRpdFVzZXJGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1lZGl0LXVzZXItZm9ybVwiKTtcbmNsb3NlRWRpdFVzZXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUVkaXRVc2VyRm9ybSk7XG5cbi8vIEVESVQgVVNFUiBGVU5DVElPTlxuYXN5bmMgZnVuY3Rpb24gZWRpdFVzZXIoKSB7XG5cdGNvbnN0IGV4aXN0aW5nRXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGlzdGluZy1lcnItbXNnXCIpO1xuXHRleGlzdGluZ0Vyck1zZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuXHRjb25zdCBuZXdVc2VyVXBkYXRlID0gbmV3IFVzZXIoe1xuXHRcdHVzZXJuYW1lOiB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRlbWFpbDogZW1haWxJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0cGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXQudmFsdWUsXG5cdH0pO1xuXG5cdC8vIGlmIChleGlzdGluZ1VzZXJEYXRhR2xvYmFsLmVtYWlsID09PSBuZXdVc2VyVXBkYXRlLmVtYWlsKVxuXHQvLyBcdGRlbGV0ZSBuZXdVc2VyVXBkYXRlLmVtYWlsO1xuXHQvLyBpZiAoZXhpc3RpbmdVc2VyRGF0YUdsb2JhbC51c2VybmFtZSA9PT0gbmV3VXNlclVwZGF0ZS51c2VybmFtZSlcblx0Ly8gXHRkZWxldGUgbmV3VXNlclVwZGF0ZS51c2VybmFtZTtcblx0aWYgKG5ld1VzZXJVcGRhdGUucGFzc3dvcmQudHJpbSgpID09PSBcIlwiKSBkZWxldGUgbmV3VXNlclVwZGF0ZS5wYXNzd29yZDtcblx0ZWxzZSBpZiAobmV3VXNlclVwZGF0ZS5wYXNzd29yZC5sZW5ndGggPCA4KSB7XG5cdFx0ZXhpc3RpbmdFcnJNc2cuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRcdGV4aXN0aW5nRXJyTXNnLnRleHRDb250ZW50ID0gXCJOZXcgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIjtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBleGlzdGluZ1VzZXJEYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL2V4aXN0aW5nXCIsIHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXJVcGRhdGUpLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG5cdGNvbnN0IGV4aXN0aW5nVXNlclJlc3BvbnNlID0gYXdhaXQgZXhpc3RpbmdVc2VyRGF0YS5qc29uKCk7XG5cblx0aWYgKFxuXHRcdGV4aXN0aW5nVXNlclJlc3BvbnNlLmV4aXN0aW5nRW1haWwgJiZcblx0XHRleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ1VzZXJuYW1lXG5cdCkge1xuXHRcdGV4aXN0aW5nRXJyTXNnLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRleGlzdGluZ0Vyck1zZy50ZXh0Q29udGVudCA9IFwiVXNlcm5hbWUgYW5kIGVtYWlsIGFyZSBib3RoIGFscmVhZHkgdGFrZW5cIjtcblx0fSBlbHNlIGlmIChcblx0XHRleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ0VtYWlsICYmXG5cdFx0IWV4aXN0aW5nVXNlclJlc3BvbnNlLmV4aXN0aW5nVXNlcm5hbWVcblx0KSB7XG5cdFx0ZXhpc3RpbmdFcnJNc2cuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRcdGV4aXN0aW5nRXJyTXNnLnRleHRDb250ZW50ID0gXCJFbWFpbCBpcyBhbHJlYWR5IHRha2VuXCI7XG5cdH0gZWxzZSBpZiAoXG5cdFx0IWV4aXN0aW5nVXNlclJlc3BvbnNlLmV4aXN0aW5nRW1haWwgJiZcblx0XHRleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ1VzZXJuYW1lXG5cdCkge1xuXHRcdGV4aXN0aW5nRXJyTXNnLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRleGlzdGluZ0Vyck1zZy50ZXh0Q29udGVudCA9IFwiVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlblwiO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2VVc2VyRGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy91c2VyL0lEXCIpO1xuXHRjb25zdCByZXNwb25zZVVzZXIgPSBhd2FpdCByZXNwb25zZVVzZXJEYXRhLmpzb24oKTtcblxuXHRsZXQgdXNlcklkID0ge1xuXHRcdGlkOiByZXNwb25zZVVzZXIuaWQsXG5cdH07XG5cblx0Y29uc3QgZmV0Y2hVUkxFZGl0ID0gYC9hcGkvdXNlcnMvJHt1c2VySWQuaWR9YDtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTEVkaXQsIHtcblx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlclVwZGF0ZSksXG5cdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHR9KTtcblx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfdXNlcl9zZWN0aW9uXCIpXG5cdFx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblx0XHRyZW5kZXJCb29rcygpO1xuXHR9IGVsc2Uge1xuXHRcdGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSB1c2VyLlwiKTtcblx0fVxufVxuXG5jb25zdCBlZGl0VXNlckZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdXNlclwiKTtcbmVkaXRVc2VyRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFVzZXIpO1xuIiwiZXhwb3J0IGNvbnN0IGZldGNoQm9va0luZm8gPSBhc3luYyAocXVlcnkpID0+IHtcblx0Y29uc3QgbGliVXJsQVBJID0gXCJodHRwOi8vb3BlbmxpYnJhcnkub3JnL3NlYXJjaC5qc29uP3E9XCI7XG5cdGNvbnN0IGNsZWFuUXVlcnlTdHIgPSBxdWVyeS5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG5cdGNvbnN0IGxpYkFQSVF1ZXJ5U3RyID0gbGliVXJsQVBJICsgY2xlYW5RdWVyeVN0cjtcblxuXHRjb25zdCByZXNwb25zZUxpYnJhcnlEYXRhID0gYXdhaXQgZmV0Y2gobGliQVBJUXVlcnlTdHIpO1xuXHRjb25zdCByZXNwb25zZUxpYnJhcnkgPSBhd2FpdCByZXNwb25zZUxpYnJhcnlEYXRhLmpzb24oKTtcblxuXHRjb25zb2xlLmxvZyhyZXNwb25zZUxpYnJhcnkpO1xuXHRyZXR1cm4gcmVzcG9uc2VMaWJyYXJ5O1xufTtcblxuZmV0Y2hCb29rSW5mbyhcImxvcmQgb2YgdGhlIHJpbmdzXCIpO1xuIiwiLy9oYW1idXJnZXIgbW9iaWxlIG1lbnVcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1lbnVcIik7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0bmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG4iLCIvLyBQUk9HUkVTUyBCQVJcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9ncmVzc0JhciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgY3VycmVudEJvb2tzRGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ib29rc1wiKTtcblx0bGV0IGN1cnJlbnRCb29rcyA9IGF3YWl0IGN1cnJlbnRCb29rc0RhdGEuanNvbigpO1xuXG5cdGNvbnN0IGN1cnJlbnRCb29rc1JlYWRDb3VudCA9IGN1cnJlbnRCb29rcy5maWx0ZXIoXG5cdFx0KGJvb2spID0+IGJvb2suaXNfcmVhZCA9PT0gdHJ1ZVxuXHQpLmxlbmd0aDtcblx0Y29uc3QgY3VycmVudEJvb2tzVG90YWxDb3VudCA9IGN1cnJlbnRCb29rcy5sZW5ndGg7XG5cdC8vIEJPT0sgVE9UQUxTIERJU1BMQVlcblx0Y29uc3QgYm9va1JlYWREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rcy1yZWFkLWRpc3BsYXlcIik7XG5cdGJvb2tSZWFkRGlzcGxheS50ZXh0Q29udGVudCA9IGBCb29rcyByZWFkOiAke2N1cnJlbnRCb29rc1JlYWRDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tzLXRvdGFsLWRpc3BsYXlcIik7XG5cdGJvb2tUb3RhbERpc3BsYXkudGV4dENvbnRlbnQgPSBgQm9va3MgdG90YWw6ICR7Y3VycmVudEJvb2tzVG90YWxDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tSZWFkRGlzcGxheUhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLmJvb2tzLXJlYWQtZGlzcGxheS1oZXJvXCJcblx0KTtcblx0Ym9va1JlYWREaXNwbGF5SGVyby50ZXh0Q29udGVudCA9IGBCb29rcyByZWFkOiAke2N1cnJlbnRCb29rc1JlYWRDb3VudH1gO1xuXG5cdGNvbnN0IGJvb2tUb3RhbERpc3BsYXlIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5ib29rcy10b3RhbC1kaXNwbGF5LWhlcm9cIlxuXHQpO1xuXHRib29rVG90YWxEaXNwbGF5SGVyby50ZXh0Q29udGVudCA9IGBCb29rcyB0b3RhbDogJHtjdXJyZW50Qm9va3NUb3RhbENvdW50fWA7XG5cblx0Ly8gUFJPR1JFU1MgQkFSIERJU1BMQVlcblx0Y29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLWJhclwiKTtcblx0Y29uc3QgcHJvZ3Jlc3NCYXJIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy1iYXItaGVyb1wiKTtcblxuXHRsZXQgcHJvZ3Jlc3NXaWR0aDtcblx0aWYgKGN1cnJlbnRCb29rc1JlYWRDb3VudCA9PT0gMCAmJiBjdXJyZW50Qm9va3NUb3RhbENvdW50ID09PSAwKSB7XG5cdFx0cHJvZ3Jlc3NXaWR0aCA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cHJvZ3Jlc3NXaWR0aCA9IE1hdGguZmxvb3IoXG5cdFx0XHQoY3VycmVudEJvb2tzUmVhZENvdW50IC8gY3VycmVudEJvb2tzVG90YWxDb3VudCkgKiAxMDBcblx0XHQpO1xuXHR9XG5cblx0cHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1dpZHRofSVgO1xuXHRwcm9ncmVzc0Jhckhlcm8uc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1dpZHRofSVgO1xufTtcbiIsImltcG9ydCBcIi4uLy4uL2Nzcy9saWJyYXJ5U3R5bGUuY3NzXCI7XG5cbmltcG9ydCBcIi4vaGFtYnVyZ2VyTWVudVwiO1xuaW1wb3J0IFwiLi9sb2dvdXRcIjtcbmltcG9ydCBcIi4vYWRkQm9va0Zvcm1cIjtcbmltcG9ydCBcIi4vZWRpdEJvb2tGb3JtXCI7XG5pbXBvcnQgXCIuL2VkaXRVc2VyRm9ybVwiO1xuaW1wb3J0IFwiLi4vdGhlbWVUb2dnbGVcIjtcblxuLy9pbWFnZXNcblxuXG5pbXBvcnQgeyByZW5kZXJCb29rcyB9IGZyb20gXCIuL3JlbmRlckJvb2tzLmpzXCJcbmltcG9ydCB7IHJlbmRlclByb2dyZXNzQmFyIH0gZnJvbSBcIi4vaGVyb0Rpc3BsYXkuanNcIlxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHQvLyBzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG5cdC8vIHNldEN1cnJlbnRCb29rcyhjdXJyZW50Qm9va3MpO1xuXHRyZW5kZXJQcm9ncmVzc0JhcigpO1xuXHRyZW5kZXJCb29rcygpO1xufTtcbiIsImNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvbG9nb3V0XCIsIHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG5cblx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG5cdH0gZWxzZSB7XG5cdFx0YWxlcnQoXCJGYWlsZWQgdG8gbG9nIG91dC5cIik7XG5cdH1cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2dvdXQpO1xuIiwiaW1wb3J0IHsgZmV0Y2hCb29rSW5mbyB9IGZyb20gXCIuL2ZldGNoQm9va0luZm8uanNcIlxuXG5leHBvcnQgY29uc3QgcmVuZGVyQm9va3MgPSBhc3luYyBmdW5jdGlvbiAoc2VhcmNoVGVybSA9IFwiXCIpIHtcblx0Y29uc3QgYm9va0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1jYXJkLWNvbnRhaW5lclwiKTtcblx0Ym9va0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGNvbnN0IGN1cnJlbnRCb29rc0RhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvYm9va3NcIik7XG5cdGxldCBjdXJyZW50Qm9va3MgPSBhd2FpdCBjdXJyZW50Qm9va3NEYXRhLmpzb24oKTtcblxuXHRjb25zdCBsb3dlclNlYXJjaFRlcm0gPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG5cdGlmIChsb3dlclNlYXJjaFRlcm0gIT09IFwiXCIgJiYgdHlwZW9mIGxvd2VyU2VhcmNoVGVybSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNvbnN0IGZpbHRlcmVkQ3VycmVudEJvb2tzID0gY3VycmVudEJvb2tzLmZpbHRlcigoYm9vaykgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0Ym9vay50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyU2VhcmNoVGVybSkgfHxcblx0XHRcdFx0Ym9vay5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaFRlcm0pXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdGN1cnJlbnRCb29rcyA9IGZpbHRlcmVkQ3VycmVudEJvb2tzO1xuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Qm9va3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBib29rID0gY3VycmVudEJvb2tzW2ldO1xuXHRcdGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdGlmIChib29rLmlzX3JlYWQgPT09IHRydWUgfHwgYm9vay5pc19yZWFkID09PSBcInRydWVcIikge1xuXHRcdFx0Ym9va0NhcmQuY2xhc3NMaXN0LmFkZChcInJlYWRcIik7XG5cdFx0fSBlbHNlIGlmIChib29rLmlzX3JlYWQgPT09IGZhbHNlKSBib29rQ2FyZC5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XG5cblx0XHRib29rQ2FyZC5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLWJvb2tcIiwgXCJzY2FsZS1pbi1jZW50ZXJcIik7XG5cdFx0Ym9va0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib29rLVwiICsgaSk7XG5cdFx0Ym9va0NhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcblxuXHRcdC8vIENMT1NFIEFORCBERUxFVEVcblx0XHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiLCBcInJlbW92ZS1ib29rXCIpO1xuXHRcdGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCIgY2xvc2UgXCI7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGZldGNoVVJMID0gYC9hcGkvYm9va3MvJHtib29rLmlkfWA7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVVJMLCB7XG5cdFx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdHJlbmRlclByb2dyZXNzQmFyKCk7XG5cdFx0XHRcdHJlbmRlckJvb2tzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGVydChcIkZhaWxlZCB0byBkZWxldGUgYm9vay5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gRURJVCBCVVRUT05cblx0XHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIiwgXCJlZGl0LWJvb2stZm9ybS1vcGVuXCIpO1xuXHRcdGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIiBlZGl0IFwiO1xuXHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0Ly8gU0hPVyBFRElUIEZPUk1cblx0XHRcdGRvY3VtZW50XG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfYm9va19zZWN0aW9uXCIpXG5cdFx0XHRcdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrO1wiKTtcblxuXHRcdFx0bGV0IGJvb2tDYXJkQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXMpO1xuXG5cdFx0XHRsZXQgZXhpc3RpbmdCb29rSW5mbyA9IHtcblx0XHRcdFx0dGl0bGU6IGJvb2tDYXJkQ2hpbGRyZW5bMl0udGV4dENvbnRlbnQsXG5cdFx0XHRcdGF1dGhvcjogYm9va0NhcmRDaGlsZHJlblszXS50ZXh0Q29udGVudC5zcGxpdChcIiBcIikuc2xpY2UoMSkuam9pbihcIiBcIiksXG5cdFx0XHRcdGlzYm46IGJvb2tDYXJkQ2hpbGRyZW5bNF0udGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdLFxuXHRcdFx0XHRwYWdlczogYm9va0NhcmRDaGlsZHJlbls1XS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbM10sXG5cdFx0XHRcdGVkaXRpb246IGJvb2tDYXJkQ2hpbGRyZW5bNl0udGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdLFxuXHRcdFx0XHRwdWJsaXNoX2RhdGU6IGJvb2tDYXJkQ2hpbGRyZW5bN10udGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzFdLFxuXHRcdFx0XHRpc19yZWFkOiBib29rQ2FyZENoaWxkcmVuWzldLmZpcnN0Q2hpbGQuY2hlY2tlZCxcblx0XHRcdFx0Ym9va19pZDogYm9vay5pZCxcblx0XHRcdH07XG5cblx0XHRcdC8vIFBPUFVMQVRFIElOUFVUUyBXSVRIIERFRkFVTFQgQ09OVEVOVFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXRpdGxlLWVkaXRcIikudmFsdWUgPSBleGlzdGluZ0Jvb2tJbmZvLnRpdGxlO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWF1dGhvci1lZGl0XCIpLnZhbHVlID0gZXhpc3RpbmdCb29rSW5mby5hdXRob3I7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItaXNibi1lZGl0XCIpLnZhbHVlID0gZXhpc3RpbmdCb29rSW5mby5pc2JuO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXBhZ2VzLWVkaXRcIikudmFsdWUgPSBleGlzdGluZ0Jvb2tJbmZvLnBhZ2VzO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWVkaXRpb24tZWRpdFwiKS52YWx1ZSA9XG5cdFx0XHRcdGV4aXN0aW5nQm9va0luZm8uZWRpdGlvbjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wdWJsaXNoaW5nX2RhdGUtZWRpdFwiKS52YWx1ZSA9XG5cdFx0XHRcdGV4aXN0aW5nQm9va0luZm8ucHVibGlzaF9kYXRlO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXJlYWRfc3RhdHVzLWVkaXRcIikudmFsdWUgPVxuXHRcdFx0XHRleGlzdGluZ0Jvb2tJbmZvLmlzX3JlYWQ7XG5cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1ib29rLWlkXCIpLmRhdGFzZXQuYm9va0lkID1cblx0XHRcdFx0ZXhpc3RpbmdCb29rSW5mby5ib29rX2lkO1xuXHRcdH0pO1xuXHRcdC8vIEJPT0sgQ09WRVIgSU1HXG5cdFx0Y29uc3QgYm9va0NvdmVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRib29rQ292ZXJJbWcuY2xhc3NMaXN0LmFkZChcImJvb2stY292ZXItaW1nXCIpO1xuXHRcdGJvb2tDb3ZlckltZy5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcInNyY1wiLFxuXHRcdFx0XCIuLi9hc3NldHMvaW1nL2Jvb2stY292ZXItcGxhY2Vob2xkZXIuanBlZ1wiXG5cdFx0KTtcblx0XHRib29rQ292ZXJJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYm9vayBjb3ZlciBpbWFnZVwiKTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRib29rVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvb2stdGl0bGVcIik7XG5cdFx0Ym9va1RpdGxlLnRleHRDb250ZW50ID0gYm9vay50aXRsZTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJib29rLWF1dGhvclwiKTtcblx0XHRjb25zdCBsYWJlbEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJiLWxhYmVsXCIpO1xuXHRcdGxhYmVsQXV0aG9yLnRleHRDb250ZW50ID0gXCJCeTogXCI7XG5cdFx0Y29uc3QgYXV0aG9yRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGF1dGhvckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImF1dGhvclwiKTtcblx0XHRhdXRob3JEaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5hdXRob3I7XG5cdFx0Ym9va0F1dGhvci5hcHBlbmQobGFiZWxBdXRob3IsIGF1dGhvckRpc3BsYXkpO1xuXHRcdC8vXG5cdFx0Y29uc3QgYm9va0lzYm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rSXNibi5jbGFzc0xpc3QuYWRkKFwiYm9vay1pc2JuXCIpO1xuXHRcdGNvbnN0IGxhYmVsSXNibiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsSXNibi5jbGFzc0xpc3QuYWRkKFwiYi1sYWJlbFwiKTtcblx0XHRsYWJlbElzYm4udGV4dENvbnRlbnQgPSBcIklTQk46IFwiO1xuXHRcdGNvbnN0IGlzYm5EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0aXNibkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImlzYm5cIik7XG5cdFx0aXNibkRpc3BsYXkudGV4dENvbnRlbnQgPSBib29rLmlzYm47XG5cdFx0Ym9va0lzYm4uYXBwZW5kKGxhYmVsSXNibiwgaXNibkRpc3BsYXkpO1xuXHRcdC8vXG5cdFx0Y29uc3QgcGFnZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHBhZ2VzQ291bnQuY2xhc3NMaXN0LmFkZChcInBhZ2VzLWNvdW50XCIpO1xuXHRcdGNvbnN0IGxhYmVsUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRsYWJlbFBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJiLWxhYmVsXCIpO1xuXHRcdGxhYmVsUGFnZXMudGV4dENvbnRlbnQgPSBcIlBhZ2VzOiBcIjtcblx0XHRjb25zdCBib29rUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rUGFnZXMuY2xhc3NMaXN0LmFkZChcInBhZ2VzXCIpO1xuXHRcdGJvb2tQYWdlcy50ZXh0Q29udGVudCA9IGJvb2sucGFnZXM7XG5cdFx0cGFnZXNDb3VudC5hcHBlbmQobGFiZWxQYWdlcywgYm9va1BhZ2VzKTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tFZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0Ym9va0VkaXRpb24uY2xhc3NMaXN0LmFkZChcImJvb2stZWRpdGlvblwiKTtcblx0XHRjb25zdCBsYWJlbEVkaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRsYWJlbEVkaXRpb24uY2xhc3NMaXN0LmFkZChcImItbGFiZWxcIik7XG5cdFx0bGFiZWxFZGl0aW9uLnRleHRDb250ZW50ID0gXCJFZGl0aW9uOiBcIjtcblx0XHRjb25zdCBlZGl0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGVkaXRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJlZGl0aW9uXCIpO1xuXHRcdGVkaXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5lZGl0aW9uO1xuXHRcdGJvb2tFZGl0aW9uLmFwcGVuZChsYWJlbEVkaXRpb24sIGVkaXRpb25EaXNwbGF5KTtcblx0XHQvL1xuXHRcdGNvbnN0IHB1Ymxpc2hEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0cHVibGlzaERhdGUuY2xhc3NMaXN0LmFkZChcImJvb2stcHVibGlzaGVkXCIpO1xuXHRcdGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsRGF0ZS5jbGFzc0xpc3QuYWRkKFwiYi1sYWJlbFwiKTtcblx0XHRsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIlB1Ymxpc2hlZDogXCI7XG5cdFx0Y29uc3QgZGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRkYXRlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHVibGlzaC1kYXRlXCIpO1xuXHRcdGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5wdWJsaXNoX2RhdGU7XG5cdFx0cHVibGlzaERhdGUuYXBwZW5kKGxhYmVsRGF0ZSwgZGF0ZURpc3BsYXkpO1xuXHRcdC8vIEZFVENIIEJVVFRPTlxuXG5cdFx0Y29uc3QgZmV0Y2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRmZXRjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIiwgXCJmZXRjaC1ib29rLWRhdGEtYnV0dG9uXCIpO1xuXHRcdGZldGNoQnRuLnRleHRDb250ZW50ID0gXCIgZmV0Y2ggaW5mbyBcIjtcblx0XHRmZXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zdCBib29rRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2hCb29rSW5mbyhcblx0XHRcdFx0Ym9vay50aXRsZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGJvb2tEYXRhID0gYm9va0RhdGFSZXNwb25zZS5kb2NzWzBdO1xuXG5cdFx0XHRjb25zdCBmZXRjaGVkQm9va0RhdGEgPSB7XG5cdFx0XHRcdHRpdGxlOiBib29rRGF0YS50aXRsZSxcblx0XHRcdFx0YXV0aG9yOiBib29rRGF0YS5hdXRob3JfbmFtZVswXSxcblx0XHRcdFx0aXNibjogYm9va0RhdGEuaXNiblswXSxcblx0XHRcdFx0cHVibGlzaF9kYXRlOiBib29rRGF0YS5maXJzdF9wdWJsaXNoX3llYXIsXG5cdFx0XHRcdGNvdmVyX2ltZ19zcmM6IGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pc2JuLyR7Ym9va0RhdGEuaXNiblswXX0tTS5qcGdgLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcmVwbGFjZUJvb2tEYXRhID0gKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGF1dGhvcixcblx0XHRcdFx0aXNibixcblx0XHRcdFx0cHVibGlzaF9kYXRlLFxuXHRcdFx0XHRjb3Zlcl9pbWdfc3JjLFxuXHRcdFx0fSkgPT4ge1xuXHRcdFx0XHRib29rVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblx0XHRcdFx0Ym9va0F1dGhvci50ZXh0Q29udGVudCA9IGF1dGhvcjtcblx0XHRcdFx0Ym9va0lzYm4udGV4dENvbnRlbnQgPSBpc2JuO1xuXHRcdFx0XHRwdWJsaXNoRGF0ZS50ZXh0Q29udGVudCA9IHB1Ymxpc2hfZGF0ZTtcblx0XHRcdFx0Ym9va0NvdmVySW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb3Zlcl9pbWdfc3JjKTtcblx0XHRcdH07XG5cblx0XHRcdHJlcGxhY2VCb29rRGF0YShmZXRjaGVkQm9va0RhdGEpO1xuXHRcdH0pO1xuXHRcdC8vIFJFQUQgVE9HR0xFXG5cdFx0Y29uc3QgcmVhZFRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0cmVhZFRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyZWFkX3RvZ2dsZV9sYWJlbFwiKTtcblx0XHRyZWFkVG9nZ2xlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgYXMgcmVhZDogXCI7XG5cdFx0Ly9cblx0XHRjb25zdCB0b2dnbGVDb250cm9sTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0dG9nZ2xlQ29udHJvbExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XG5cdFx0Y29uc3QgdG9nZ2xlQ29udHJvbENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHRvZ2dsZUNvbnRyb2xDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdFx0dG9nZ2xlQ29udHJvbENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJyZWFkX3RvZ2dsZVwiKTtcblx0XHQvLyBpZiAoYm9vay5pc19yZWFkPT09dHJ1ZSkgdG9nZ2xlQ29udHJvbENoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cdFx0aWYgKGJvb2suaXNfcmVhZCA9PT0gdHJ1ZSB8fCBib29rLmlzX3JlYWQgPT09IFwidHJ1ZVwiKVxuXHRcdFx0dG9nZ2xlQ29udHJvbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdC8vIGlmIChib29rUmVhZFN0YXR1c0Zvcm0udmFsdWUgPT09IHRydWUpIHRvZ2dsZUNvbnRyb2xDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRjb25zdCB0b2dnbGVDb250cm9sU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHRvZ2dsZUNvbnRyb2xTcGFuLmNsYXNzTGlzdC5hZGQoXCJyZWFkLXRvZ2dsZS1zbGlkZXJcIiwgXCJyb3VuZFwiKTtcblx0XHR0b2dnbGVDb250cm9sTGFiZWwuYXBwZW5kKHRvZ2dsZUNvbnRyb2xDaGVja2JveCwgdG9nZ2xlQ29udHJvbFNwYW4pO1xuXHRcdC8vXG5cblx0XHR0b2dnbGVDb250cm9sQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdGxldCBib29rQ29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRcdGlmIChib29rQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1yZWFkXCIpKSB7XG5cdFx0XHRcdGJvb2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1yZWFkXCIpO1xuXHRcdFx0XHRib29rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xuXHRcdFx0fSBlbHNlIGlmIChib29rQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInJlYWRcIikpIHtcblx0XHRcdFx0Ym9va0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZFwiKTtcblx0XHRcdFx0Ym9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW5kZXggPSBib29rQ29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50Qm9va3NbaW5kZXhdLmlzX3JlYWQgPSBlbGVtZW50LmNoZWNrZWQ7XG5cblx0XHRcdGNvbnN0IG5ld1JlYWRTdGF0dXNEYXRhID0ge1xuXHRcdFx0XHRpc19yZWFkOiBjdXJyZW50Qm9va3NbaW5kZXhdLmlzX3JlYWQsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBmZXRjaFVSTCA9IGAvYXBpL2Jvb2tzLyR7Ym9vay5pZH1gO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwge1xuXHRcdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1JlYWRTdGF0dXNEYXRhKSxcblx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0cmVuZGVyUHJvZ3Jlc3NCYXIoKTtcblx0XHRcdFx0cmVuZGVyQm9va3MoKTtcblx0XHRcdFx0Ly8gLy8gZGlyZWN0IGxvZ2dlZC1pbiB1c2VyIHRvIGhvbWUgcGFnZVxuXHRcdFx0XHQvLyBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBib29rIHJlYWQgc3RhdHVzLlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVuZGVyQm9va3MoKTtcblx0XHR9KTtcblxuXHRcdGJvb2tDYXJkLmFwcGVuZChcblx0XHRcdGNsb3NlQnRuLFxuXHRcdFx0ZWRpdEJ0bixcblx0XHRcdGJvb2tDb3ZlckltZyxcblx0XHRcdGJvb2tUaXRsZSxcblx0XHRcdGJvb2tBdXRob3IsXG5cdFx0XHRib29rSXNibixcblx0XHRcdHBhZ2VzQ291bnQsXG5cdFx0XHRib29rRWRpdGlvbixcblx0XHRcdHB1Ymxpc2hEYXRlLFxuXHRcdFx0ZmV0Y2hCdG4sXG5cdFx0XHRyZWFkVG9nZ2xlTGFiZWwsXG5cdFx0XHR0b2dnbGVDb250cm9sTGFiZWxcblx0XHQpO1xuXHRcdGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xuXHR9XG59O1xuIiwiLy9VU0VSIENPTlNUUlVDVE9SXG5leHBvcnQgY29uc3QgVXNlciA9IGZ1bmN0aW9uICh7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkge1xuXHRyZXR1cm4ge1xuXHRcdHVzZXJuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdHBhc3N3b3JkLFxuXHR9O1xufTtcblxuLy8gQ0xBU1MgVkVSU0lPTiAvL1xuLy8gY2xhc3MgVXNlciB7XG4vLyBcdGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbi8vIFx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4vLyBcdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuLy8gXHRcdHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbi8vIFx0fVxuLy8gfVxuIiwiY29uc3QgREVGQVVMVF9USEVNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xubGV0IGN1cnJlbnRUaGVtZSA9IERFRkFVTFRfVEhFTUU7XG5cbmNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXItY29udGFpbmVyXCIpO1xuY29uc3QgaGVyb0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWNvbnRhaW5lclwiKTtcbmNvbnN0IGJvb2tTZWN0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stY29udGFpbmVyXCIpO1xuY29uc3QgYWRkQm9va0Zvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX2Jvb2tfc2VjdGlvblwiKTtcbmNvbnN0IGZhdmljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2aWNvblwiKTtcbmNvbnN0IHNpdGVMb2dvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nb1wiKTtcbmNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZS10b2dnbGVcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VGhlbWUobmV3VGhlbWUpIHtcblx0Y3VycmVudFRoZW1lID0gbmV3VGhlbWU7XG5cdGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XG5cdFx0aGVhZGVyRWwuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG5cdFx0aGVyb0VsLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuXHRcdGJvb2tTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG5cdFx0YWRkQm9va0Zvcm1FbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcblx0XHRmYXZpY29uRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4uL2Fzc2V0cy9pY29ucy9mYXZpY29uX2xpZ2h0Lmljb1wiKTtcblx0XHRzaXRlTG9nb0VsLnNldEF0dHJpYnV0ZShcblx0XHRcdFwic3JjXCIsXG5cdFx0XHRcIi4uL2Fzc2V0cy9pY29ucy9ib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmVfbGlnaHQuc3ZnXCJcblx0XHQpO1xuXHRcdHRoZW1lVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbnRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0bGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdGlmIChlbGVtZW50LmNoZWNrZWQpIHtcblx0XHRoZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRoZXJvRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0Ym9va1NlY3Rpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRhZGRCb29rRm9ybUVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGZhdmljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiLi4vYXNzZXRzL2ljb25zL2Zhdmljb25fbGlnaHQuaWNvXCIpO1xuXHRcdHNpdGVMb2dvRWwuc2V0QXR0cmlidXRlKFxuXHRcdFx0XCJzcmNcIixcblx0XHRcdFwiLi9hc3NldHMvaWNvbnMvYm9vay1vcGVuLXBhZ2UtdmFyaWFudC1vdXRsaW5lX2xpZ2h0LnN2Z1wiXG5cdFx0KTtcblx0XHRzZXRDdXJyZW50VGhlbWUoXCJkYXJrXCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGhlcm9FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRib29rU2VjdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGFkZEJvb2tGb3JtRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0ZmF2aWNvbkVsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9hc3NldHMvaWNvbnMvZmF2aWNvbi5pY29cIik7XG5cdFx0c2l0ZUxvZ29FbC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcInNyY1wiLFxuXHRcdFx0XCIuLi9hc3NldHMvaWNvbnMvYm9vay1vcGVuLXBhZ2UtdmFyaWFudC1vdXRsaW5lLnN2Z1wiXG5cdFx0KTtcblx0XHRzZXRDdXJyZW50VGhlbWUoXCJsaWdodFwiKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG5cdH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9tYWduaWZ5LXdoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWcvYm9vay13YWxsLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL3BsdXMtYmxhY2sucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC8qIG1haW4gdGhlbWUgKi9cXG4gICAgLS13aGl0ZTogd2hpdGU7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2Y4ZjlmYTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNlOWVjZWY7XFxuXFxuICAgIC0tcHJpbWFyeS1kYXJrLWJsdWU6ICMzYTBjYTM7XFxuICAgIC0tcHJpbWFyeS1saWdodC1ibHVlOiAjNGNjOWYwO1xcbiAgICAtLXByaW1hcnktZGFyay1wdXJwbGU6ICM3MjA5Yjc7XFxuICAgIC0tc2Vjb25kYXJ5LW1pZC1ibHVlOiAjNDM2MWVlO1xcblxcbiAgICAtLWhpZ2hsaWdodC1waW5rOiAjZjcyNTg1O1xcblxcbiAgICAtLWJsYWNrOiAjMDAwO1xcbiAgICAtLXByaW1hcnktZGFyazogIzIxMjUyOTtcXG4gICAgLS1zZWNvbmRhcnktZGFyay1ncmF5OiAjOTc5ZGFjO1xcbiAgICAvKiBEQVJLIE1PREUgQkVMT1cgKi9cXG4gICAgLyogT1RIRVIgVEhFTUUgQkVMT1cgKi9cXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4vKiBEQVJLIE1PREUgKi9cXG4jaGVhZGVyLWNvbnRhaW5lci5kYXJrIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgzZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmstYmx1ZSkgODAlLCB2YXIoLS1zZWNvbmRhcnktbWlkLWJsdWUpKTsgXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuI2hlYWRlci1jb250YWluZXIuZGFyayAuYm9vay10b3RhbHMge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbiNoZWFkZXItY29udGFpbmVyLmRhcmsgI3NlYXJjaC1pY29uIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG5kaXYjaGVyby1jb250YWluZXIuZGFyayB7XFxuICAgIC8qIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpO1xcbiAgICAgKi9cXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTsgXFxufVxcbiNib29rLWNvbnRhaW5lci5kYXJrIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG4jb3JkZXJfYnksXFxuI29yZGVyX2RpcmVjdGlvbixcXG5oZWFkZXIuZGFyayA+IC5oZWFkZXIgPiAuaGFtYnVyZ2VyID4gLmJhciAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuXFxuLmRhcmsgKiAubmF2LWxpbmsge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcblxcbi5kYXJrICogLmFkZC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbi5kYXJrICogI2FkZC1ib29rLXBsdXMge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4vKiAtLS0tQ09OVEFJTkVSICovXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGRpc3BsYXk6Z3JpZDsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7ICovXFxufVxcbi8qIHRhcmdldCBwYWdlIHNlY3Rpb25zICovXFxuLmNvbnRhaW5lciA+ICoge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7ICovXFxufVxcbi8qIHRhcmdldCB3cmFwcGVycyB3aXRoaW4gcGFnZSBzZWN0aW9ucyAqL1xcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6ICBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAgMTBweDtcXG59XFxuLyogLS0tLUhFQURFUiAqL1xcbiNoZWFkZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodCkgODAlLCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpKTsgXFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMTBweCAtMTVweCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgLypcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW4tY29udGVudCkgbWlubWF4KDc1cHgsMWZyKTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw3NXB4KSBtaW5tYXgoNzVweCwxZnIpOyAqL1xcbiAgICAvKmdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMS4ycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAqL1xcbn1cXG4uaGVhZGVyICB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsbWluLWNvbnRlbnQpIG1pbm1heCg3NXB4LDFmcik7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heChtaW4tY29udGVudCwgNzVweCkpO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDc1cHgpIG1pbm1heCg3NXB4LDFmcik7ICovXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMS4ycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIC5hZGQtYm9vayxcXG4uYWRkLWJvb2stZm9ybS1vcGVuIHtcXG4gICAgcGFkZGluZzogLjNyZW07XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgLyogbWF4LXdpZHRoOiA3NXB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4uYWRkLWJvb2stZm9ybS1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaGxpZ2h0LXBpbmspO1xcbn1cXG4uYWRkLWJvb2stZm9ybS1vcGVuOmhvdmVyLFxcbi5hZGQtYm9vay1mb3JtLW9wZW46Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybS1vcGVuOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcbi5hZGQtYm9vay1mb3JtLW9wZW46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcXG59XFxuXFxuI2FkZC1ib29rLXBsdXMge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4udGhlbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBUT0dHTEUgQlVUVE9OICovXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlcixcXG4ucmVhZC10b2dnbGUtc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSk7XFxuICAgIC8qIHRyYW5zaXRpb24gdG8gY29sb3Igb25jZSBjaGVja2VkICovXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlLFxcbi5yZWFkLXRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4vKiB0cmFuc2l0aW9uIG9mIHN3aXRjaCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi8qIHRyYW5zaXRpb24gb2YgLnNsaWRlcjpiZWZvcmUgLSB0aGUgdG9nZ2xlIHN3aXRjaCBjaXJjbGUgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUsXFxuaW5wdXQ6Y2hlY2tlZCArIC5yZWFkLXRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCxcXG4ucmVhZC10b2dnbGUtc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50b2dnbGUtdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogUkVBRCBUT0dHTEUgKi9cXG4uc2luZ2xlLWJvb2sgLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICByaWdodDogN3B4O1xcbiAgICBib3R0b206IDRweDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5yZWFkLXRvZ2dsZS1zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5yZWFkLXRvZ2dsZS1zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSk7IFxcbn1cXG5cXG4vKiBOQVZJR0FUSU9OICovXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlYWRlciB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmhlYWRlciB1bCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2LWxpbmsge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstYmx1ZSk7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJhciB7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgbWFyZ2luOiA1cHggYXV0bztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBcXG5+fiAgSEVSTyBTRUNUSU9OIH5+XFxuKi9cXG4jaGVyby1jb250YWluZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstYmx1ZSk7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLyogLmhlcm8ge1xcbiAgICBwYWRkaW5nOjAuOHJlbTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTs7XFxuICAgXFxufSAqL1xcbi5oZWFkZXIgI3NlYXJjaC1zZWN0aW9uLFxcbi5oZXJvICNzZWFyY2gtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcXG59XFxuLmhlYWRlciAjYm9vay1zZWFyY2gsXFxuLmhlcm8gI2Jvb2stc2VhcmNoIHtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG59XFxuXFxuXFxuLmJvb2stdG90YWxzLFxcbi5ib29rLXRvdGFscy1oZXJvIHtcXG4gICAgYm9yZGVyOiB2YXIoLS1oaWdobGlnaHQtcGluaykgMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbn1cXG4uYm9vay1wcm9ncmVzcy1iYXIsXFxuLmJvb2stcHJvZ3Jlc3MtYmFyLWhlcm8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xcbn1cXG4ucHJvZ3Jlc3MtYmFyLFxcbi5wcm9ncmVzcy1iYXItaGVybyB7XFxuICAgIC8qIHdpZHRoOiAxMCU7ICovXFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0LXBpbmspO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFxcbn5+ICBCT09LIFNFQ1RJT04gfn5cXG4qL1xcblxcbiNib29rLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDM4LCAyMDcpOyAqL1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbn1cXG5cXG4uYm9vay1zZWN0aW9uIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDsgKi9cXG4gICAgcGFkZGluZzoxcmVtO1xcbn1cXG5cXG4uYm9vay1zb3J0LXN0YXR1cy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib29rLXNlY3Rpb24gLnNvcnQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuLmJvb2stc2VjdGlvbiAuc29ydCBzZWxlY3Qge1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCByZ2JhKDkzLCAxMDQsIDExNiwgMC41KSAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcbn1cXG4uYm9vay1zZWN0aW9uIC5zdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5zdGF0dXMgLnJlYWRfY29sb3Ige1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpIDAlLCB2YXIoLS1oaWdobGlnaHQtcGluaykgMTAwJSk7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxufVxcbi5zdGF0dXMgLnVucmVhZF9jb2xvciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpIDAlLCB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KSAxMDAlKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW46IDAuMnJlbTtcXG59XFxuLyogXFxuICAgIEJPT0sgQ0FSRFNcXG4qL1xcbi5ib29rLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2NhbGUtaW4tY2VudGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbiAgICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbn1cXG5cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpLCAwIDJweCA0cHggLTFweCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpIDAlLCB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KSAxMDAlKTtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rID4gKiB7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayAuYm9vay10aXRsZSxcXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stYXV0aG9yIHtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyBcXG4gICAgbWF4LXdpZHRoOiAyMGNoO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAucmVhZCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSkgMCUsIHZhcigtLWhpZ2hsaWdodC1waW5rKSAxMDAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAubm90LXJlYWQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSkgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnJlbW92ZS1ib29rIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLmVkaXQtYm9vay1mb3JtLW9wZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMzVweDtcXG4gICAgLyogd2lkdGg6IDEwcHg7ICovXFxuICAgIGhlaWdodDogMjA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5mZXRjaC1ib29rLWRhdGEtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDY1cHg7XFxuICAgIC8qIHdpZHRoOiAxMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDIwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuYm9vay1jb3Zlci1pbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgcmlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmJvb2stY2FyZC1jb250YWluZXIgLnJlYWRfdG9nZ2xlX2xhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA2NXB4O1xcbiAgICBib3R0b206IDcuNXB4O1xcbn1cXG4vKiBcXG4gICAgRk9STSBTRUNUSU9OXFxuKi9cXG4uYWRkX2Jvb2tfc2VjdGlvbixcXG4ubG9naW5fc2VjdGlvbixcXG4uc2lnbnVwX3NlY3Rpb24sXFxuLmVkaXRfYm9va19zZWN0aW9uLFxcbi5lZGl0X3VzZXJfc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qIGhpZGUgZm9yIG5vdyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctYm9vay1mb3JtLFxcbi5sb2dpbi1mb3JtLFxcbi5zaWdudXAtZm9ybSxcXG4uZWRpdC1ib29rLWZvcm0sXFxuLmVkaXQtdXNlci1mb3JtIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDNkM2QzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uY2xvc2UtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG59XFxuLmNsb3NlLWZvcm06aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWJvb2stZm9ybSBoNCxcXG4ubG9naW4tZm9ybSBoNCwgXFxuLnNpZ251cC1mb3JtIGg0LFxcbi5lZGl0LWJvb2stZm9ybSBoNCxcXG4uZWRpdC11c2VyLWZvcm0gaDQge1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0uOHJlbTtcXG59XFxuXFxuLmVkaXQtdXNlci1mb3JtIC5leGlzdGluZy1lcnItbXNnIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubmV3LWJvb2stZm9ybSBpbnB1dCxcXG4ubG9naW4tZm9ybSBpbnB1dCxcXG4uc2lnbnVwLWZvcm0gaW5wdXQsXFxuLmVkaXQtYm9vay1mb3JtIGlucHV0LFxcbi5lZGl0LXVzZXItZm9ybSBpbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuN3JlbTtcXG59XFxuXFxuLmVyci1tc2cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jbG9naW4tZXJyLW5vLXVzZXItZW1haWwge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IC4xcmVtIC4ycmVtOyAqL1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxczsgIFxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG4ucmVtb3ZlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNlZGl0LWJvb2staWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5uZXctYm9vay1idXR0b25zLFxcbi5sb2dpbi1idXR0b25zLFxcbi5zaWdudXAtYnV0dG9ucyxcXG4uZWRpdC1ib29rLWJ1dHRvbnMsXFxuLmVkaXQtdXNlci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5ldy1ib29rLWJ1dHRvbnMgYnV0dG9uLFxcbi5sb2dpbi1idXR0b25zIGJ1dHRvbixcXG4uc2lnbnVwLWJ1dHRvbnMgYnV0dG9uLFxcbi5lZGl0LWJvb2stYnV0dG9ucyBidXR0b24sXFxuLmVkaXQtdXNlci1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIsIDEzMiwgMTk5LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICAgIGNvbG9yOiByZ2JhKDIsIDEzMiwgMTk5LCAwLjgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgLyogbWFyZ2luOiAyMHB4OyAqL1xcbiAgICBwYWRkaW5nOiBtaW4oNzVweCwxLjJyZW0pIDIuOHJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgZWFzZS1pbi1vdXQsIGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmV3LWJvb2stYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLm5ldy1ib29rLWJ1dHRvbnMgYnV0dG9uOmZvY3VzLFxcbi5sb2dpbi1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4ubG9naW4tYnV0dG9ucyBidXR0b246Zm9jdXMsXFxuLnNpZ251cC1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4uc2lnbnVwLWJ1dHRvbnMgYnV0dG9uOmZvY3VzLFxcbi5lZGl0LWJvb2stYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLmVkaXQtYm9vay1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4uZWRpdC11c2VyLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5lZGl0LXVzZXItYnV0dG9ucyBidXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjgpIGluc2V0O1xcbn1cXG5cXG4uZW1wdHlfbGlicmFyeV9zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpIHtcXG4gICAgLyogLmhlYWRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDUwcHgpIG1pbm1heCg3NXB4LDFmcik7XFxuICAgIH0gKi9cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBnYXA6IC4ycmVtO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6ODgxcHgpIHtcXG4gICAgLmhhbWJ1cmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgyKXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSl7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpO1xcbiAgICB9XFxuICAgIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDMpe1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB9XFxuICAgIC5uYXYtbWVudSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICByaWdodDogLTEwMCU7XFxuICAgICAgICB0b3A6IDEwOHB4O1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIH1cXG4gICAgLmRhcmsgKiAubmF2LW1lbnUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgfVxcbiAgICAubmF2LWl0ZW0ge1xcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XFxuICAgIH1cXG4gICAgLm5hdi1saW5rIHtcXG4gICAgICAgIGNvbG9yOiMwYzRhNmU7XFxuICAgIH1cXG4gICAgLm5hdi1tZW51LmFjdGl2ZSB7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjg4MXB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLG1pbi1jb250ZW50KSA1ZnI7XFxufVxcblxcbiAgICAuaGVhZGVyICNzZWFyY2gtc2VjdGlvbiwgXFxuICAgIC5oZWFkZXIgLmJvb2stdG90YWxzIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw3NXB4KSBtaW5tYXgoNzVweCwxZnIpOyAgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsbWluLWNvbnRlbnQpIG1pbm1heCg3NXB4LDFmcik7IFxcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICAgICNoZXJvLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB9XFxuICAgIC5oZXJvIHtcXG4gICAgICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxODVweCwgMWZyKSk7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LDFmcik7OyAqL1xcbiAgICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuICAgICNzZWFyY2gtc2VjdGlvbi1oZXJvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI2Jvb2stY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjJweCk7XFxuICAgIH1cXG5cXG4gICAgLmJvb2stY2FyZC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwzMDBweCkpO1xcbiAgICB9XFxuXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIC5ib29rLWNvdmVyLWltZyB7XFxuICAgICAgICB0b3A6IDM1cHg7XFxuICAgICAgICByaWdodDogMTVweDtcXG4gICAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICB9XFxuXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayAuYm9vay10aXRsZSxcXG4gICAgLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIC5ib29rLWF1dGhvciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwY2g7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDoxMDgxcHgpIHtcXG4gLmhlcm8ge1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiB9XFxufVxcblxcblxcbi8qIENPREUgRk9SIE5FVyBCT09LIEJVVFRPTiBcXG5cXG4gLm5ldy1ib29rIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAxMzVkZWcsXFxuICAgICAgcmdiKDMzLCAxNTAsIDI0MykgMCUsXFxuICAgICAgcmdiKDIxLCAxMDEsIDE5MikgMTAwJVxcbiAgICApO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgYnJlYWstcG9pbnRzKCdtZCcpIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH0qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbGlicmFyeVN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLDBCQUEwQjs7SUFFMUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsNkJBQTZCOztJQUU3Qix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSwyRkFBMkY7SUFDM0YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lB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O0FBQ2pEOztJQUVJOztRQUVJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw2REFBNkQ7UUFDN0QsNkRBQTZEO1FBQzdELFNBQVM7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0k7MkRBQ21EO0lBQ3ZELCtDQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNUO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiOztJQUVBO1FBQ0ksK0JBQStCO0lBQ25DOztJQUVBO1FBQ0ksNERBQTREO0lBQ2hFOztJQUVBO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0NBQ0M7SUFDRywyQ0FBMkM7SUFDM0MsbUJBQW1CO0NBQ3RCO0FBQ0Q7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNDSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC8qIG1haW4gdGhlbWUgKi9cXG4gICAgLS13aGl0ZTogd2hpdGU7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2Y4ZjlmYTtcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNlOWVjZWY7XFxuXFxuICAgIC0tcHJpbWFyeS1kYXJrLWJsdWU6ICMzYTBjYTM7XFxuICAgIC0tcHJpbWFyeS1saWdodC1ibHVlOiAjNGNjOWYwO1xcbiAgICAtLXByaW1hcnktZGFyay1wdXJwbGU6ICM3MjA5Yjc7XFxuICAgIC0tc2Vjb25kYXJ5LW1pZC1ibHVlOiAjNDM2MWVlO1xcblxcbiAgICAtLWhpZ2hsaWdodC1waW5rOiAjZjcyNTg1O1xcblxcbiAgICAtLWJsYWNrOiAjMDAwO1xcbiAgICAtLXByaW1hcnktZGFyazogIzIxMjUyOTtcXG4gICAgLS1zZWNvbmRhcnktZGFyay1ncmF5OiAjOTc5ZGFjO1xcbiAgICAvKiBEQVJLIE1PREUgQkVMT1cgKi9cXG4gICAgLyogT1RIRVIgVEhFTUUgQkVMT1cgKi9cXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4vKiBEQVJLIE1PREUgKi9cXG4jaGVhZGVyLWNvbnRhaW5lci5kYXJrIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgzZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmstYmx1ZSkgODAlLCB2YXIoLS1zZWNvbmRhcnktbWlkLWJsdWUpKTsgXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuI2hlYWRlci1jb250YWluZXIuZGFyayAuYm9vay10b3RhbHMge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbiNoZWFkZXItY29udGFpbmVyLmRhcmsgI3NlYXJjaC1pY29uIHtcXG4gICAgY29udGVudDogdXJsKC4uL2Fzc2V0cy9pY29ucy9tYWduaWZ5LXdoaXRlLnBuZyk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuZGl2I2hlcm8tY29udGFpbmVyLmRhcmsge1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KTtcXG4gICAgICovXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ib29rLXdhbGwtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7IFxcbn1cXG4jYm9vay1jb250YWluZXIuZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuI29yZGVyX2J5LFxcbiNvcmRlcl9kaXJlY3Rpb24sXFxuaGVhZGVyLmRhcmsgPiAuaGVhZGVyID4gLmhhbWJ1cmdlciA+IC5iYXIgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcblxcbi5kYXJrICogLm5hdi1saW5rIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG5cXG4uZGFyayAqIC5hZGQtYm9vay1mb3JtLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG4uZGFyayAqICNhZGQtYm9vay1wbHVzIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgY29udGVudDogdXJsKFxcXCIuLi9hc3NldHMvaWNvbnMvcGx1cy1ibGFjay5wbmdcXFwiKTtcXG59XFxuLyogLS0tLUNPTlRBSU5FUiAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBkaXNwbGF5OmdyaWQ7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpOyAqL1xcbn1cXG4vKiB0YXJnZXQgcGFnZSBzZWN0aW9ucyAqL1xcbi5jb250YWluZXIgPiAqIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpOyAqL1xcbn1cXG4vKiB0YXJnZXQgd3JhcHBlcnMgd2l0aGluIHBhZ2Ugc2VjdGlvbnMgKi9cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogIDEwcHg7XFxufVxcbi8qIC0tLS1IRUFERVIgKi9cXG4jaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpIDgwJSwgdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKSk7IFxcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDEwcHggLTE1cHggdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIC8qXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsbWluLWNvbnRlbnQpIG1pbm1heCg3NXB4LDFmcik7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNzVweCkgbWlubWF4KDc1cHgsMWZyKTsgKi9cXG4gICAgLypncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgKi9cXG59XFxuLmhlYWRlciAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLG1pbi1jb250ZW50KSBtaW5tYXgoNzVweCwxZnIpOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgobWluLWNvbnRlbnQsIDc1cHgpKTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw3NXB4KSBtaW5tYXgoNzVweCwxZnIpOyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciAuYWRkLWJvb2ssXFxuLmFkZC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIC8qIG1heC13aWR0aDogNzVweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmFkZC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC1waW5rKTtcXG59XFxuLmFkZC1ib29rLWZvcm0tb3Blbjpob3ZlcixcXG4uYWRkLWJvb2stZm9ybS1vcGVuOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tb3Blbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG4uYWRkLWJvb2stZm9ybS1vcGVuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVxcblxcbiNhZGQtYm9vay1wbHVzIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLnRoZW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogVE9HR0xFIEJVVFRPTiAqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpO1xcbiAgICAvKiB0cmFuc2l0aW9uIHRvIGNvbG9yIG9uY2UgY2hlY2tlZCAqL1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSxcXG4ucmVhZC10b2dnbGUtc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuLyogdHJhbnNpdGlvbiBvZiBzd2l0Y2ggYmFja2dyb3VuZCBjb2xvciAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG4vKiB0cmFuc2l0aW9uIG9mIC5zbGlkZXI6YmVmb3JlIC0gdGhlIHRvZ2dsZSBzd2l0Y2ggY2lyY2xlICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlLFxcbmlucHV0OmNoZWNrZWQgKyAucmVhZC10b2dnbGUtc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlLFxcbi5yZWFkLXRvZ2dsZS1zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udG9nZ2xlLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIFJFQUQgVE9HR0xFICovXFxuLnNpbmdsZS1ib29rIC5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgYm90dG9tOiA0cHg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAucmVhZC10b2dnbGUtc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAucmVhZC10b2dnbGUtc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpOyBcXG59XFxuXFxuLyogTkFWSUdBVElPTiAqL1xcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXIgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5oZWFkZXIgdWwgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm5hdi1saW5rIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5uYXYtbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbi5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXIge1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIG1hcmdpbjogNXB4IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogXFxufn4gIEhFUk8gU0VDVElPTiB+flxcbiovXFxuI2hlcm8tY29udGFpbmVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ib29rLXdhbGwtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi8qIC5oZXJvIHtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7O1xcbiAgIFxcbn0gKi9cXG4uaGVhZGVyICNzZWFyY2gtc2VjdGlvbixcXG4uaGVybyAjc2VhcmNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XFxufVxcbi5oZWFkZXIgI2Jvb2stc2VhcmNoLFxcbi5oZXJvICNib29rLXNlYXJjaCB7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxufVxcblxcblxcbi5ib29rLXRvdGFscyxcXG4uYm9vay10b3RhbHMtaGVybyB7XFxuICAgIGJvcmRlcjogdmFyKC0taGlnaGxpZ2h0LXBpbmspIDFweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuLmJvb2stcHJvZ3Jlc3MtYmFyLFxcbi5ib29rLXByb2dyZXNzLWJhci1oZXJvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogLjNyZW0gMDtcXG59XFxuLnByb2dyZXNzLWJhcixcXG4ucHJvZ3Jlc3MtYmFyLWhlcm8ge1xcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodC1waW5rKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBcXG5+fiAgQk9PSyBTRUNUSU9OIH5+XFxuKi9cXG5cXG4jYm9vay1jb250YWluZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAzOCwgMjA3KTsgKi9cXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuXFxuLmJvb2stc2VjdGlvbiB7XFxuICAgIC8qIGdyaWQtY29sdW1uOiA7ICovXFxuICAgIHBhZGRpbmc6MXJlbTtcXG59XFxuXFxuLmJvb2stc29ydC1zdGF0dXMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uYm9vay1zZWN0aW9uIC5zb3J0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5ib29rLXNlY3Rpb24gLnNvcnQgc2VsZWN0IHtcXG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSg5MywgMTA0LCAxMTYsIDAuNSkgMXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuLmJvb2stc2VjdGlvbiAuc3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uc3RhdHVzIC5yZWFkX2NvbG9yIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKSAwJSwgdmFyKC0taGlnaGxpZ2h0LXBpbmspIDEwMCUpO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbn1cXG4uc3RhdHVzIC51bnJlYWRfY29sb3Ige1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSkgMTAwJSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxufVxcbi8qIFxcbiAgICBCT09LIENBUkRTXFxuKi9cXG4uYm9vay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNjYWxlLWluLWNlbnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG4gICAgYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG59XFxuXFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKSwgMCAycHggNHB4IC0xcHggcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSkgMTAwJSk7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayA+ICoge1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stdGl0bGUsXFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIC5ib29rLWF1dGhvciB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgXFxuICAgIG1heC13aWR0aDogMjBjaDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnJlYWQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpIDAlLCB2YXIoLS1oaWdobGlnaHQtcGluaykgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLm5vdC1yZWFkIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodCkgMCUsIHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpIDEwMCUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5yZW1vdmUtYm9vayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5lZGl0LWJvb2stZm9ybS1vcGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDM1cHg7XFxuICAgIC8qIHdpZHRoOiAxMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDIwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuZmV0Y2gtYm9vay1kYXRhLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiA2NXB4O1xcbiAgICAvKiB3aWR0aDogMTBweDsgKi9cXG4gICAgaGVpZ2h0OiAyMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLmJvb2stY292ZXItaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHJpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5yZWFkX3RvZ2dsZV9sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNjVweDtcXG4gICAgYm90dG9tOiA3LjVweDtcXG59XFxuLyogXFxuICAgIEZPUk0gU0VDVElPTlxcbiovXFxuLmFkZF9ib29rX3NlY3Rpb24sXFxuLmxvZ2luX3NlY3Rpb24sXFxuLnNpZ251cF9zZWN0aW9uLFxcbi5lZGl0X2Jvb2tfc2VjdGlvbixcXG4uZWRpdF91c2VyX3NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBoaWRlIGZvciBub3cgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWJvb2stZm9ybSxcXG4ubG9naW4tZm9ybSxcXG4uc2lnbnVwLWZvcm0sXFxuLmVkaXQtYm9vay1mb3JtLFxcbi5lZGl0LXVzZXItZm9ybSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QzZDNkMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmNsb3NlLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxufVxcbi5jbG9zZS1mb3JtOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLFxcbiAgICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5ldy1ib29rLWZvcm0gaDQsXFxuLmxvZ2luLWZvcm0gaDQsIFxcbi5zaWdudXAtZm9ybSBoNCxcXG4uZWRpdC1ib29rLWZvcm0gaDQsXFxuLmVkaXQtdXNlci1mb3JtIGg0IHtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtLjhyZW07XFxufVxcblxcbi5lZGl0LXVzZXItZm9ybSAuZXhpc3RpbmctZXJyLW1zZyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm5ldy1ib29rLWZvcm0gaW5wdXQsXFxuLmxvZ2luLWZvcm0gaW5wdXQsXFxuLnNpZ251cC1mb3JtIGlucHV0LFxcbi5lZGl0LWJvb2stZm9ybSBpbnB1dCxcXG4uZWRpdC11c2VyLWZvcm0gaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogLjdyZW07XFxufVxcblxcbi5lcnItbXNnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2xvZ2luLWVyci1uby11c2VyLWVtYWlsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAvKiBwYWRkaW5nOiAuMXJlbSAuMnJlbTsgKi9cXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7ICBcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuLnJlbW92ZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jZWRpdC1ib29rLWlkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubmV3LWJvb2stYnV0dG9ucyxcXG4ubG9naW4tYnV0dG9ucyxcXG4uc2lnbnVwLWJ1dHRvbnMsXFxuLmVkaXQtYm9vay1idXR0b25zLFxcbi5lZGl0LXVzZXItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5uZXctYm9vay1idXR0b25zIGJ1dHRvbixcXG4ubG9naW4tYnV0dG9ucyBidXR0b24sXFxuLnNpZ251cC1idXR0b25zIGJ1dHRvbixcXG4uZWRpdC1ib29rLWJ1dHRvbnMgYnV0dG9uLFxcbi5lZGl0LXVzZXItYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyLCAxMzIsIDE5OSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgICBjb2xvcjogcmdiYSgyLCAxMzIsIDE5OSwgMC44KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIC8qIG1hcmdpbjogMjBweDsgKi9cXG4gICAgcGFkZGluZzogbWluKDc1cHgsMS4ycmVtKSAyLjhyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5ldy1ib29rLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5uZXctYm9vay1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4ubG9naW4tYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLmxvZ2luLWJ1dHRvbnMgYnV0dG9uOmZvY3VzLFxcbi5zaWdudXAtYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLnNpZ251cC1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4uZWRpdC1ib29rLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5lZGl0LWJvb2stYnV0dG9ucyBidXR0b246Zm9jdXMsXFxuLmVkaXQtdXNlci1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4uZWRpdC11c2VyLWJ1dHRvbnMgYnV0dG9uOmZvY3VzIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggcmdiYSgyLCAxMzIsIDE5OSwgMC44KSBpbnNldDtcXG59XFxuXFxuLmVtcHR5X2xpYnJhcnlfc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KSB7XFxuICAgIC8qIC5oZWFkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw1MHB4KSBtaW5tYXgoNzVweCwxZnIpO1xcbiAgICB9ICovXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ2FwOiAuMnJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjg4MXB4KSB7XFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMil7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDEpe1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgfVxcbiAgICAubmF2LW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xcbiAgICAgICAgdG9wOiAxMDhweDtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB9XFxuICAgIC5kYXJrICogLm5hdi1tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIH1cXG4gICAgLm5hdi1pdGVtIHtcXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xcbiAgICB9XFxuICAgIC5uYXYtbGluayB7XFxuICAgICAgICBjb2xvcjojMGM0YTZlO1xcbiAgICB9XFxuICAgIC5uYXYtbWVudS5hY3RpdmUge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDo4ODFweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMixtaW4tY29udGVudCkgNWZyO1xcbn1cXG5cXG4gICAgLmhlYWRlciAjc2VhcmNoLXNlY3Rpb24sIFxcbiAgICAuaGVhZGVyIC5ib29rLXRvdGFscyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNzVweCkgbWlubWF4KDc1cHgsMWZyKTsgICovXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLG1pbi1jb250ZW50KSBtaW5tYXgoNzVweCwxZnIpOyBcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICAjaGVyby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbiAgICAuaGVybyB7XFxuICAgICAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTg1cHgsIDFmcikpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwxZnIpOzsgKi9cXG4gICAgLyogZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgfVxcbiAgICAjc2VhcmNoLXNlY3Rpb24taGVybyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICNib29rLWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYycHgpO1xcbiAgICB9XFxuXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMzAwcHgpKTtcXG4gICAgfVxcblxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciAuYm9vay1jb3Zlci1pbWcge1xcbiAgICAgICAgdG9wOiAzNXB4O1xcbiAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgfVxcblxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stdGl0bGUsXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayAuYm9vay1hdXRob3Ige1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMGNoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6MTA4MXB4KSB7XFxuIC5oZXJvIHtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgKi9cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gfVxcbn1cXG5cXG5cXG4vKiBDT0RFIEZPUiBORVcgQk9PSyBCVVRUT04gXFxuXFxuIC5uZXctYm9vayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTM1ZGVnLFxcbiAgICAgIHJnYigzMywgMTUwLCAyNDMpIDAlLFxcbiAgICAgIHJnYigyMSwgMTAxLCAxOTIpIDEwMCVcXG4gICAgKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcblxcbiAgICBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIGJyZWFrLXBvaW50cygnbWQnKSB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XFxuICAgICAgfVxcbiAgICB9XFxuICB9Ki9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlicmFyeVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlicmFyeVN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiQm9vayIsImFkZEJvb2tTZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyQWRkQm9va0Zvcm0iLCJzZXRBdHRyaWJ1dGUiLCJhZGRCb29rQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyTmV3Qm9va0Zvcm0iLCJib29rSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNsZWFyTmV3Qm9va0Zvcm1CdG4iLCJjbG9zZU5ld0Jvb2tGb3JtIiwiY2xvc2VOZXdCb29rRm9ybUJ0biIsImJvb2tUaXRsZUlucHV0IiwiYm9va0F1dGhvcklucHV0IiwiYm9va0lTQk5JbnB1dCIsImJvb2tQYWdlc0lucHV0IiwiYm9va0VkaXRpb25JbnB1dCIsImJvb2tEYXRlSW5wdXQiLCJib29rUmVhZFN0YXR1c0lucHV0IiwiYWRkQm9va1RvTGlicmFyeSIsIm5ld0Jvb2siLCJ0aXRsZSIsInRyaW0iLCJhdXRob3IiLCJpc2JuIiwicGFnZXMiLCJlZGl0aW9uIiwicHVibGlzaF9kYXRlIiwiaXNfcmVhZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsInJlbmRlckJvb2tzIiwiYWxlcnQiLCJhZGRCb29rRm9ybUJ0biIsImNsZWFyRWRpdEJvb2tGb3JtIiwiY2xlYXJFZGl0Qm9va0Zvcm1CdG4iLCJjbG9zZUVkaXRCb29rRm9ybSIsImNsb3NlRWRpdEJvb2tGb3JtQnRuIiwiYm9va1RpdGxlRWRpdElucHV0IiwiYm9va0F1dGhvckVkaXRJbnB1dCIsImJvb2tJU0JORWRpdElucHV0IiwiYm9va1BhZ2VzRWRpdElucHV0IiwiYm9va0VkaXRpb25FZGl0SW5wdXQiLCJib29rRGF0ZUVkaXRJbnB1dCIsImJvb2tSZWFkU3RhdHVzRWRpdElucHV0IiwiZWRpdEJvb2tMaWJyYXJ5IiwibmV3Qm9va1VwZGF0ZSIsImJvb2tJRCIsImRhdGFzZXQiLCJib29rSWQiLCJmZXRjaFVSTEVkaXQiLCJlZGl0Qm9va0Zvcm1CdG4iLCJVc2VyIiwidXNlcm5hbWVJbnB1dCIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwiZWRpdFVzZXJTZWN0aW9uIiwiZXhpc3RpbmdVc2VyRGF0YUdsb2JhbCIsInJlbmRlckVkaXRVc2VyRm9ybSIsInJlc3BvbnNlVXNlckRhdGEiLCJyZXNwb25zZVVzZXIiLCJqc29uIiwiZXhpc3RpbmdVc2VyRGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJzZXR0aW5nc0J0biIsImNsZWFyRWRpdFVzZXJGb3JtIiwidXNlcklucHV0cyIsImNsZWFyRWRpdFVzZXJGb3JtQnRuIiwiY2xvc2VFZGl0VXNlckZvcm0iLCJjbG9zZUVkaXRVc2VyRm9ybUJ0biIsImVkaXRVc2VyIiwiZXhpc3RpbmdFcnJNc2ciLCJzdHlsZSIsInZpc2liaWxpdHkiLCJuZXdVc2VyVXBkYXRlIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJ0ZXh0Q29udGVudCIsImV4aXN0aW5nVXNlclJlc3BvbnNlIiwiZXhpc3RpbmdFbWFpbCIsImV4aXN0aW5nVXNlcm5hbWUiLCJ1c2VySWQiLCJpZCIsImVkaXRVc2VyRm9ybUJ0biIsImZldGNoQm9va0luZm8iLCJxdWVyeSIsImxpYlVybEFQSSIsImNsZWFuUXVlcnlTdHIiLCJzcGxpdCIsImpvaW4iLCJsaWJBUElRdWVyeVN0ciIsInJlc3BvbnNlTGlicmFyeURhdGEiLCJyZXNwb25zZUxpYnJhcnkiLCJjb25zb2xlIiwibG9nIiwiaGFtYnVyZ2VyIiwibmF2TWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbmRlclByb2dyZXNzQmFyIiwiY3VycmVudEJvb2tzRGF0YSIsImN1cnJlbnRCb29rcyIsImN1cnJlbnRCb29rc1JlYWRDb3VudCIsImZpbHRlciIsImJvb2siLCJjdXJyZW50Qm9va3NUb3RhbENvdW50IiwiYm9va1JlYWREaXNwbGF5IiwiYm9va1RvdGFsRGlzcGxheSIsImJvb2tSZWFkRGlzcGxheUhlcm8iLCJib29rVG90YWxEaXNwbGF5SGVybyIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NCYXJIZXJvIiwicHJvZ3Jlc3NXaWR0aCIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwid2luZG93Iiwib25sb2FkIiwibG9nb3V0IiwibG9jYXRpb24iLCJyZXBsYWNlIiwic2VhcmNoVGVybSIsImJvb2tDb250YWluZXIiLCJpbm5lckhUTUwiLCJsb3dlclNlYXJjaFRlcm0iLCJmaWx0ZXJlZEN1cnJlbnRCb29rcyIsImluY2x1ZGVzIiwiaSIsImJvb2tDYXJkIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNsb3NlQnRuIiwiZmV0Y2hVUkwiLCJlZGl0QnRuIiwiZXZlbnQiLCJib29rQ2FyZENoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNoaWxkTm9kZXMiLCJleGlzdGluZ0Jvb2tJbmZvIiwic2xpY2UiLCJmaXJzdENoaWxkIiwiY2hlY2tlZCIsImJvb2tfaWQiLCJib29rQ292ZXJJbWciLCJib29rVGl0bGUiLCJib29rQXV0aG9yIiwibGFiZWxBdXRob3IiLCJhdXRob3JEaXNwbGF5IiwiYXBwZW5kIiwiYm9va0lzYm4iLCJsYWJlbElzYm4iLCJpc2JuRGlzcGxheSIsInBhZ2VzQ291bnQiLCJsYWJlbFBhZ2VzIiwiYm9va1BhZ2VzIiwiYm9va0VkaXRpb24iLCJsYWJlbEVkaXRpb24iLCJlZGl0aW9uRGlzcGxheSIsInB1Ymxpc2hEYXRlIiwibGFiZWxEYXRlIiwiZGF0ZURpc3BsYXkiLCJmZXRjaEJ0biIsImJvb2tEYXRhUmVzcG9uc2UiLCJib29rRGF0YSIsImRvY3MiLCJmZXRjaGVkQm9va0RhdGEiLCJhdXRob3JfbmFtZSIsImZpcnN0X3B1Ymxpc2hfeWVhciIsImNvdmVyX2ltZ19zcmMiLCJyZXBsYWNlQm9va0RhdGEiLCJyZWFkVG9nZ2xlTGFiZWwiLCJ0b2dnbGVDb250cm9sTGFiZWwiLCJ0b2dnbGVDb250cm9sQ2hlY2tib3giLCJ0b2dnbGVDb250cm9sU3BhbiIsImVsZW1lbnQiLCJjb250YWlucyIsInJlbW92ZSIsImluZGV4IiwiZ2V0QXR0cmlidXRlIiwibmV3UmVhZFN0YXR1c0RhdGEiLCJhcHBlbmRDaGlsZCIsIkRFRkFVTFRfVEhFTUUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3VycmVudFRoZW1lIiwiaGVhZGVyRWwiLCJoZXJvRWwiLCJib29rU2VjdGlvbkVsIiwiYWRkQm9va0Zvcm1FbCIsImZhdmljb25FbCIsInNpdGVMb2dvRWwiLCJ0aGVtZVRvZ2dsZSIsInNldEN1cnJlbnRUaGVtZSIsIm5ld1RoZW1lIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=
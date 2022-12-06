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
/* harmony import */ var _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/magnify.svg */ "./src/assets/icons/magnify.svg");
/* harmony import */ var _assets_icons_magnify_white_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/magnify-white.png */ "./src/assets/icons/magnify-white.png");
/* harmony import */ var _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/icons/book-open-page-variant-outline.svg */ "./src/assets/icons/book-open-page-variant-outline.svg");
/* harmony import */ var _assets_icons_plus_white_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/icons/plus-white.png */ "./src/assets/icons/plus-white.png");
/* harmony import */ var _renderBooks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renderBooks.js */ "./src/js/library/renderBooks.js");
/* harmony import */ var _heroDisplay_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./heroDisplay.js */ "./src/js/library/heroDisplay.js");
// STYLES


// JAVASCRIPT







//images

document.querySelector("#search-icon").src = _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_7__;

document.querySelector("#search-icon-hero").src = _assets_icons_magnify_white_png__WEBPACK_IMPORTED_MODULE_8__;

document.querySelector("#site-logo").src = _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_9__;

document.querySelector("#add-book-plus").src = _assets_icons_plus_white_png__WEBPACK_IMPORTED_MODULE_10__;

// pageload rendering


window.onload = () => {
  // setCurrentTheme(DEFAULT_THEME);
  // setCurrentBooks(currentBooks);
  (0,_heroDisplay_js__WEBPACK_IMPORTED_MODULE_12__.renderProgressBar)();
  (0,_renderBooks_js__WEBPACK_IMPORTED_MODULE_11__.renderBooks)();
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
/* harmony import */ var _assets_img_book_cover_placeholder_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/book-cover-placeholder.jpeg */ "./src/assets/img/book-cover-placeholder.jpeg");


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
    bookCoverImg.setAttribute("src", _assets_img_book_cover_placeholder_jpeg__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _assets_icons_book_open_page_variant_outline_light_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/book-open-page-variant-outline_light.svg */ "./src/assets/icons/book-open-page-variant-outline_light.svg");
/* harmony import */ var _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/book-open-page-variant-outline.svg */ "./src/assets/icons/book-open-page-variant-outline.svg");
/* harmony import */ var _assets_icons_favicon_light_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/favicon_light.ico */ "./src/assets/icons/favicon_light.ico");
/* harmony import */ var _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/favicon.ico */ "./src/assets/icons/favicon.ico");




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
    faviconEl.setAttribute("href", _assets_icons_favicon_light_ico__WEBPACK_IMPORTED_MODULE_2__);
    siteLogoEl.setAttribute("src", _assets_icons_book_open_page_variant_outline_light_svg__WEBPACK_IMPORTED_MODULE_0__);
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
    faviconEl.setAttribute("href", _assets_icons_favicon_light_ico__WEBPACK_IMPORTED_MODULE_2__);
    siteLogoEl.setAttribute("src", _assets_icons_book_open_page_variant_outline_light_svg__WEBPACK_IMPORTED_MODULE_0__);
    setCurrentTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    headerEl.classList.toggle("dark");
    heroEl.classList.toggle("dark");
    bookSectionEl.classList.toggle("dark");
    addBookFormEl.classList.toggle("dark");
    faviconEl.setAttribute("href", _assets_icons_favicon_ico__WEBPACK_IMPORTED_MODULE_3__);
    siteLogoEl.setAttribute("src", _assets_icons_book_open_page_variant_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "./src/assets/icons/book-open-page-variant-outline.svg":
/*!*************************************************************!*\
  !*** ./src/assets/icons/book-open-page-variant-outline.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05b6980826aa2e4fffba.svg";

/***/ }),

/***/ "./src/assets/icons/book-open-page-variant-outline_light.svg":
/*!*******************************************************************!*\
  !*** ./src/assets/icons/book-open-page-variant-outline_light.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f807a79092b8b703a53e.svg";

/***/ }),

/***/ "./src/assets/icons/favicon.ico":
/*!**************************************!*\
  !*** ./src/assets/icons/favicon.ico ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1936648e94c4da02f20.ico";

/***/ }),

/***/ "./src/assets/icons/favicon_light.ico":
/*!********************************************!*\
  !*** ./src/assets/icons/favicon_light.ico ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a9252f1335723db42f9.ico";

/***/ }),

/***/ "./src/assets/icons/magnify-white.png":
/*!********************************************!*\
  !*** ./src/assets/icons/magnify-white.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f64cf3289a3e659bbe0.png";

/***/ }),

/***/ "./src/assets/icons/magnify.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/magnify.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb8056749540827091ca.svg";

/***/ }),

/***/ "./src/assets/icons/plus-black.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/plus-black.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e4640c82f731c2d5fc0.png";

/***/ }),

/***/ "./src/assets/icons/plus-white.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/plus-white.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31a1fe5257cbb340a4bd.png";

/***/ }),

/***/ "./src/assets/img/book-cover-placeholder.jpeg":
/*!****************************************************!*\
  !*** ./src/assets/img/book-cover-placeholder.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "496c8843c50f1a63fa7f.jpeg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeUluZGV4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUVyQyxNQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQ2xFLFNBQVNDLGlCQUFpQixHQUFHO0VBQzVCSCxjQUFjLENBQUNJLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7QUFDeEQ7QUFDQSxNQUFNQyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2hFRyxVQUFVLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUgsaUJBQWlCLENBQUM7O0FBRXZEO0FBQ0EsU0FBU0ksZ0JBQWdCLEdBQUc7RUFDM0IsTUFBTUMsVUFBVSxHQUFHUCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBQ2xFLEtBQUssTUFBTUMsS0FBSyxJQUFJRixVQUFVLEVBQUU7SUFDL0IsSUFBSUUsS0FBSyxDQUFDQyxPQUFPLENBQUNDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFDM0NGLEtBQUssQ0FBQ0csT0FBTyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQzVCSixLQUFLLENBQUNLLEtBQUssR0FBRyxFQUFFO0VBQ3RCO0FBQ0Q7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR2YsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDMUVjLG1CQUFtQixDQUFDVixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLGdCQUFnQixDQUFDO0FBQy9EO0FBQ0EsU0FBU1UsZ0JBQWdCLEdBQUc7RUFDM0JqQixjQUFjLENBQUNJLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7QUFDdkQ7QUFDQSxNQUFNYyxtQkFBbUIsR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQzFFZ0IsbUJBQW1CLENBQUNaLGdCQUFnQixDQUFDLE9BQU8sRUFBRVcsZ0JBQWdCLENBQUM7O0FBRS9EO0FBQ0EsTUFBTUUsY0FBYyxHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQzdELE1BQU1rQixlQUFlLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDL0QsTUFBTW1CLGFBQWEsR0FBR3BCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxNQUFNb0IsY0FBYyxHQUFHckIsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQzdELE1BQU1xQixnQkFBZ0IsR0FBR3RCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ2pFLE1BQU1zQixhQUFhLEdBQUd2QixRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUN0RSxNQUFNdUIsbUJBQW1CLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUV4RSxlQUFld0IsZ0JBQWdCLEdBQUc7RUFDakMsTUFBTUMsT0FBTyxHQUFHLElBQUk1QiwrQ0FBSSxDQUFDO0lBQ3hCNkIsS0FBSyxFQUFFVCxjQUFjLENBQUNKLEtBQUssQ0FBQ2MsSUFBSSxFQUFFO0lBQ2xDQyxNQUFNLEVBQUVWLGVBQWUsQ0FBQ0wsS0FBSyxDQUFDYyxJQUFJLEVBQUU7SUFDcENFLElBQUksRUFBRVYsYUFBYSxDQUFDTixLQUFLLENBQUNjLElBQUksRUFBRTtJQUNoQ0csS0FBSyxFQUFFVixjQUFjLENBQUNQLEtBQUssQ0FBQ2MsSUFBSSxFQUFFO0lBQ2xDSSxPQUFPLEVBQUVWLGdCQUFnQixDQUFDUixLQUFLLENBQUNjLElBQUksRUFBRTtJQUN0Q0ssWUFBWSxFQUFFVixhQUFhLENBQUNULEtBQUssQ0FBQ2MsSUFBSSxFQUFFO0lBQ3hDTSxPQUFPLEVBQUVWLG1CQUFtQixDQUFDVixLQUFLLENBQUNjLElBQUk7RUFDeEMsQ0FBQyxDQUFDO0VBRUYsTUFBTU8sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxZQUFZLEVBQUU7SUFDMUNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLE9BQU8sQ0FBQztJQUM3QmUsT0FBTyxFQUFFO01BQUUsY0FBYyxFQUFFO0lBQW1CO0VBQy9DLENBQUMsQ0FBQztFQUNGLElBQUlOLFFBQVEsQ0FBQ08sRUFBRSxFQUFFO0lBQ2hCM0MsY0FBYyxDQUFDSSxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3REd0MsV0FBVyxFQUFFO0VBQ2QsQ0FBQyxNQUFNO0lBQ05DLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztFQUNwQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGNBQWMsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUMxRDRDLGNBQWMsQ0FBQ3hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRW9CLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoRTFEO0FBQ08sTUFBTTNCLElBQUksR0FBRyxnQkFRakI7RUFBQSxJQVIyQjtJQUM3QjZCLEtBQUs7SUFDTEUsTUFBTTtJQUNOQyxJQUFJO0lBQ0pDLEtBQUs7SUFDTEMsT0FBTztJQUNQQyxZQUFZO0lBQ1pDO0VBQ0QsQ0FBQztFQUNBLE9BQU87SUFDTlAsS0FBSztJQUNMRSxNQUFNO0lBQ05DLElBQUk7SUFDSkMsS0FBSztJQUNMQyxPQUFPO0lBQ1BDLFlBQVk7SUFDWkM7SUFDQTtFQUNELENBQUM7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTWSxpQkFBaUIsR0FBRztFQUM1QixNQUFNdkMsVUFBVSxHQUFHUCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBQ2xFLEtBQUssTUFBTUMsS0FBSyxJQUFJRixVQUFVLEVBQUU7SUFDL0IsSUFBSUUsS0FBSyxDQUFDQyxPQUFPLENBQUNDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFDM0NGLEtBQUssQ0FBQ0csT0FBTyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQzVCSixLQUFLLENBQUNLLEtBQUssR0FBRyxFQUFFO0VBQ3RCO0FBQ0Q7QUFDQSxNQUFNaUMsb0JBQW9CLEdBQUcvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUM1RThDLG9CQUFvQixDQUFDMUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFeUMsaUJBQWlCLENBQUM7QUFDakU7O0FBRUEsU0FBU0UsaUJBQWlCLEdBQUc7RUFDNUJoRCxRQUFRLENBQ05DLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUNuQ0UsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztBQUMxQztBQUNBLE1BQU04QyxvQkFBb0IsR0FBR2pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVFZ0Qsb0JBQW9CLENBQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUyQyxpQkFBaUIsQ0FBQzs7QUFFakU7QUFDQSxNQUFNRSxrQkFBa0IsR0FBR2xELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUNsRSxNQUFNa0QsbUJBQW1CLEdBQUduRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNwRSxNQUFNbUQsaUJBQWlCLEdBQUdwRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDaEUsTUFBTW9ELGtCQUFrQixHQUFHckQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ2xFLE1BQU1xRCxvQkFBb0IsR0FBR3RELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQ3RFLE1BQU1zRCxpQkFBaUIsR0FBR3ZELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0FBQzNFLE1BQU11RCx1QkFBdUIsR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBRTdFLGVBQWV3RCxlQUFlLEdBQUc7RUFDaEMsTUFBTUMsYUFBYSxHQUFHLElBQUk1RCw0Q0FBSSxDQUFDO0lBQzlCNkIsS0FBSyxFQUFFdUIsa0JBQWtCLENBQUNwQyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUN0Q0MsTUFBTSxFQUFFc0IsbUJBQW1CLENBQUNyQyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUN4Q0UsSUFBSSxFQUFFc0IsaUJBQWlCLENBQUN0QyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUNwQ0csS0FBSyxFQUFFc0Isa0JBQWtCLENBQUN2QyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUN0Q0ksT0FBTyxFQUFFc0Isb0JBQW9CLENBQUN4QyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUMxQ0ssWUFBWSxFQUFFc0IsaUJBQWlCLENBQUN6QyxLQUFLLENBQUNjLElBQUksRUFBRTtJQUM1Q00sT0FBTyxFQUFFc0IsdUJBQXVCLENBQUMxQztFQUNsQyxDQUFDLENBQUM7RUFFRixNQUFNNkMsTUFBTSxHQUFHM0QsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMyRCxPQUFPLENBQUNDLE1BQU07RUFDckUsTUFBTUMsWUFBWSxHQUFJLGNBQWFILE1BQU8sRUFBQztFQUMzQyxNQUFNeEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQzBCLFlBQVksRUFBRTtJQUMxQ3pCLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNrQixhQUFhLENBQUM7SUFDbkNqQixPQUFPLEVBQUU7TUFBRSxjQUFjLEVBQUU7SUFBbUI7RUFDL0MsQ0FBQyxDQUFDO0VBQ0YsSUFBSU4sUUFBUSxDQUFDTyxFQUFFLEVBQUU7SUFDaEIxQyxRQUFRLENBQ05DLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUNuQ0UsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztJQUN6Q3dDLFdBQVcsRUFBRTtFQUNkLENBQUMsTUFBTTtJQUNOQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7RUFDcEM7QUFDRDtBQUVBLE1BQU1tQixlQUFlLEdBQUcvRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDNUQ4RCxlQUFlLENBQUMxRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVvRCxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5RjFCO0FBRWhDLE1BQU1RLGFBQWEsR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzlELE1BQU1pRSxVQUFVLEdBQUdsRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDeEQsTUFBTWtFLGFBQWEsR0FBR25FLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRTlELE1BQU1tRSxlQUFlLEdBQUdwRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUNwRSxJQUFJb0Usc0JBQXNCO0FBQzFCLGVBQWVDLGtCQUFrQixHQUFHO0VBQ25DLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1uQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7RUFDMUQsTUFBTW9DLFlBQVksR0FBRyxNQUFNRCxnQkFBZ0IsQ0FBQ0UsSUFBSSxFQUFFO0VBRWxELElBQUlDLGdCQUFnQixHQUFHO0lBQ3RCQyxLQUFLLEVBQUVILFlBQVksQ0FBQ0csS0FBSztJQUN6QkMsUUFBUSxFQUFFSixZQUFZLENBQUNJO0VBQ3hCLENBQUM7RUFFRFgsYUFBYSxDQUFDbkQsS0FBSyxHQUFHNEQsZ0JBQWdCLENBQUNFLFFBQVE7RUFDL0NWLFVBQVUsQ0FBQ3BELEtBQUssR0FBRzRELGdCQUFnQixDQUFDQyxLQUFLO0VBRXpDTixzQkFBc0IsR0FBR0ssZ0JBQWdCO0VBRXpDTixlQUFlLENBQUNqRSxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO0FBQ3pEO0FBQ0EsTUFBTTBFLFdBQVcsR0FBRzdFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN2RDRFLFdBQVcsQ0FBQ3hFLGdCQUFnQixDQUFDLE9BQU8sRUFBRWlFLGtCQUFrQixDQUFDOztBQUV6RDtBQUNBLFNBQVNRLGlCQUFpQixHQUFHO0VBQzVCLE1BQU1DLFVBQVUsR0FBRy9FLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7RUFDbEUsS0FBSyxNQUFNQyxLQUFLLElBQUlzRSxVQUFVLEVBQUU7SUFDL0J0RSxLQUFLLENBQUNLLEtBQUssR0FBRyxFQUFFO0VBQ2pCO0FBQ0Q7QUFDQSxNQUFNa0Usb0JBQW9CLEdBQUdoRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUM1RStFLG9CQUFvQixDQUFDM0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFeUUsaUJBQWlCLENBQUM7O0FBRWpFO0FBQ0EsU0FBU0csaUJBQWlCLEdBQUc7RUFDNUJqRixRQUFRLENBQ05DLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUNuQ0UsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztBQUMxQztBQUNBLE1BQU0rRSxvQkFBb0IsR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVFaUYsb0JBQW9CLENBQUM3RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU0RSxpQkFBaUIsQ0FBQzs7QUFFakU7QUFDQSxlQUFlRSxRQUFRLEdBQUc7RUFDekIsTUFBTUMsY0FBYyxHQUFHcEYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDbEVtRixjQUFjLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVE7RUFFMUMsTUFBTUMsYUFBYSxHQUFHLElBQUl2Qiw0Q0FBSSxDQUFDO0lBQzlCWSxRQUFRLEVBQUVYLGFBQWEsQ0FBQ25ELEtBQUssQ0FBQ2MsSUFBSSxFQUFFO0lBQ3BDK0MsS0FBSyxFQUFFVCxVQUFVLENBQUNwRCxLQUFLLENBQUNjLElBQUksRUFBRTtJQUM5QjRELFFBQVEsRUFBRXJCLGFBQWEsQ0FBQ3JEO0VBQ3pCLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUl5RSxhQUFhLENBQUNDLFFBQVEsQ0FBQzVELElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPMkQsYUFBYSxDQUFDQyxRQUFRLENBQUMsS0FDbkUsSUFBSUQsYUFBYSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDM0NMLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsU0FBUztJQUMzQ0YsY0FBYyxDQUFDTSxXQUFXLEdBQUcsNENBQTRDO0lBQ3pFO0VBQ0Q7RUFFQSxNQUFNaEIsZ0JBQWdCLEdBQUcsTUFBTXRDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRTtJQUMzREMsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQytDLGFBQWEsQ0FBQztJQUNuQzlDLE9BQU8sRUFBRTtNQUFFLGNBQWMsRUFBRTtJQUFtQjtFQUMvQyxDQUFDLENBQUM7RUFDRixNQUFNa0Qsb0JBQW9CLEdBQUcsTUFBTWpCLGdCQUFnQixDQUFDRCxJQUFJLEVBQUU7RUFFMUQsSUFDQ2tCLG9CQUFvQixDQUFDQyxhQUFhLElBQ2xDRCxvQkFBb0IsQ0FBQ0UsZ0JBQWdCLEVBQ3BDO0lBQ0RULGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsU0FBUztJQUMzQ0YsY0FBYyxDQUFDTSxXQUFXLEdBQUcsMkNBQTJDO0VBQ3pFLENBQUMsTUFBTSxJQUNOQyxvQkFBb0IsQ0FBQ0MsYUFBYSxJQUNsQyxDQUFDRCxvQkFBb0IsQ0FBQ0UsZ0JBQWdCLEVBQ3JDO0lBQ0RULGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsU0FBUztJQUMzQ0YsY0FBYyxDQUFDTSxXQUFXLEdBQUcsd0JBQXdCO0VBQ3RELENBQUMsTUFBTSxJQUNOLENBQUNDLG9CQUFvQixDQUFDQyxhQUFhLElBQ25DRCxvQkFBb0IsQ0FBQ0UsZ0JBQWdCLEVBQ3BDO0lBQ0RULGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsU0FBUztJQUMzQ0YsY0FBYyxDQUFDTSxXQUFXLEdBQUcsMkJBQTJCO0VBQ3pEO0VBRUEsTUFBTW5CLGdCQUFnQixHQUFHLE1BQU1uQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7RUFDMUQsTUFBTW9DLFlBQVksR0FBRyxNQUFNRCxnQkFBZ0IsQ0FBQ0UsSUFBSSxFQUFFO0VBRWxELElBQUlxQixNQUFNLEdBQUc7SUFDWkMsRUFBRSxFQUFFdkIsWUFBWSxDQUFDdUI7RUFDbEIsQ0FBQztFQUVELE1BQU1qQyxZQUFZLEdBQUksY0FBYWdDLE1BQU0sQ0FBQ0MsRUFBRyxFQUFDO0VBQzlDLE1BQU01RCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDMEIsWUFBWSxFQUFFO0lBQzFDekIsTUFBTSxFQUFFLEtBQUs7SUFDYkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQytDLGFBQWEsQ0FBQztJQUNuQzlDLE9BQU8sRUFBRTtNQUFFLGNBQWMsRUFBRTtJQUFtQjtFQUMvQyxDQUFDLENBQUM7RUFDRixJQUFJTixRQUFRLENBQUNPLEVBQUUsRUFBRTtJQUNoQjFDLFFBQVEsQ0FDTkMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQ25DRSxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3pDd0MsV0FBVyxFQUFFO0VBQ2QsQ0FBQyxNQUFNO0lBQ05DLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztFQUNoQztBQUNEO0FBRUEsTUFBTW9ELGVBQWUsR0FBR2hHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUM1RCtGLGVBQWUsQ0FBQzNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRThFLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkg1QyxNQUFNYyxhQUFhLEdBQUcsTUFBT0MsS0FBSyxJQUFLO0VBQzdDLE1BQU1DLFNBQVMsR0FBRyx1Q0FBdUM7RUFDekQsTUFBTUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNoRCxNQUFNQyxjQUFjLEdBQUdKLFNBQVMsR0FBR0MsYUFBYTtFQUVoRCxNQUFNSSxtQkFBbUIsR0FBRyxNQUFNcEUsS0FBSyxDQUFDbUUsY0FBYyxDQUFDO0VBQ3ZELE1BQU1FLGVBQWUsR0FBRyxNQUFNRCxtQkFBbUIsQ0FBQy9CLElBQUksRUFBRTtFQUV4RGlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixlQUFlLENBQUM7RUFDNUIsT0FBT0EsZUFBZTtBQUN2QixDQUFDO0FBRURSLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7OztBQ1psQztBQUNBLE1BQU1XLFNBQVMsR0FBRzVHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUN0RCxNQUFNNEcsT0FBTyxHQUFHN0csUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBRW5EMkcsU0FBUyxDQUFDdkcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDekN1RyxTQUFTLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNwQ0YsT0FBTyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDbkMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQRjtBQUNPLE1BQU1DLGlCQUFpQixHQUFHLFlBQVk7RUFDNUMsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTdFLEtBQUssQ0FBQyxZQUFZLENBQUM7RUFDbEQsSUFBSThFLFlBQVksR0FBRyxNQUFNRCxnQkFBZ0IsQ0FBQ3hDLElBQUksRUFBRTtFQUVoRCxNQUFNMEMscUJBQXFCLEdBQUdELFlBQVksQ0FBQ0UsTUFBTSxDQUMvQ0MsSUFBSSxJQUFLQSxJQUFJLENBQUNuRixPQUFPLEtBQUssSUFBSSxDQUMvQixDQUFDdUQsTUFBTTtFQUNSLE1BQU02QixzQkFBc0IsR0FBR0osWUFBWSxDQUFDekIsTUFBTTtFQUNsRDtFQUNBLE1BQU04QixlQUFlLEdBQUd2SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztFQUNyRXNILGVBQWUsQ0FBQzdCLFdBQVcsR0FBSSxlQUFjeUIscUJBQXNCLEVBQUM7RUFFcEUsTUFBTUssZ0JBQWdCLEdBQUd4SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztFQUN2RXVILGdCQUFnQixDQUFDOUIsV0FBVyxHQUFJLGdCQUFlNEIsc0JBQXVCLEVBQUM7RUFFdkUsTUFBTUcsbUJBQW1CLEdBQUd6SCxRQUFRLENBQUNDLGFBQWEsQ0FDakQsMEJBQTBCLENBQzFCO0VBQ0R3SCxtQkFBbUIsQ0FBQy9CLFdBQVcsR0FBSSxlQUFjeUIscUJBQXNCLEVBQUM7RUFFeEUsTUFBTU8sb0JBQW9CLEdBQUcxSCxRQUFRLENBQUNDLGFBQWEsQ0FDbEQsMkJBQTJCLENBQzNCO0VBQ0R5SCxvQkFBb0IsQ0FBQ2hDLFdBQVcsR0FBSSxnQkFBZTRCLHNCQUF1QixFQUFDOztFQUUzRTtFQUNBLE1BQU1LLFdBQVcsR0FBRzNILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUMzRCxNQUFNMkgsZUFBZSxHQUFHNUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFFcEUsSUFBSTRILGFBQWE7RUFDakIsSUFBSVYscUJBQXFCLEtBQUssQ0FBQyxJQUFJRyxzQkFBc0IsS0FBSyxDQUFDLEVBQUU7SUFDaEVPLGFBQWEsR0FBRyxDQUFDO0VBQ2xCLENBQUMsTUFBTTtJQUNOQSxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUN4QloscUJBQXFCLEdBQUdHLHNCQUFzQixHQUFJLEdBQUcsQ0FDdEQ7RUFDRjtFQUVBSyxXQUFXLENBQUN0QyxLQUFLLENBQUMyQyxLQUFLLEdBQUksR0FBRUgsYUFBYyxHQUFFO0VBQzdDRCxlQUFlLENBQUN2QyxLQUFLLENBQUMyQyxLQUFLLEdBQUksR0FBRUgsYUFBYyxHQUFFO0FBQ2xELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNvQzs7QUFFcEM7QUFDeUI7QUFDUDtBQUNLO0FBQ0M7QUFDQTtBQUNBOztBQUV4QjtBQUM4RDtBQUM5RDdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDaUksR0FBRyxHQUFHRCxzREFBZ0I7QUFDTztBQUNwRWpJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUNpSSxHQUFHLEdBQUdDLDREQUFnQjtBQUNlO0FBQ2pGbkksUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNpSSxHQUFHLEdBQUdFLDZFQUFZO0FBQ087QUFDOURwSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDaUksR0FBRyxHQUFHRywwREFBYTs7QUFFNUQ7QUFDOEM7QUFDTTtBQUNwREMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTTtFQUNyQjtFQUNBO0VBQ0F2QixtRUFBaUIsRUFBRTtFQUNuQnJFLDZEQUFXLEVBQUU7QUFDZCxDQUFDOzs7Ozs7Ozs7O0FDN0JELE1BQU02RixNQUFNLEdBQUcsWUFBWTtFQUMxQixNQUFNckcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtJQUNqREMsTUFBTSxFQUFFLE1BQU07SUFDZEksT0FBTyxFQUFFO01BQUUsY0FBYyxFQUFFO0lBQW1CO0VBQy9DLENBQUMsQ0FBQztFQUVGLElBQUlOLFFBQVEsQ0FBQ08sRUFBRSxFQUFFO0lBQ2hCMUMsUUFBUSxDQUFDeUksUUFBUSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQy9CLENBQUMsTUFBTTtJQUNOOUYsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0VBQzVCO0FBQ0QsQ0FBQztBQUVENUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRW1JLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiaEI7QUFDZ0M7QUFFNUUsTUFBTTdGLFdBQVcsR0FBRyxrQkFBaUM7RUFBQSxJQUFqQmlHLFVBQVUsdUVBQUcsRUFBRTtFQUN6RCxNQUFNQyxhQUFhLEdBQUc3SSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztFQUNwRTRJLGFBQWEsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFFNUIsTUFBTTdCLGdCQUFnQixHQUFHLE1BQU03RSxLQUFLLENBQUMsWUFBWSxDQUFDO0VBQ2xELElBQUk4RSxZQUFZLEdBQUcsTUFBTUQsZ0JBQWdCLENBQUN4QyxJQUFJLEVBQUU7RUFFaEQsTUFBTXNFLGVBQWUsR0FBR0gsVUFBVSxDQUFDakksV0FBVyxFQUFFO0VBQ2hELElBQUlvSSxlQUFlLEtBQUssRUFBRSxJQUFJLE9BQU9BLGVBQWUsS0FBSyxRQUFRLEVBQUU7SUFDbEUsTUFBTUMsb0JBQW9CLEdBQUc5QixZQUFZLENBQUNFLE1BQU0sQ0FBRUMsSUFBSSxJQUFLO01BQzFELE9BQ0NBLElBQUksQ0FBQzFGLEtBQUssQ0FBQ2hCLFdBQVcsRUFBRSxDQUFDc0ksUUFBUSxDQUFDRixlQUFlLENBQUMsSUFDbEQxQixJQUFJLENBQUN4RixNQUFNLENBQUNsQixXQUFXLEVBQUUsQ0FBQ3NJLFFBQVEsQ0FBQ0YsZUFBZSxDQUFDO0lBRXJELENBQUMsQ0FBQztJQUNGN0IsWUFBWSxHQUFHOEIsb0JBQW9CO0VBQ3BDO0VBRUEsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdoQyxZQUFZLENBQUN6QixNQUFNLEVBQUV5RCxDQUFDLEVBQUUsRUFBRTtJQUM3QyxNQUFNN0IsSUFBSSxHQUFHSCxZQUFZLENBQUNnQyxDQUFDLENBQUM7SUFDNUIsTUFBTUMsUUFBUSxHQUFHbkosUUFBUSxDQUFDb0osYUFBYSxDQUFDLEtBQUssQ0FBQztJQUU5QyxJQUFJL0IsSUFBSSxDQUFDbkYsT0FBTyxLQUFLLElBQUksSUFBSW1GLElBQUksQ0FBQ25GLE9BQU8sS0FBSyxNQUFNLEVBQUU7TUFDckRpSCxRQUFRLENBQUNyQyxTQUFTLENBQUN1QyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUMsTUFBTSxJQUFJaEMsSUFBSSxDQUFDbkYsT0FBTyxLQUFLLEtBQUssRUFBRWlILFFBQVEsQ0FBQ3JDLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFFckVGLFFBQVEsQ0FBQ3JDLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7SUFDeERGLFFBQVEsQ0FBQ2hKLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHK0ksQ0FBQyxDQUFDO0lBQ3hDQyxRQUFRLENBQUNoSixZQUFZLENBQUMsWUFBWSxFQUFFK0ksQ0FBQyxDQUFDOztJQUV0QztJQUNBLE1BQU1JLFFBQVEsR0FBR3RKLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDL0NFLFFBQVEsQ0FBQ3hDLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7SUFDdkRDLFFBQVEsQ0FBQzVELFdBQVcsR0FBRyxTQUFTO0lBQ2hDNEQsUUFBUSxDQUFDakosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGtCQUFrQjtNQUNwRCxNQUFNa0osUUFBUSxHQUFJLGNBQWFsQyxJQUFJLENBQUN0QixFQUFHLEVBQUM7TUFDeEMsTUFBTTVELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNtSCxRQUFRLEVBQUU7UUFDdENsSCxNQUFNLEVBQUU7TUFDVCxDQUFDLENBQUM7TUFDRixJQUFJRixRQUFRLENBQUNPLEVBQUUsRUFBRTtRQUNoQnNFLGlCQUFpQixFQUFFO1FBQ25CckUsV0FBVyxFQUFFO01BQ2QsQ0FBQyxNQUFNO1FBQ05DLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztNQUNoQztJQUNELENBQUMsQ0FBQztJQUNGO0lBQ0EsTUFBTTRHLE9BQU8sR0FBR3hKLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDOUNJLE9BQU8sQ0FBQzFDLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQztJQUM5REcsT0FBTyxDQUFDOUQsV0FBVyxHQUFHLFFBQVE7SUFDOUI4RCxPQUFPLENBQUNuSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCb0osS0FBSyxFQUFFO01BQ3hEO01BQ0F6SixRQUFRLENBQ05DLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUNuQ0UsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztNQUUxQyxJQUFJdUosZ0JBQWdCLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxVQUFVLENBQUM7TUFFeEUsSUFBSUMsZ0JBQWdCLEdBQUc7UUFDdEJySSxLQUFLLEVBQUUrSCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ2hFLFdBQVc7UUFDdEM3RCxNQUFNLEVBQUU2SCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ2hFLFdBQVcsQ0FBQ1csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDNEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyRXhFLElBQUksRUFBRTRILGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDaEUsV0FBVyxDQUFDVyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25EdEUsS0FBSyxFQUFFMkgsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUNoRSxXQUFXLENBQUNXLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcERyRSxPQUFPLEVBQUUwSCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ2hFLFdBQVcsQ0FBQ1csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RHBFLFlBQVksRUFBRXlILGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDaEUsV0FBVyxDQUFDVyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNEbkUsT0FBTyxFQUFFd0gsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUNRLFVBQVUsQ0FBQ0MsT0FBTztRQUMvQ0MsT0FBTyxFQUFFL0MsSUFBSSxDQUFDdEI7TUFDZixDQUFDOztNQUVEO01BQ0EvRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2EsS0FBSyxHQUFHa0osZ0JBQWdCLENBQUNySSxLQUFLO01BQ3RFM0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2EsS0FBSyxHQUFHa0osZ0JBQWdCLENBQUNuSSxNQUFNO01BQ3hFN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNhLEtBQUssR0FBR2tKLGdCQUFnQixDQUFDbEksSUFBSTtNQUNwRTlCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDYSxLQUFLLEdBQUdrSixnQkFBZ0IsQ0FBQ2pJLEtBQUs7TUFDdEUvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDYSxLQUFLLEdBQzlDa0osZ0JBQWdCLENBQUNoSSxPQUFPO01BQ3pCaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQ2EsS0FBSyxHQUN0RGtKLGdCQUFnQixDQUFDL0gsWUFBWTtNQUM5QmpDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUNhLEtBQUssR0FDbERrSixnQkFBZ0IsQ0FBQzlILE9BQU87TUFFekJsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQzJELE9BQU8sQ0FBQ0MsTUFBTSxHQUNyRG1HLGdCQUFnQixDQUFDSSxPQUFPO0lBQzFCLENBQUMsQ0FBQztJQUNGO0lBQ0EsTUFBTUMsWUFBWSxHQUFHckssUUFBUSxDQUFDb0osYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsRGlCLFlBQVksQ0FBQ3ZELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1Q2dCLFlBQVksQ0FBQ2xLLFlBQVksQ0FDeEIsS0FBSyxFQUNMd0ksb0VBQXVCLENBQ3ZCO0lBQ0QwQixZQUFZLENBQUNsSyxZQUFZLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDO0lBQ3BEO0lBQ0EsTUFBTW1LLFNBQVMsR0FBR3RLLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDOUNrQixTQUFTLENBQUN4RCxTQUFTLENBQUN1QyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JDaUIsU0FBUyxDQUFDNUUsV0FBVyxHQUFHMkIsSUFBSSxDQUFDMUYsS0FBSztJQUNsQztJQUNBLE1BQU00SSxVQUFVLEdBQUd2SyxRQUFRLENBQUNvSixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2pEbUIsVUFBVSxDQUFDekQsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN2QyxNQUFNbUIsV0FBVyxHQUFHeEssUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsRG9CLFdBQVcsQ0FBQzFELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDcENtQixXQUFXLENBQUM5RSxXQUFXLEdBQUcsTUFBTTtJQUNoQyxNQUFNK0UsYUFBYSxHQUFHekssUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNwRHFCLGFBQWEsQ0FBQzNELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckNvQixhQUFhLENBQUMvRSxXQUFXLEdBQUcyQixJQUFJLENBQUN4RixNQUFNO0lBQ3ZDMEksVUFBVSxDQUFDRyxNQUFNLENBQUNGLFdBQVcsRUFBRUMsYUFBYSxDQUFDO0lBQzdDO0lBQ0EsTUFBTUUsUUFBUSxHQUFHM0ssUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMvQ3VCLFFBQVEsQ0FBQzdELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDbkMsTUFBTXVCLFNBQVMsR0FBRzVLLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDaER3QixTQUFTLENBQUM5RCxTQUFTLENBQUN1QyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2xDdUIsU0FBUyxDQUFDbEYsV0FBVyxHQUFHLFFBQVE7SUFDaEMsTUFBTW1GLFdBQVcsR0FBRzdLLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbER5QixXQUFXLENBQUMvRCxTQUFTLENBQUN1QyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDd0IsV0FBVyxDQUFDbkYsV0FBVyxHQUFHMkIsSUFBSSxDQUFDdkYsSUFBSTtJQUNuQzZJLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxTQUFTLEVBQUVDLFdBQVcsQ0FBQztJQUN2QztJQUNBLE1BQU1DLFVBQVUsR0FBRzlLLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDakQwQixVQUFVLENBQUNoRSxTQUFTLENBQUN1QyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLE1BQU0wQixVQUFVLEdBQUcvSyxRQUFRLENBQUNvSixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2pEMkIsVUFBVSxDQUFDakUsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNuQzBCLFVBQVUsQ0FBQ3JGLFdBQVcsR0FBRyxTQUFTO0lBQ2xDLE1BQU1zRixTQUFTLEdBQUdoTCxRQUFRLENBQUNvSixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2hENEIsU0FBUyxDQUFDbEUsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNoQzJCLFNBQVMsQ0FBQ3RGLFdBQVcsR0FBRzJCLElBQUksQ0FBQ3RGLEtBQUs7SUFDbEMrSSxVQUFVLENBQUNKLE1BQU0sQ0FBQ0ssVUFBVSxFQUFFQyxTQUFTLENBQUM7SUFDeEM7SUFDQSxNQUFNQyxXQUFXLEdBQUdqTCxRQUFRLENBQUNvSixhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2xENkIsV0FBVyxDQUFDbkUsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxNQUFNNkIsWUFBWSxHQUFHbEwsUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNuRDhCLFlBQVksQ0FBQ3BFLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDckM2QixZQUFZLENBQUN4RixXQUFXLEdBQUcsV0FBVztJQUN0QyxNQUFNeUYsY0FBYyxHQUFHbkwsUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNyRCtCLGNBQWMsQ0FBQ3JFLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDdkM4QixjQUFjLENBQUN6RixXQUFXLEdBQUcyQixJQUFJLENBQUNyRixPQUFPO0lBQ3pDaUosV0FBVyxDQUFDUCxNQUFNLENBQUNRLFlBQVksRUFBRUMsY0FBYyxDQUFDO0lBQ2hEO0lBQ0EsTUFBTUMsV0FBVyxHQUFHcEwsUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsRGdDLFdBQVcsQ0FBQ3RFLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQyxNQUFNZ0MsU0FBUyxHQUFHckwsUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNoRGlDLFNBQVMsQ0FBQ3ZFLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDbENnQyxTQUFTLENBQUMzRixXQUFXLEdBQUcsYUFBYTtJQUNyQyxNQUFNNEYsV0FBVyxHQUFHdEwsUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsRGtDLFdBQVcsQ0FBQ3hFLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekNpQyxXQUFXLENBQUM1RixXQUFXLEdBQUcyQixJQUFJLENBQUNwRixZQUFZO0lBQzNDbUosV0FBVyxDQUFDVixNQUFNLENBQUNXLFNBQVMsRUFBRUMsV0FBVyxDQUFDO0lBQzFDOztJQUVBLE1BQU1DLFFBQVEsR0FBR3ZMLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDL0NtQyxRQUFRLENBQUN6RSxTQUFTLENBQUN1QyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLENBQUM7SUFDbEVrQyxRQUFRLENBQUM3RixXQUFXLEdBQUcsY0FBYztJQUNyQzZGLFFBQVEsQ0FBQ2xMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxnQkFBZ0JvSixLQUFLLEVBQUU7TUFDekQsTUFBTStCLGdCQUFnQixHQUFHLE1BQU12RixnRUFBYSxDQUMzQ29CLElBQUksQ0FBQzFGLEtBQUssQ0FBQ2hCLFdBQVcsRUFBRSxDQUFDaUIsSUFBSSxFQUFFLENBQy9CO01BQ0QsTUFBTTZKLFFBQVEsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7TUFFekMsTUFBTUMsZUFBZSxHQUFHO1FBQ3ZCaEssS0FBSyxFQUFFOEosUUFBUSxDQUFDOUosS0FBSztRQUNyQkUsTUFBTSxFQUFFNEosUUFBUSxDQUFDRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9COUosSUFBSSxFQUFFMkosUUFBUSxDQUFDM0osSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QkcsWUFBWSxFQUFFd0osUUFBUSxDQUFDSSxrQkFBa0I7UUFDekNDLGFBQWEsRUFBRyx5Q0FBd0NMLFFBQVEsQ0FBQzNKLElBQUksQ0FBQyxDQUFDLENBQUU7TUFDMUUsQ0FBQztNQUVELE1BQU1pSyxlQUFlLEdBQUcsUUFNbEI7UUFBQSxJQU5tQjtVQUN4QnBLLEtBQUs7VUFDTEUsTUFBTTtVQUNOQyxJQUFJO1VBQ0pHLFlBQVk7VUFDWjZKO1FBQ0QsQ0FBQztRQUNBeEIsU0FBUyxDQUFDNUUsV0FBVyxHQUFHL0QsS0FBSztRQUM3QjRJLFVBQVUsQ0FBQzdFLFdBQVcsR0FBRzdELE1BQU07UUFDL0I4SSxRQUFRLENBQUNqRixXQUFXLEdBQUc1RCxJQUFJO1FBQzNCc0osV0FBVyxDQUFDMUYsV0FBVyxHQUFHekQsWUFBWTtRQUN0Q29JLFlBQVksQ0FBQ2xLLFlBQVksQ0FBQyxLQUFLLEVBQUUyTCxhQUFhLENBQUM7TUFDaEQsQ0FBQztNQUVEQyxlQUFlLENBQUNKLGVBQWUsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFDRjtJQUNBLE1BQU1LLGVBQWUsR0FBR2hNLFFBQVEsQ0FBQ29KLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDdEQ0QyxlQUFlLENBQUNsRixTQUFTLENBQUN1QyxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDbEQyQyxlQUFlLENBQUN0RyxXQUFXLEdBQUcsZ0JBQWdCO0lBQzlDO0lBQ0EsTUFBTXVHLGtCQUFrQixHQUFHak0sUUFBUSxDQUFDb0osYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMxRDZDLGtCQUFrQixDQUFDbkYsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxNQUFNNkMscUJBQXFCLEdBQUdsTSxRQUFRLENBQUNvSixhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdEOEMscUJBQXFCLENBQUMvTCxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztJQUN0RCtMLHFCQUFxQixDQUFDcEYsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsRDtJQUNBLElBQUloQyxJQUFJLENBQUNuRixPQUFPLEtBQUssSUFBSSxJQUFJbUYsSUFBSSxDQUFDbkYsT0FBTyxLQUFLLE1BQU0sRUFDbkRnSyxxQkFBcUIsQ0FBQy9CLE9BQU8sR0FBRyxJQUFJO0lBQ3JDO0lBQ0EsTUFBTWdDLGlCQUFpQixHQUFHbk0sUUFBUSxDQUFDb0osYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN4RCtDLGlCQUFpQixDQUFDckYsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQztJQUM5RDRDLGtCQUFrQixDQUFDdkIsTUFBTSxDQUFDd0IscUJBQXFCLEVBQUVDLGlCQUFpQixDQUFDO0lBQ25FOztJQUVBRCxxQkFBcUIsQ0FBQzdMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxnQkFBZ0JvSixLQUFLLEVBQUU7TUFDdEUsSUFBSTJDLE9BQU8sR0FBRzNDLEtBQUssQ0FBQ0ksTUFBTTtNQUUxQixJQUFJaEIsYUFBYSxHQUFHdUQsT0FBTyxDQUFDdEMsYUFBYSxDQUFDQSxhQUFhO01BRXZELElBQUlqQixhQUFhLENBQUMvQixTQUFTLENBQUN1RixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakR4RCxhQUFhLENBQUMvQixTQUFTLENBQUN3RixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzFDekQsYUFBYSxDQUFDL0IsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNwQyxDQUFDLE1BQU0sSUFBSVIsYUFBYSxDQUFDL0IsU0FBUyxDQUFDdUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BEeEQsYUFBYSxDQUFDL0IsU0FBUyxDQUFDd0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0Q3pELGFBQWEsQ0FBQy9CLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDeEM7TUFDQSxJQUFJa0QsS0FBSyxHQUFHMUQsYUFBYSxDQUFDMkQsWUFBWSxDQUFDLFlBQVksQ0FBQztNQUNwRHRGLFlBQVksQ0FBQ3FGLEtBQUssQ0FBQyxDQUFDckssT0FBTyxHQUFHa0ssT0FBTyxDQUFDakMsT0FBTztNQUU3QyxNQUFNc0MsaUJBQWlCLEdBQUc7UUFDekJ2SyxPQUFPLEVBQUVnRixZQUFZLENBQUNxRixLQUFLLENBQUMsQ0FBQ3JLO01BQzlCLENBQUM7TUFFRCxNQUFNcUgsUUFBUSxHQUFJLGNBQWFsQyxJQUFJLENBQUN0QixFQUFHLEVBQUM7TUFDeEMsTUFBTTVELFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNtSCxRQUFRLEVBQUU7UUFDdENsSCxNQUFNLEVBQUUsS0FBSztRQUNiQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDaUssaUJBQWlCLENBQUM7UUFDdkNoSyxPQUFPLEVBQUU7VUFBRSxjQUFjLEVBQUU7UUFBbUI7TUFDL0MsQ0FBQyxDQUFDO01BQ0YsSUFBSU4sUUFBUSxDQUFDTyxFQUFFLEVBQUU7UUFDaEJzRSxpQkFBaUIsRUFBRTtRQUNuQnJFLFdBQVcsRUFBRTtRQUNiO1FBQ0E7TUFDRCxDQUFDLE1BQU07UUFDTkMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDO01BQzVDOztNQUVBO0lBQ0QsQ0FBQyxDQUFDOztJQUVGdUcsUUFBUSxDQUFDdUIsTUFBTSxDQUNkcEIsUUFBUSxFQUNSRSxPQUFPLEVBQ1BhLFlBQVksRUFDWkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZJLFFBQVEsRUFDUkcsVUFBVSxFQUNWRyxXQUFXLEVBQ1hHLFdBQVcsRUFDWEcsUUFBUSxFQUNSUyxlQUFlLEVBQ2ZDLGtCQUFrQixDQUNsQjtJQUNEcEQsYUFBYSxDQUFDNkQsV0FBVyxDQUFDdkQsUUFBUSxDQUFDO0VBQ3BDO0FBQ0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaFFEO0FBQ08sTUFBTW5GLElBQUksR0FBRyxnQkFBeUM7RUFBQSxJQUEvQjtJQUFFWSxRQUFRO0lBQUVELEtBQUs7SUFBRWE7RUFBUyxDQUFDO0VBQzFELE9BQU87SUFDTlosUUFBUTtJQUNSRCxLQUFLO0lBQ0xhO0VBQ0QsQ0FBQztBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCd0Y7QUFDUDtBQUNqQjtBQUNQO0FBRXpELE1BQU11SCxhQUFhLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU87QUFDOUQsSUFBSUMsWUFBWSxHQUFHSCxhQUFhO0FBRWhDLE1BQU1JLFFBQVEsR0FBR25OLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQzVELE1BQU1tTixNQUFNLEdBQUdwTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUN4RCxNQUFNb04sYUFBYSxHQUFHck4sUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDL0QsTUFBTXFOLGFBQWEsR0FBR3ROLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQ2pFLE1BQU1zTixTQUFTLEdBQUd2TixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDcEQsTUFBTXVOLFVBQVUsR0FBR3hOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUN2RCxNQUFNd04sV0FBVyxHQUFHek4sUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBRXBELFNBQVN5TixlQUFlLENBQUNDLFFBQVEsRUFBRTtFQUN6Q1QsWUFBWSxHQUFHUyxRQUFRO0VBQ3ZCLElBQUlULFlBQVksS0FBSyxNQUFNLEVBQUU7SUFDNUJDLFFBQVEsQ0FBQ3JHLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUIrRCxNQUFNLENBQUN0RyxTQUFTLENBQUN1QyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVCZ0UsYUFBYSxDQUFDdkcsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQ2lFLGFBQWEsQ0FBQ3hHLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbkNrRSxTQUFTLENBQUNwTixZQUFZLENBQUMsTUFBTSxFQUFFME0sNERBQWdCLENBQUM7SUFDaERXLFVBQVUsQ0FBQ3JOLFlBQVksQ0FDdEIsS0FBSyxFQUNMd00sbUZBQWlCLENBQ2pCO0lBQ0RjLFdBQVcsQ0FBQ3RELE9BQU8sR0FBRyxJQUFJO0VBQzNCO0FBQ0Q7QUFFQXNELFdBQVcsQ0FBQ3BOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVb0osS0FBSyxFQUFFO0VBQ3RELElBQUkyQyxPQUFPLEdBQUczQyxLQUFLLENBQUNJLE1BQU07RUFDMUIsSUFBSXVDLE9BQU8sQ0FBQ2pDLE9BQU8sRUFBRTtJQUNwQmdELFFBQVEsQ0FBQ3JHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNqQ3FHLE1BQU0sQ0FBQ3RHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQnNHLGFBQWEsQ0FBQ3ZHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0Q3VHLGFBQWEsQ0FBQ3hHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0Q3dHLFNBQVMsQ0FBQ3BOLFlBQVksQ0FBQyxNQUFNLEVBQUUwTSw0REFBZ0IsQ0FBQztJQUNoRFcsVUFBVSxDQUFDck4sWUFBWSxDQUN0QixLQUFLLEVBQ0x3TSxtRkFBaUIsQ0FDakI7SUFDRGUsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUN2QlYsWUFBWSxDQUFDWSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUN0QyxDQUFDLE1BQU07SUFDTlQsUUFBUSxDQUFDckcsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pDcUcsTUFBTSxDQUFDdEcsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQy9Cc0csYUFBYSxDQUFDdkcsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3RDdUcsYUFBYSxDQUFDeEcsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3RDd0csU0FBUyxDQUFDcE4sWUFBWSxDQUFDLE1BQU0sRUFBRTJNLHNEQUFlLENBQUM7SUFDL0NVLFVBQVUsQ0FBQ3JOLFlBQVksQ0FDdEIsS0FBSyxFQUNMeU0sNkVBQWdCLENBQ2hCO0lBQ0RjLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDeEJWLFlBQVksQ0FBQ1ksT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7RUFDdkM7QUFDRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERjtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHdKQUF5RDtBQUNyRyw0Q0FBNEMsd0lBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsMkNBQTJDLCtCQUErQixpQ0FBaUMscUNBQXFDLG9DQUFvQyxxQ0FBcUMsb0NBQW9DLGtDQUFrQyxzQkFBc0IsOEJBQThCLHFDQUFxQywyREFBMkQsT0FBTyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQixpQ0FBaUMsR0FBRyxRQUFRLHdCQUF3Qiw4QkFBOEIsR0FBRyw2Q0FBNkMsbUdBQW1HLDBCQUEwQiw0QkFBNEIsR0FBRyx1Q0FBdUMsMEJBQTBCLDRCQUE0QixHQUFHLHVDQUF1QywrREFBK0QsNEJBQTRCLEdBQUcsMkJBQTJCLGdEQUFnRCxrRkFBa0YsMEJBQTBCLDZCQUE2QixHQUFHLHdCQUF3QixzQ0FBc0MsMEJBQTBCLDRCQUE0QixHQUFHLDZFQUE2RSxxQ0FBcUMsNEJBQTRCLEdBQUcsdUJBQXVCLDBCQUEwQiw0QkFBNEIsR0FBRyxpQ0FBaUMsNkNBQTZDLDBCQUEwQiw0QkFBNEIsR0FBRywwQkFBMEIsa0JBQWtCLG1CQUFtQiwrREFBK0QsR0FBRyxtQ0FBbUMsb0JBQW9CLDZCQUE2Qix1QkFBdUIsd0VBQXdFLEtBQUssOENBQThDLG9CQUFvQixrQkFBa0IsdUJBQXVCLG1FQUFtRSxLQUFLLGtFQUFrRSx5QkFBeUIseUJBQXlCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLEdBQUcsdUNBQXVDLGdHQUFnRyw0QkFBNEIsMEJBQTBCLDBEQUEwRCxrQkFBa0IsNEJBQTRCLG9FQUFvRSxpRUFBaUUsaUNBQWlDLGtCQUFrQiwwQkFBMEIsV0FBVyxZQUFZLG9CQUFvQix3RUFBd0Usb0VBQW9FLGlFQUFpRSwrQkFBK0Isa0JBQWtCLDBCQUEwQixHQUFHLDZDQUE2QyxxQkFBcUIseUJBQXlCLDBCQUEwQiw0QkFBNEIsR0FBRyx1QkFBdUIsa0RBQWtELDBCQUEwQixvQkFBb0IsMEJBQTBCLDhDQUE4QyxHQUFHLHlEQUF5RCw0Q0FBNEMsR0FBRywrQkFBK0Isc0NBQXNDLDJCQUEyQixHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxnQ0FBZ0MseUJBQXlCLDRCQUE0QixrQkFBa0IsbUJBQW1CLEdBQUcscURBQXFELGlCQUFpQixlQUFlLGdCQUFnQixHQUFHLHFEQUFxRCx5QkFBeUIsc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixtREFBbUQsMEVBQTBFLHNCQUFzQixHQUFHLGlEQUFpRCx5QkFBeUIsb0JBQW9CLG1CQUFtQixrQkFBa0IsZ0JBQWdCLGtCQUFrQixxQ0FBcUMsOEJBQThCLHNCQUFzQixHQUFHLHdFQUF3RSw0Q0FBNEMsR0FBRywyQkFBMkIsOENBQThDLEdBQUcsOElBQThJLDBDQUEwQyxzQ0FBc0Msa0NBQWtDLEdBQUcsc0VBQXNFLDBCQUEwQixHQUFHLDZEQUE2RCx5QkFBeUIsR0FBRyxrQkFBa0IseUJBQXlCLEdBQUcsMkNBQTJDLHlCQUF5QixzQkFBc0IsaUJBQWlCLGtCQUFrQixHQUFHLHlDQUF5QyxrREFBa0QsR0FBRyx1Q0FBdUMscURBQXFELEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLGNBQWMsdUJBQXVCLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0IsNEJBQTRCLEdBQUcsYUFBYSwwQkFBMEIsNEJBQTRCLDRCQUE0QixHQUFHLG1CQUFtQixpQ0FBaUMsc0NBQXNDLHNCQUFzQixHQUFHLGNBQWMsb0JBQW9CLHNCQUFzQixHQUFHLFFBQVEsb0JBQW9CLGtCQUFrQixrQkFBa0IsdUJBQXVCLCtDQUErQyx1Q0FBdUMsOEJBQThCLEdBQUcsbURBQW1ELHFEQUFxRCwwRUFBMEUsc0NBQXNDLG1CQUFtQixHQUFHLGNBQWMscUJBQXFCLDBCQUEwQiw0Q0FBNEMsU0FBUyxxREFBcUQsbUJBQW1CLHNDQUFzQyxHQUFHLDZDQUE2QyxxQkFBcUIsc0JBQXNCLEdBQUcsd0NBQXdDLDhDQUE4Qyw2Q0FBNkMsdUJBQXVCLDBCQUEwQix5QkFBeUIsb0JBQW9CLHVCQUF1QixvQkFBb0IsR0FBRyxnREFBZ0Qsa0JBQWtCLDZCQUE2QixzQkFBc0IsR0FBRyxzQ0FBc0MscUJBQXFCLHFCQUFxQiw4Q0FBOEMseUJBQXlCLHdCQUF3QixtQkFBbUIsR0FBRyxtREFBbUQsOENBQThDLHdDQUF3QyxHQUFHLG1CQUFtQix3QkFBd0IscUJBQXFCLEdBQUcsK0JBQStCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyw4QkFBOEIsb0RBQW9ELHdDQUF3Qyw2QkFBNkIseUJBQXlCLCtCQUErQixnQ0FBZ0MsOEJBQThCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHlCQUF5QixHQUFHLHVCQUF1QixvR0FBb0csbUJBQW1CLGtCQUFrQix5QkFBeUIscUJBQXFCLEdBQUcseUJBQXlCLG9HQUFvRywwQkFBMEIsbUJBQW1CLGtCQUFrQix5QkFBeUIscUJBQXFCLEdBQUcsaURBQWlELG9CQUFvQixpRUFBaUUscUJBQXFCLHdCQUF3Qiw4QkFBOEIseUJBQXlCLEdBQUcseUNBQXlDLHdGQUF3RixnRkFBZ0YsR0FBRyx1Q0FBdUMseUJBQXlCLHlCQUF5QixvQkFBb0IsNkJBQTZCLHdCQUF3Qix1QkFBdUIsK0dBQStHLHlCQUF5QixvR0FBb0csR0FBRyx5Q0FBeUMsdUJBQXVCLEdBQUcsa0dBQWtHLDZCQUE2QixzQkFBc0IsR0FBRyw4QkFBOEIsb0dBQW9HLG1CQUFtQixHQUFHLGtDQUFrQyxvR0FBb0csbUJBQW1CLEdBQUcscUNBQXFDLHlCQUF5QixlQUFlLGtCQUFrQixzQkFBc0IsR0FBRyw2Q0FBNkMseUJBQXlCLGVBQWUsa0JBQWtCLHNCQUFzQixtQkFBbUIsc0JBQXNCLHFCQUFxQixHQUFHLGdEQUFnRCx5QkFBeUIsZUFBZSxrQkFBa0Isc0JBQXNCLG1CQUFtQixzQkFBc0IscUJBQXFCLEdBQUcsd0NBQXdDLHlCQUF5QixnQkFBZ0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsR0FBRyw2Q0FBNkMsc0JBQXNCLHlCQUF5QixrQkFBa0Isb0JBQW9CLEdBQUcsNkhBQTZILG9CQUFvQiwyQ0FBMkMsb0JBQW9CLHNCQUFzQixhQUFhLGNBQWMsbUJBQW1CLDJDQUEyQyxpQ0FBaUMsMEJBQTBCLEdBQUcscUZBQXFGLHlCQUF5Qix1QkFBdUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQixzQkFBc0Isd0JBQXdCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLHlCQUF5Qiw2QkFBNkIseUJBQXlCLEdBQUcsZUFBZSx5QkFBeUIsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0Isc0pBQXNKLHFCQUFxQix5QkFBeUIscUJBQXFCLGlDQUFpQyxrQkFBa0IsdUJBQXVCLEdBQUcscUdBQXFHLHVCQUF1Qix5QkFBeUIseUJBQXlCLEdBQUcsdUNBQXVDLGlCQUFpQix5QkFBeUIsR0FBRyxtSEFBbUgseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0IsaUJBQWlCLEdBQUcsOEJBQThCLG1CQUFtQiwrQkFBK0IsK0JBQStCLDZCQUE2QixHQUFHLHFCQUFxQixXQUFXLGFBQWEsYUFBYSxhQUFhLEdBQUcsWUFBWSxpQkFBaUIsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUcsb0dBQW9HLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHFCQUFxQixHQUFHLHVJQUF1SSw2QkFBNkIsdUJBQXVCLG9DQUFvQywrQ0FBK0MsNEJBQTRCLG9DQUFvQyxzQkFBc0Isb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLHVCQUF1Qix5Q0FBeUMsNEJBQTRCLHlCQUF5QixnQ0FBZ0Msd0VBQXdFLEdBQUcscVVBQXFVLGtCQUFrQixpQkFBaUIsNkRBQTZELEdBQUcsNEJBQTRCLHlCQUF5QixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHVCQUF1QixvQ0FBb0MsMEJBQTBCLHlCQUF5QixzQkFBc0IscUJBQXFCLDZCQUE2QiwyQkFBMkIsNEJBQTRCLDBCQUEwQix3QkFBd0IscUJBQXFCLDRDQUE0QyxvQ0FBb0MsMENBQTBDLEdBQUcsNkJBQTZCLGtCQUFrQixpQ0FBaUMsd0JBQXdCLHdCQUF3QixpRUFBaUUsUUFBUSxpQkFBaUIscUJBQXFCLE9BQU8sS0FBSyw2QkFBNkIsa0JBQWtCLHlCQUF5QixPQUFPLDRDQUE0QyxxQkFBcUIsT0FBTywwQ0FBMEMsbURBQW1ELE9BQU8sMENBQTBDLHFEQUFxRCxPQUFPLGlCQUFpQiwwQkFBMEIsdUJBQXVCLHFCQUFxQixpQkFBaUIsaUNBQWlDLGtDQUFrQyxzQ0FBc0MseUJBQXlCLHNCQUFzQiw2QkFBNkIsMkJBQTJCLE9BQU8seUJBQXlCLGlDQUFpQyxPQUFPLGlCQUFpQix5QkFBeUIsT0FBTyxpQkFBaUIsd0JBQXdCLE9BQU8sd0JBQXdCLG1CQUFtQixPQUFPLEdBQUcsNkJBQTZCLGtCQUFrQixvREFBb0QsR0FBRyw2REFBNkQsd0JBQXdCLE9BQU8scUJBQXFCLHNFQUFzRSwyRUFBMkUsb0JBQW9CLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLGFBQWEsMkJBQTJCLDREQUE0RCxzREFBc0QsbUNBQW1DLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixPQUFPLDRCQUE0Qix3QkFBd0Isb0JBQW9CLE9BQU8seUJBQXlCLDBDQUEwQyxPQUFPLDhCQUE4Qix1RUFBdUUsT0FBTyw4Q0FBOEMsb0JBQW9CLHNCQUFzQixzQkFBc0IsT0FBTyw0R0FBNEcsMEJBQTBCLE9BQU8sR0FBRyw4QkFBOEIsVUFBVSxnREFBZ0QsNEJBQTRCLElBQUksR0FBRyxrREFBa0QsbUJBQW1CLG1CQUFtQixrQkFBa0IseUJBQXlCLHNCQUFzQixtQkFBbUIsa0JBQWtCLG9CQUFvQiwyQkFBMkIsb0hBQW9ILGtCQUFrQix5SUFBeUksY0FBYyx3QkFBd0IseUJBQXlCLDJCQUEyQixPQUFPLGlCQUFpQix3QkFBd0IsT0FBTyxxQ0FBcUMsbURBQW1ELG1CQUFtQiw4Q0FBOEMsU0FBUyxPQUFPLEtBQUssU0FBUywyRkFBMkYsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sUUFBUSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxTQUFTLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxTQUFTLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLGNBQWMsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssU0FBUyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvYWRkQm9va0Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvYm9va0NsYXNzLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2VkaXRCb29rRm9ybS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9lZGl0VXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvZmV0Y2hCb29rSW5mby5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9oYW1idXJnZXJNZW51LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2hlcm9EaXNwbGF5LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9saWJyYXJ5L2xvZ291dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9yZW5kZXJCb29rcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS91c2VyQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL3RoZW1lVG9nZ2xlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jc3MvbGlicmFyeVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2Nzcy9saWJyYXJ5U3R5bGUuY3NzPzRiYWMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vYm9va0NsYXNzLmpzXCJcblxuY29uc3QgYWRkQm9va1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9ib29rX3NlY3Rpb25cIik7XG5mdW5jdGlvbiByZW5kZXJBZGRCb29rRm9ybSgpIHtcblx0YWRkQm9va1NlY3Rpb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG59XG5jb25zdCBhZGRCb29rQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLW9wZW5cIik7XG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBZGRCb29rRm9ybSk7XG5cbi8vIENMRUFSIEJPT0sgRk9STVxuZnVuY3Rpb24gY2xlYXJOZXdCb29rRm9ybSgpIHtcblx0Y29uc3QgYm9va0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9vay1mb3JtLWNvbnRyb2xcIik7XG5cdGZvciAoY29uc3QgaW5wdXQgb2YgYm9va0lucHV0cykge1xuXHRcdGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIpXG5cdFx0XHRpbnB1dC5vcHRpb25zLnNlbGVjdGVkSW5kZXggPSAwO1xuXHRcdGVsc2UgaW5wdXQudmFsdWUgPSBcIlwiO1xuXHR9XG59XG5jb25zdCBjbGVhck5ld0Jvb2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhci1uZXctYm9vay1mb3JtXCIpO1xuY2xlYXJOZXdCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJOZXdCb29rRm9ybSk7XG4vLyBDTE9TRSBCT09LIEZPUk1cbmZ1bmN0aW9uIGNsb3NlTmV3Qm9va0Zvcm0oKSB7XG5cdGFkZEJvb2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5jb25zdCBjbG9zZU5ld0Jvb2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1uZXctYm9vay1mb3JtXCIpO1xuY2xvc2VOZXdCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VOZXdCb29rRm9ybSk7XG5cbi8vQUREIEJPT0sgRlVOQ1RJT05cbmNvbnN0IGJvb2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXRpdGxlLW5ld1wiKTtcbmNvbnN0IGJvb2tBdXRob3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1hdXRob3ItbmV3XCIpO1xuY29uc3QgYm9va0lTQk5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1pc2JuLW5ld1wiKTtcbmNvbnN0IGJvb2tQYWdlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXBhZ2VzLW5ld1wiKTtcbmNvbnN0IGJvb2tFZGl0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItZWRpdGlvbi1uZXdcIik7XG5jb25zdCBib29rRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXB1Ymxpc2hpbmdfZGF0ZS1uZXdcIik7XG5jb25zdCBib29rUmVhZFN0YXR1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXJlYWRfc3RhdHVzLW5ld1wiKTtcblxuYXN5bmMgZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSgpIHtcblx0Y29uc3QgbmV3Qm9vayA9IG5ldyBCb29rKHtcblx0XHR0aXRsZTogYm9va1RpdGxlSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGF1dGhvcjogYm9va0F1dGhvcklucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRpc2JuOiBib29rSVNCTklucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRwYWdlczogYm9va1BhZ2VzSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGVkaXRpb246IGJvb2tFZGl0aW9uSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdHB1Ymxpc2hfZGF0ZTogYm9va0RhdGVJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0aXNfcmVhZDogYm9va1JlYWRTdGF0dXNJbnB1dC52YWx1ZS50cmltKCksXG5cdH0pO1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Jvb2tzXCIsIHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0Jvb2spLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG5cdGlmIChyZXNwb25zZS5vaykge1xuXHRcdGFkZEJvb2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cdFx0cmVuZGVyQm9va3MoKTtcblx0fSBlbHNlIHtcblx0XHRhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgbmV3IGJvb2suXCIpO1xuXHR9XG59XG5cbi8vIC8vIE5FVyBCT09LIEZPUk1cbi8vIGNvbnN0IG5ld0Jvb2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctYm9vay1mb3JtXCIpO1xuLy8gbmV3Qm9va0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRCb29rVG9MaWJyYXJ5KTtcbmNvbnN0IGFkZEJvb2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9va1wiKTtcbmFkZEJvb2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRCb29rVG9MaWJyYXJ5KTtcbiIsIi8vQk9PSyBDT05TVFJVQ1RPUlxuZXhwb3J0IGNvbnN0IEJvb2sgPSBmdW5jdGlvbiAoe1xuXHR0aXRsZSxcblx0YXV0aG9yLFxuXHRpc2JuLFxuXHRwYWdlcyxcblx0ZWRpdGlvbixcblx0cHVibGlzaF9kYXRlLFxuXHRpc19yZWFkLFxufSkge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGF1dGhvcixcblx0XHRpc2JuLFxuXHRcdHBhZ2VzLFxuXHRcdGVkaXRpb24sXG5cdFx0cHVibGlzaF9kYXRlLFxuXHRcdGlzX3JlYWQsXG5cdFx0Ly8gaW5zZXJ0aW9uX2RhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcblx0fTtcbn07XG5cbi8vIENMQVNTIFZFUlNJT04gLy9cbi8vIGNsYXNzIEJvb2sge1xuLy8gXHRjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCBwYWdlcywgbGFuZ3VhZ2UsIHB1Ymxpc2hEYXRlLCByZWFkU3RhdHVzKSB7XG4vLyBcdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuLy8gXHRcdHRoaXMucGFnZXMgPSBwYWdlcztcbi8vIFx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4vLyBcdFx0dGhpcy5wdWJsaXNoRGF0ZSA9IHB1Ymxpc2hEYXRlO1xuLy8gXHRcdHRoaXMucmVhZFN0YXR1cyA9IHJlYWRTdGF0dXM7XG4vLyBcdFx0dGhpcy5pbnNlcnRpb25fZGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbi8vIFx0fVxuLy8gfVxuIiwiaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuL2Jvb2tDbGFzc1wiXG5cbi8vIGNvbnN0IHJlbmRlckVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJvb2stZm9ybS1vcGVuXCIpO1xuLy8gcmVuZGVyRWRpdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHQvLyBTSE9XIEVESVQgRk9STVxuLy8gXHRkb2N1bWVudFxuLy8gXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfYm9va19zZWN0aW9uXCIpXG4vLyBcdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xuXG4vLyBcdGxldCBib29rQ2FyZENoaWxkcmVuID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzKTtcblxuLy8gXHRsZXQgZXhpc3RpbmdCb29rSW5mbyA9IHtcbi8vIFx0XHR0aXRsZTogYm9va0NhcmRDaGlsZHJlblsyXS52YWx1ZSxcbi8vIFx0XHRhdXRob3I6IGJvb2tDYXJkQ2hpbGRyZW5bM10udmFsdWUsXG4vLyBcdFx0aXNibjogYm9va0NhcmRDaGlsZHJlbls0XS52YWx1ZSxcbi8vIFx0XHRwYWdlczogYm9va0NhcmRDaGlsZHJlbls1XS52YWx1ZSxcbi8vIFx0XHRlZGl0aW9uOiBib29rQ2FyZENoaWxkcmVuWzZdLnZhbHVlLFxuLy8gXHRcdHB1Ymxpc2hfZGF0ZTogYm9va0NhcmRDaGlsZHJlbls3XS52YWx1ZSxcbi8vIFx0XHRpc19yZWFkOiBib29rQ2FyZENoaWxkcmVuWzldLmZpcnN0Q2hpbGQuY2hlY2tlZCxcbi8vIFx0fTtcblxuLy8gXHQvLyBQT1BVTEFURSBJTlBVVFMgV0lUSCBERUZBVUxUIENPTlRFTlRcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXRpdGxlLWVkaXRcIikudGV4dENvbnRlbnQgPSBleGlzdGluZ0Jvb2tJbmZvLnRpdGxlO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItYXV0aG9yLWVkaXRcIikudGV4dENvbnRlbnQgPVxuLy8gXHRcdGV4aXN0aW5nQm9va0luZm8uYXV0aG9yO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItaXNibi1lZGl0XCIpLnRleHRDb250ZW50ID0gZXhpc3RpbmdCb29rSW5mby5pc2JuO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcGFnZXMtZWRpdFwiKS50ZXh0Q29udGVudCA9IGV4aXN0aW5nQm9va0luZm8ucGFnZXM7XG4vLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1lZGl0aW9uLWVkaXRcIikudGV4dENvbnRlbnQgPVxuLy8gXHRcdGV4aXN0aW5nQm9va0luZm8uZWRpdGlvbjtcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXB1Ymxpc2hpbmdfZGF0ZS1lZGl0XCIpLnRleHRDb250ZW50ID1cbi8vIFx0XHRleGlzdGluZ0Jvb2tJbmZvLnB1Ymxpc2hfZGF0ZTtcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLXJlYWRfc3RhdHVzLWVkaXRcIikudGV4dENvbnRlbnQgPVxuLy8gXHRcdGV4aXN0aW5nQm9va0luZm8uaXNfcmVhZDtcbi8vIH0pO1xuXG4vLyBDTEVBUiBFRElUIEJPT0sgRk9STVxuZnVuY3Rpb24gY2xlYXJFZGl0Qm9va0Zvcm0oKSB7XG5cdGNvbnN0IGJvb2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvb2stZm9ybS1jb250cm9sXCIpO1xuXHRmb3IgKGNvbnN0IGlucHV0IG9mIGJvb2tJbnB1dHMpIHtcblx0XHRpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKVxuXHRcdFx0aW5wdXQub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gMDtcblx0XHRlbHNlIGlucHV0LnZhbHVlID0gXCJcIjtcblx0fVxufVxuY29uc3QgY2xlYXJFZGl0Qm9va0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLWVkaXQtYm9vay1mb3JtXCIpO1xuY2xlYXJFZGl0Qm9va0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRWRpdEJvb2tGb3JtKTtcbi8vIENMT1NFIEVESVQgQk9PSyBGT1JNXG5cbmZ1bmN0aW9uIGNsb3NlRWRpdEJvb2tGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfYm9va19zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5jb25zdCBjbG9zZUVkaXRCb29rRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtZWRpdC1ib29rLWZvcm1cIik7XG5jbG9zZUVkaXRCb29rRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VFZGl0Qm9va0Zvcm0pO1xuXG4vLyBFRElUIEJPT0sgRlVOQ1RJT05cbmNvbnN0IGJvb2tUaXRsZUVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi10aXRsZS1lZGl0XCIpO1xuY29uc3QgYm9va0F1dGhvckVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1hdXRob3ItZWRpdFwiKTtcbmNvbnN0IGJvb2tJU0JORWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWlzYm4tZWRpdFwiKTtcbmNvbnN0IGJvb2tQYWdlc0VkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wYWdlcy1lZGl0XCIpO1xuY29uc3QgYm9va0VkaXRpb25FZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItZWRpdGlvbi1lZGl0XCIpO1xuY29uc3QgYm9va0RhdGVFZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcHVibGlzaGluZ19kYXRlLWVkaXRcIik7XG5jb25zdCBib29rUmVhZFN0YXR1c0VkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1yZWFkX3N0YXR1cy1lZGl0XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBlZGl0Qm9va0xpYnJhcnkoKSB7XG5cdGNvbnN0IG5ld0Jvb2tVcGRhdGUgPSBuZXcgQm9vayh7XG5cdFx0dGl0bGU6IGJvb2tUaXRsZUVkaXRJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0YXV0aG9yOiBib29rQXV0aG9yRWRpdElucHV0LnZhbHVlLnRyaW0oKSxcblx0XHRpc2JuOiBib29rSVNCTkVkaXRJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0cGFnZXM6IGJvb2tQYWdlc0VkaXRJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0ZWRpdGlvbjogYm9va0VkaXRpb25FZGl0SW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdHB1Ymxpc2hfZGF0ZTogYm9va0RhdGVFZGl0SW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdGlzX3JlYWQ6IGJvb2tSZWFkU3RhdHVzRWRpdElucHV0LnZhbHVlLFxuXHR9KTtcblxuXHRjb25zdCBib29rSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtYm9vay1pZFwiKS5kYXRhc2V0LmJvb2tJZDtcblx0Y29uc3QgZmV0Y2hVUkxFZGl0ID0gYC9hcGkvYm9va3MvJHtib29rSUR9YDtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTEVkaXQsIHtcblx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9va1VwZGF0ZSksXG5cdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHR9KTtcblx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfYm9va19zZWN0aW9uXCIpXG5cdFx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblx0XHRyZW5kZXJCb29rcygpO1xuXHR9IGVsc2Uge1xuXHRcdGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBuZXcgYm9vay5cIik7XG5cdH1cbn1cblxuY29uc3QgZWRpdEJvb2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJvb2tcIik7XG5lZGl0Qm9va0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRCb29rTGlicmFyeSk7XG4iLCJpbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJDbGFzc1wiXG5cbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lLWVkaXRcIik7XG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbC1lZGl0XCIpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmQtZWRpdFwiKTtcblxuY29uc3QgZWRpdFVzZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0X3VzZXJfc2VjdGlvblwiKTtcbmxldCBleGlzdGluZ1VzZXJEYXRhR2xvYmFsO1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyRWRpdFVzZXJGb3JtKCkge1xuXHRjb25zdCByZXNwb25zZVVzZXJEYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL3VzZXIvSURcIik7XG5cdGNvbnN0IHJlc3BvbnNlVXNlciA9IGF3YWl0IHJlc3BvbnNlVXNlckRhdGEuanNvbigpO1xuXG5cdGxldCBleGlzdGluZ1VzZXJEYXRhID0ge1xuXHRcdGVtYWlsOiByZXNwb25zZVVzZXIuZW1haWwsXG5cdFx0dXNlcm5hbWU6IHJlc3BvbnNlVXNlci51c2VybmFtZSxcblx0fTtcblxuXHR1c2VybmFtZUlucHV0LnZhbHVlID0gZXhpc3RpbmdVc2VyRGF0YS51c2VybmFtZTtcblx0ZW1haWxJbnB1dC52YWx1ZSA9IGV4aXN0aW5nVXNlckRhdGEuZW1haWw7XG5cblx0ZXhpc3RpbmdVc2VyRGF0YUdsb2JhbCA9IGV4aXN0aW5nVXNlckRhdGE7XG5cblx0ZWRpdFVzZXJTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2s7XCIpO1xufVxuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHRpbmdzXCIpO1xuc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckVkaXRVc2VyRm9ybSk7XG5cbi8vIENMRUFSIEVESVQgVVNFUiBGT1JNXG5mdW5jdGlvbiBjbGVhckVkaXRVc2VyRm9ybSgpIHtcblx0Y29uc3QgdXNlcklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXNlci1mb3JtLWNvbnRyb2xcIik7XG5cdGZvciAoY29uc3QgaW5wdXQgb2YgdXNlcklucHV0cykge1xuXHRcdGlucHV0LnZhbHVlID0gXCJcIjtcblx0fVxufVxuY29uc3QgY2xlYXJFZGl0VXNlckZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLWVkaXQtdXNlci1mb3JtXCIpO1xuY2xlYXJFZGl0VXNlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRWRpdFVzZXJGb3JtKTtcblxuLy8gQ0xPU0UgRURJVCBCT09LIEZPUk1cbmZ1bmN0aW9uIGNsb3NlRWRpdFVzZXJGb3JtKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfdXNlcl9zZWN0aW9uXCIpXG5cdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG59XG5jb25zdCBjbG9zZUVkaXRVc2VyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtZWRpdC11c2VyLWZvcm1cIik7XG5jbG9zZUVkaXRVc2VyRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VFZGl0VXNlckZvcm0pO1xuXG4vLyBFRElUIFVTRVIgRlVOQ1RJT05cbmFzeW5jIGZ1bmN0aW9uIGVkaXRVc2VyKCkge1xuXHRjb25zdCBleGlzdGluZ0Vyck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpc3RpbmctZXJyLW1zZ1wiKTtcblx0ZXhpc3RpbmdFcnJNc2cuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cblx0Y29uc3QgbmV3VXNlclVwZGF0ZSA9IG5ldyBVc2VyKHtcblx0XHR1c2VybmFtZTogdXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0ZW1haWw6IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpLFxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZElucHV0LnZhbHVlLFxuXHR9KTtcblxuXHQvLyBpZiAoZXhpc3RpbmdVc2VyRGF0YUdsb2JhbC5lbWFpbCA9PT0gbmV3VXNlclVwZGF0ZS5lbWFpbClcblx0Ly8gXHRkZWxldGUgbmV3VXNlclVwZGF0ZS5lbWFpbDtcblx0Ly8gaWYgKGV4aXN0aW5nVXNlckRhdGFHbG9iYWwudXNlcm5hbWUgPT09IG5ld1VzZXJVcGRhdGUudXNlcm5hbWUpXG5cdC8vIFx0ZGVsZXRlIG5ld1VzZXJVcGRhdGUudXNlcm5hbWU7XG5cdGlmIChuZXdVc2VyVXBkYXRlLnBhc3N3b3JkLnRyaW0oKSA9PT0gXCJcIikgZGVsZXRlIG5ld1VzZXJVcGRhdGUucGFzc3dvcmQ7XG5cdGVsc2UgaWYgKG5ld1VzZXJVcGRhdGUucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuXHRcdGV4aXN0aW5nRXJyTXNnLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRleGlzdGluZ0Vyck1zZy50ZXh0Q29udGVudCA9IFwiTmV3IHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCI7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZXhpc3RpbmdVc2VyRGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9leGlzdGluZ1wiLCB7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyVXBkYXRlKSxcblx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdH0pO1xuXHRjb25zdCBleGlzdGluZ1VzZXJSZXNwb25zZSA9IGF3YWl0IGV4aXN0aW5nVXNlckRhdGEuanNvbigpO1xuXG5cdGlmIChcblx0XHRleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ0VtYWlsICYmXG5cdFx0ZXhpc3RpbmdVc2VyUmVzcG9uc2UuZXhpc3RpbmdVc2VybmFtZVxuXHQpIHtcblx0XHRleGlzdGluZ0Vyck1zZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdFx0ZXhpc3RpbmdFcnJNc2cudGV4dENvbnRlbnQgPSBcIlVzZXJuYW1lIGFuZCBlbWFpbCBhcmUgYm90aCBhbHJlYWR5IHRha2VuXCI7XG5cdH0gZWxzZSBpZiAoXG5cdFx0ZXhpc3RpbmdVc2VyUmVzcG9uc2UuZXhpc3RpbmdFbWFpbCAmJlxuXHRcdCFleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ1VzZXJuYW1lXG5cdCkge1xuXHRcdGV4aXN0aW5nRXJyTXNnLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRleGlzdGluZ0Vyck1zZy50ZXh0Q29udGVudCA9IFwiRW1haWwgaXMgYWxyZWFkeSB0YWtlblwiO1xuXHR9IGVsc2UgaWYgKFxuXHRcdCFleGlzdGluZ1VzZXJSZXNwb25zZS5leGlzdGluZ0VtYWlsICYmXG5cdFx0ZXhpc3RpbmdVc2VyUmVzcG9uc2UuZXhpc3RpbmdVc2VybmFtZVxuXHQpIHtcblx0XHRleGlzdGluZ0Vyck1zZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdFx0ZXhpc3RpbmdFcnJNc2cudGV4dENvbnRlbnQgPSBcIlVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW5cIjtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlVXNlckRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvdXNlci9JRFwiKTtcblx0Y29uc3QgcmVzcG9uc2VVc2VyID0gYXdhaXQgcmVzcG9uc2VVc2VyRGF0YS5qc29uKCk7XG5cblx0bGV0IHVzZXJJZCA9IHtcblx0XHRpZDogcmVzcG9uc2VVc2VyLmlkLFxuXHR9O1xuXG5cdGNvbnN0IGZldGNoVVJMRWRpdCA9IGAvYXBpL3VzZXJzLyR7dXNlcklkLmlkfWA7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hVUkxFZGl0LCB7XG5cdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXJVcGRhdGUpLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG5cdGlmIChyZXNwb25zZS5vaykge1xuXHRcdGRvY3VtZW50XG5cdFx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0X3VzZXJfc2VjdGlvblwiKVxuXHRcdFx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cdFx0cmVuZGVyQm9va3MoKTtcblx0fSBlbHNlIHtcblx0XHRhbGVydChcIkZhaWxlZCB0byB1cGRhdGUgdXNlci5cIik7XG5cdH1cbn1cblxuY29uc3QgZWRpdFVzZXJGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXVzZXJcIik7XG5lZGl0VXNlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRVc2VyKTtcbiIsImV4cG9ydCBjb25zdCBmZXRjaEJvb2tJbmZvID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG5cdGNvbnN0IGxpYlVybEFQSSA9IFwiaHR0cDovL29wZW5saWJyYXJ5Lm9yZy9zZWFyY2guanNvbj9xPVwiO1xuXHRjb25zdCBjbGVhblF1ZXJ5U3RyID0gcXVlcnkuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpO1xuXHRjb25zdCBsaWJBUElRdWVyeVN0ciA9IGxpYlVybEFQSSArIGNsZWFuUXVlcnlTdHI7XG5cblx0Y29uc3QgcmVzcG9uc2VMaWJyYXJ5RGF0YSA9IGF3YWl0IGZldGNoKGxpYkFQSVF1ZXJ5U3RyKTtcblx0Y29uc3QgcmVzcG9uc2VMaWJyYXJ5ID0gYXdhaXQgcmVzcG9uc2VMaWJyYXJ5RGF0YS5qc29uKCk7XG5cblx0Y29uc29sZS5sb2cocmVzcG9uc2VMaWJyYXJ5KTtcblx0cmV0dXJuIHJlc3BvbnNlTGlicmFyeTtcbn07XG5cbmZldGNoQm9va0luZm8oXCJsb3JkIG9mIHRoZSByaW5nc1wiKTtcbiIsIi8vaGFtYnVyZ2VyIG1vYmlsZSBtZW51XG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tZW51XCIpO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn0pO1xuIiwiLy8gUFJPR1JFU1MgQkFSXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvZ3Jlc3NCYXIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRCb29rc0RhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvYm9va3NcIik7XG5cdGxldCBjdXJyZW50Qm9va3MgPSBhd2FpdCBjdXJyZW50Qm9va3NEYXRhLmpzb24oKTtcblxuXHRjb25zdCBjdXJyZW50Qm9va3NSZWFkQ291bnQgPSBjdXJyZW50Qm9va3MuZmlsdGVyKFxuXHRcdChib29rKSA9PiBib29rLmlzX3JlYWQgPT09IHRydWVcblx0KS5sZW5ndGg7XG5cdGNvbnN0IGN1cnJlbnRCb29rc1RvdGFsQ291bnQgPSBjdXJyZW50Qm9va3MubGVuZ3RoO1xuXHQvLyBCT09LIFRPVEFMUyBESVNQTEFZXG5cdGNvbnN0IGJvb2tSZWFkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9va3MtcmVhZC1kaXNwbGF5XCIpO1xuXHRib29rUmVhZERpc3BsYXkudGV4dENvbnRlbnQgPSBgQm9va3MgcmVhZDogJHtjdXJyZW50Qm9va3NSZWFkQ291bnR9YDtcblxuXHRjb25zdCBib29rVG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rcy10b3RhbC1kaXNwbGF5XCIpO1xuXHRib29rVG90YWxEaXNwbGF5LnRleHRDb250ZW50ID0gYEJvb2tzIHRvdGFsOiAke2N1cnJlbnRCb29rc1RvdGFsQ291bnR9YDtcblxuXHRjb25zdCBib29rUmVhZERpc3BsYXlIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5ib29rcy1yZWFkLWRpc3BsYXktaGVyb1wiXG5cdCk7XG5cdGJvb2tSZWFkRGlzcGxheUhlcm8udGV4dENvbnRlbnQgPSBgQm9va3MgcmVhZDogJHtjdXJyZW50Qm9va3NSZWFkQ291bnR9YDtcblxuXHRjb25zdCBib29rVG90YWxEaXNwbGF5SGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIuYm9va3MtdG90YWwtZGlzcGxheS1oZXJvXCJcblx0KTtcblx0Ym9va1RvdGFsRGlzcGxheUhlcm8udGV4dENvbnRlbnQgPSBgQm9va3MgdG90YWw6ICR7Y3VycmVudEJvb2tzVG90YWxDb3VudH1gO1xuXG5cdC8vIFBST0dSRVNTIEJBUiBESVNQTEFZXG5cdGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy1iYXJcIik7XG5cdGNvbnN0IHByb2dyZXNzQmFySGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtYmFyLWhlcm9cIik7XG5cblx0bGV0IHByb2dyZXNzV2lkdGg7XG5cdGlmIChjdXJyZW50Qm9va3NSZWFkQ291bnQgPT09IDAgJiYgY3VycmVudEJvb2tzVG90YWxDb3VudCA9PT0gMCkge1xuXHRcdHByb2dyZXNzV2lkdGggPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHByb2dyZXNzV2lkdGggPSBNYXRoLmZsb29yKFxuXHRcdFx0KGN1cnJlbnRCb29rc1JlYWRDb3VudCAvIGN1cnJlbnRCb29rc1RvdGFsQ291bnQpICogMTAwXG5cdFx0KTtcblx0fVxuXG5cdHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NXaWR0aH0lYDtcblx0cHJvZ3Jlc3NCYXJIZXJvLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NXaWR0aH0lYDtcbn07XG4iLCIvLyBTVFlMRVNcbmltcG9ydCBcIi4uLy4uL2Nzcy9saWJyYXJ5U3R5bGUuY3NzXCI7XG5cbi8vIEpBVkFTQ1JJUFRcbmltcG9ydCBcIi4vaGFtYnVyZ2VyTWVudVwiO1xuaW1wb3J0IFwiLi9sb2dvdXRcIjtcbmltcG9ydCBcIi4vYWRkQm9va0Zvcm1cIjtcbmltcG9ydCBcIi4vZWRpdEJvb2tGb3JtXCI7XG5pbXBvcnQgXCIuL2VkaXRVc2VyRm9ybVwiO1xuaW1wb3J0IFwiLi4vdGhlbWVUb2dnbGVcIjtcblxuLy9pbWFnZXNcbmltcG9ydCBtYWduaWZ5QmxhY2tJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvbWFnbmlmeS5zdmdcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWljb25cIikuc3JjID0gbWFnbmlmeUJsYWNrSWNvbjtcbmltcG9ydCBtYWduaWZ5V2hpdGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvbWFnbmlmeS13aGl0ZS5wbmdcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWljb24taGVyb1wiKS5zcmMgPSBtYWduaWZ5V2hpdGVJY29uO1xuaW1wb3J0IG9wZW5Cb29rSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2Jvb2stb3Blbi1wYWdlLXZhcmlhbnQtb3V0bGluZS5zdmdcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvXCIpLnNyYyA9IG9wZW5Cb29rSWNvbjtcbmltcG9ydCBwbHVzV2hpdGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvcGx1cy13aGl0ZS5wbmdcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJvb2stcGx1c1wiKS5zcmMgPSBwbHVzV2hpdGVJY29uO1xuXG4vLyBwYWdlbG9hZCByZW5kZXJpbmdcbmltcG9ydCB7IHJlbmRlckJvb2tzIH0gZnJvbSBcIi4vcmVuZGVyQm9va3MuanNcIlxuaW1wb3J0IHsgcmVuZGVyUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9oZXJvRGlzcGxheS5qc1wiXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHQvLyBzZXRDdXJyZW50VGhlbWUoREVGQVVMVF9USEVNRSk7XG5cdC8vIHNldEN1cnJlbnRCb29rcyhjdXJyZW50Qm9va3MpO1xuXHRyZW5kZXJQcm9ncmVzc0JhcigpO1xuXHRyZW5kZXJCb29rcygpO1xufTtcbiIsImNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvbG9nb3V0XCIsIHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG5cblx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG5cdH0gZWxzZSB7XG5cdFx0YWxlcnQoXCJGYWlsZWQgdG8gbG9nIG91dC5cIik7XG5cdH1cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2dvdXQpO1xuIiwiaW1wb3J0IHsgZmV0Y2hCb29rSW5mbyB9IGZyb20gXCIuL2ZldGNoQm9va0luZm8uanNcIjtcbmltcG9ydCBib29rQ292ZXJQbGFjZWhvbGRlckltZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9ib29rLWNvdmVyLXBsYWNlaG9sZGVyLmpwZWdcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckJvb2tzID0gYXN5bmMgZnVuY3Rpb24gKHNlYXJjaFRlcm0gPSBcIlwiKSB7XG5cdGNvbnN0IGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stY2FyZC1jb250YWluZXJcIik7XG5cdGJvb2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRjb25zdCBjdXJyZW50Qm9va3NEYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Jvb2tzXCIpO1xuXHRsZXQgY3VycmVudEJvb2tzID0gYXdhaXQgY3VycmVudEJvb2tzRGF0YS5qc29uKCk7XG5cblx0Y29uc3QgbG93ZXJTZWFyY2hUZXJtID0gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAobG93ZXJTZWFyY2hUZXJtICE9PSBcIlwiICYmIHR5cGVvZiBsb3dlclNlYXJjaFRlcm0gPT09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBmaWx0ZXJlZEN1cnJlbnRCb29rcyA9IGN1cnJlbnRCb29rcy5maWx0ZXIoKGJvb2spID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaFRlcm0pIHx8XG5cdFx0XHRcdGJvb2suYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJTZWFyY2hUZXJtKVxuXHRcdFx0KTtcblx0XHR9KTtcblx0XHRjdXJyZW50Qm9va3MgPSBmaWx0ZXJlZEN1cnJlbnRCb29rcztcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEJvb2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYm9vayA9IGN1cnJlbnRCb29rc1tpXTtcblx0XHRjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRpZiAoYm9vay5pc19yZWFkID09PSB0cnVlIHx8IGJvb2suaXNfcmVhZCA9PT0gXCJ0cnVlXCIpIHtcblx0XHRcdGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xuXHRcdH0gZWxzZSBpZiAoYm9vay5pc19yZWFkID09PSBmYWxzZSkgYm9va0NhcmQuY2xhc3NMaXN0LmFkZChcIm5vdC1yZWFkXCIpO1xuXG5cdFx0Ym9va0NhcmQuY2xhc3NMaXN0LmFkZChcInNpbmdsZS1ib29rXCIsIFwic2NhbGUtaW4tY2VudGVyXCIpO1xuXHRcdGJvb2tDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1cIiArIGkpO1xuXHRcdGJvb2tDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG5cblx0XHQvLyBDTE9TRSBBTkQgREVMRVRFXG5cdFx0Y29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIiwgXCJyZW1vdmUtYm9va1wiKTtcblx0XHRjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiIGNsb3NlIFwiO1xuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBmZXRjaFVSTCA9IGAvYXBpL2Jvb2tzLyR7Ym9vay5pZH1gO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwge1xuXHRcdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHR9KTtcblx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRyZW5kZXJQcm9ncmVzc0JhcigpO1xuXHRcdFx0XHRyZW5kZXJCb29rcygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJGYWlsZWQgdG8gZGVsZXRlIGJvb2suXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIEVESVQgQlVUVE9OXG5cdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIsIFwiZWRpdC1ib29rLWZvcm0tb3BlblwiKTtcblx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gXCIgZWRpdCBcIjtcblx0XHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdC8vIFNIT1cgRURJVCBGT1JNXG5cdFx0XHRkb2N1bWVudFxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0X2Jvb2tfc2VjdGlvblwiKVxuXHRcdFx0XHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG5cblx0XHRcdGxldCBib29rQ2FyZENoaWxkcmVuID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzKTtcblxuXHRcdFx0bGV0IGV4aXN0aW5nQm9va0luZm8gPSB7XG5cdFx0XHRcdHRpdGxlOiBib29rQ2FyZENoaWxkcmVuWzJdLnRleHRDb250ZW50LFxuXHRcdFx0XHRhdXRob3I6IGJvb2tDYXJkQ2hpbGRyZW5bM10udGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpLnNsaWNlKDEpLmpvaW4oXCIgXCIpLFxuXHRcdFx0XHRpc2JuOiBib29rQ2FyZENoaWxkcmVuWzRdLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXSxcblx0XHRcdFx0cGFnZXM6IGJvb2tDYXJkQ2hpbGRyZW5bNV0udGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzNdLFxuXHRcdFx0XHRlZGl0aW9uOiBib29rQ2FyZENoaWxkcmVuWzZdLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXSxcblx0XHRcdFx0cHVibGlzaF9kYXRlOiBib29rQ2FyZENoaWxkcmVuWzddLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXSxcblx0XHRcdFx0aXNfcmVhZDogYm9va0NhcmRDaGlsZHJlbls5XS5maXJzdENoaWxkLmNoZWNrZWQsXG5cdFx0XHRcdGJvb2tfaWQ6IGJvb2suaWQsXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBQT1BVTEFURSBJTlBVVFMgV0lUSCBERUZBVUxUIENPTlRFTlRcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi10aXRsZS1lZGl0XCIpLnZhbHVlID0gZXhpc3RpbmdCb29rSW5mby50aXRsZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1hdXRob3ItZWRpdFwiKS52YWx1ZSA9IGV4aXN0aW5nQm9va0luZm8uYXV0aG9yO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiLWlzYm4tZWRpdFwiKS52YWx1ZSA9IGV4aXN0aW5nQm9va0luZm8uaXNibjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1wYWdlcy1lZGl0XCIpLnZhbHVlID0gZXhpc3RpbmdCb29rSW5mby5wYWdlcztcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1lZGl0aW9uLWVkaXRcIikudmFsdWUgPVxuXHRcdFx0XHRleGlzdGluZ0Jvb2tJbmZvLmVkaXRpb247XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ItcHVibGlzaGluZ19kYXRlLWVkaXRcIikudmFsdWUgPVxuXHRcdFx0XHRleGlzdGluZ0Jvb2tJbmZvLnB1Ymxpc2hfZGF0ZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYi1yZWFkX3N0YXR1cy1lZGl0XCIpLnZhbHVlID1cblx0XHRcdFx0ZXhpc3RpbmdCb29rSW5mby5pc19yZWFkO1xuXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtYm9vay1pZFwiKS5kYXRhc2V0LmJvb2tJZCA9XG5cdFx0XHRcdGV4aXN0aW5nQm9va0luZm8uYm9va19pZDtcblx0XHR9KTtcblx0XHQvLyBCT09LIENPVkVSIElNR1xuXHRcdGNvbnN0IGJvb2tDb3ZlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0Ym9va0NvdmVySW1nLmNsYXNzTGlzdC5hZGQoXCJib29rLWNvdmVyLWltZ1wiKTtcblx0XHRib29rQ292ZXJJbWcuc2V0QXR0cmlidXRlKFxuXHRcdFx0XCJzcmNcIixcblx0XHRcdGJvb2tDb3ZlclBsYWNlaG9sZGVySW1nXG5cdFx0KTtcblx0XHRib29rQ292ZXJJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYm9vayBjb3ZlciBpbWFnZVwiKTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRib29rVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvb2stdGl0bGVcIik7XG5cdFx0Ym9va1RpdGxlLnRleHRDb250ZW50ID0gYm9vay50aXRsZTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJib29rLWF1dGhvclwiKTtcblx0XHRjb25zdCBsYWJlbEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJiLWxhYmVsXCIpO1xuXHRcdGxhYmVsQXV0aG9yLnRleHRDb250ZW50ID0gXCJCeTogXCI7XG5cdFx0Y29uc3QgYXV0aG9yRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGF1dGhvckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImF1dGhvclwiKTtcblx0XHRhdXRob3JEaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5hdXRob3I7XG5cdFx0Ym9va0F1dGhvci5hcHBlbmQobGFiZWxBdXRob3IsIGF1dGhvckRpc3BsYXkpO1xuXHRcdC8vXG5cdFx0Y29uc3QgYm9va0lzYm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rSXNibi5jbGFzc0xpc3QuYWRkKFwiYm9vay1pc2JuXCIpO1xuXHRcdGNvbnN0IGxhYmVsSXNibiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsSXNibi5jbGFzc0xpc3QuYWRkKFwiYi1sYWJlbFwiKTtcblx0XHRsYWJlbElzYm4udGV4dENvbnRlbnQgPSBcIklTQk46IFwiO1xuXHRcdGNvbnN0IGlzYm5EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0aXNibkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImlzYm5cIik7XG5cdFx0aXNibkRpc3BsYXkudGV4dENvbnRlbnQgPSBib29rLmlzYm47XG5cdFx0Ym9va0lzYm4uYXBwZW5kKGxhYmVsSXNibiwgaXNibkRpc3BsYXkpO1xuXHRcdC8vXG5cdFx0Y29uc3QgcGFnZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHBhZ2VzQ291bnQuY2xhc3NMaXN0LmFkZChcInBhZ2VzLWNvdW50XCIpO1xuXHRcdGNvbnN0IGxhYmVsUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRsYWJlbFBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJiLWxhYmVsXCIpO1xuXHRcdGxhYmVsUGFnZXMudGV4dENvbnRlbnQgPSBcIlBhZ2VzOiBcIjtcblx0XHRjb25zdCBib29rUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRib29rUGFnZXMuY2xhc3NMaXN0LmFkZChcInBhZ2VzXCIpO1xuXHRcdGJvb2tQYWdlcy50ZXh0Q29udGVudCA9IGJvb2sucGFnZXM7XG5cdFx0cGFnZXNDb3VudC5hcHBlbmQobGFiZWxQYWdlcywgYm9va1BhZ2VzKTtcblx0XHQvL1xuXHRcdGNvbnN0IGJvb2tFZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0Ym9va0VkaXRpb24uY2xhc3NMaXN0LmFkZChcImJvb2stZWRpdGlvblwiKTtcblx0XHRjb25zdCBsYWJlbEVkaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRsYWJlbEVkaXRpb24uY2xhc3NMaXN0LmFkZChcImItbGFiZWxcIik7XG5cdFx0bGFiZWxFZGl0aW9uLnRleHRDb250ZW50ID0gXCJFZGl0aW9uOiBcIjtcblx0XHRjb25zdCBlZGl0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGVkaXRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJlZGl0aW9uXCIpO1xuXHRcdGVkaXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5lZGl0aW9uO1xuXHRcdGJvb2tFZGl0aW9uLmFwcGVuZChsYWJlbEVkaXRpb24sIGVkaXRpb25EaXNwbGF5KTtcblx0XHQvL1xuXHRcdGNvbnN0IHB1Ymxpc2hEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0cHVibGlzaERhdGUuY2xhc3NMaXN0LmFkZChcImJvb2stcHVibGlzaGVkXCIpO1xuXHRcdGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGxhYmVsRGF0ZS5jbGFzc0xpc3QuYWRkKFwiYi1sYWJlbFwiKTtcblx0XHRsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIlB1Ymxpc2hlZDogXCI7XG5cdFx0Y29uc3QgZGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRkYXRlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHVibGlzaC1kYXRlXCIpO1xuXHRcdGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gYm9vay5wdWJsaXNoX2RhdGU7XG5cdFx0cHVibGlzaERhdGUuYXBwZW5kKGxhYmVsRGF0ZSwgZGF0ZURpc3BsYXkpO1xuXHRcdC8vIEZFVENIIEJVVFRPTlxuXG5cdFx0Y29uc3QgZmV0Y2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRmZXRjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIiwgXCJmZXRjaC1ib29rLWRhdGEtYnV0dG9uXCIpO1xuXHRcdGZldGNoQnRuLnRleHRDb250ZW50ID0gXCIgZmV0Y2ggaW5mbyBcIjtcblx0XHRmZXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zdCBib29rRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2hCb29rSW5mbyhcblx0XHRcdFx0Ym9vay50aXRsZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGJvb2tEYXRhID0gYm9va0RhdGFSZXNwb25zZS5kb2NzWzBdO1xuXG5cdFx0XHRjb25zdCBmZXRjaGVkQm9va0RhdGEgPSB7XG5cdFx0XHRcdHRpdGxlOiBib29rRGF0YS50aXRsZSxcblx0XHRcdFx0YXV0aG9yOiBib29rRGF0YS5hdXRob3JfbmFtZVswXSxcblx0XHRcdFx0aXNibjogYm9va0RhdGEuaXNiblswXSxcblx0XHRcdFx0cHVibGlzaF9kYXRlOiBib29rRGF0YS5maXJzdF9wdWJsaXNoX3llYXIsXG5cdFx0XHRcdGNvdmVyX2ltZ19zcmM6IGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pc2JuLyR7Ym9va0RhdGEuaXNiblswXX0tTS5qcGdgLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcmVwbGFjZUJvb2tEYXRhID0gKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGF1dGhvcixcblx0XHRcdFx0aXNibixcblx0XHRcdFx0cHVibGlzaF9kYXRlLFxuXHRcdFx0XHRjb3Zlcl9pbWdfc3JjLFxuXHRcdFx0fSkgPT4ge1xuXHRcdFx0XHRib29rVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblx0XHRcdFx0Ym9va0F1dGhvci50ZXh0Q29udGVudCA9IGF1dGhvcjtcblx0XHRcdFx0Ym9va0lzYm4udGV4dENvbnRlbnQgPSBpc2JuO1xuXHRcdFx0XHRwdWJsaXNoRGF0ZS50ZXh0Q29udGVudCA9IHB1Ymxpc2hfZGF0ZTtcblx0XHRcdFx0Ym9va0NvdmVySW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb3Zlcl9pbWdfc3JjKTtcblx0XHRcdH07XG5cblx0XHRcdHJlcGxhY2VCb29rRGF0YShmZXRjaGVkQm9va0RhdGEpO1xuXHRcdH0pO1xuXHRcdC8vIFJFQUQgVE9HR0xFXG5cdFx0Y29uc3QgcmVhZFRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0cmVhZFRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyZWFkX3RvZ2dsZV9sYWJlbFwiKTtcblx0XHRyZWFkVG9nZ2xlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgYXMgcmVhZDogXCI7XG5cdFx0Ly9cblx0XHRjb25zdCB0b2dnbGVDb250cm9sTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdFx0dG9nZ2xlQ29udHJvbExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XG5cdFx0Y29uc3QgdG9nZ2xlQ29udHJvbENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHRvZ2dsZUNvbnRyb2xDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdFx0dG9nZ2xlQ29udHJvbENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJyZWFkX3RvZ2dsZVwiKTtcblx0XHQvLyBpZiAoYm9vay5pc19yZWFkPT09dHJ1ZSkgdG9nZ2xlQ29udHJvbENoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cdFx0aWYgKGJvb2suaXNfcmVhZCA9PT0gdHJ1ZSB8fCBib29rLmlzX3JlYWQgPT09IFwidHJ1ZVwiKVxuXHRcdFx0dG9nZ2xlQ29udHJvbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdC8vIGlmIChib29rUmVhZFN0YXR1c0Zvcm0udmFsdWUgPT09IHRydWUpIHRvZ2dsZUNvbnRyb2xDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRjb25zdCB0b2dnbGVDb250cm9sU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHRvZ2dsZUNvbnRyb2xTcGFuLmNsYXNzTGlzdC5hZGQoXCJyZWFkLXRvZ2dsZS1zbGlkZXJcIiwgXCJyb3VuZFwiKTtcblx0XHR0b2dnbGVDb250cm9sTGFiZWwuYXBwZW5kKHRvZ2dsZUNvbnRyb2xDaGVja2JveCwgdG9nZ2xlQ29udHJvbFNwYW4pO1xuXHRcdC8vXG5cblx0XHR0b2dnbGVDb250cm9sQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdGxldCBib29rQ29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRcdGlmIChib29rQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1yZWFkXCIpKSB7XG5cdFx0XHRcdGJvb2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1yZWFkXCIpO1xuXHRcdFx0XHRib29rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xuXHRcdFx0fSBlbHNlIGlmIChib29rQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInJlYWRcIikpIHtcblx0XHRcdFx0Ym9va0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZFwiKTtcblx0XHRcdFx0Ym9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW5kZXggPSBib29rQ29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRjdXJyZW50Qm9va3NbaW5kZXhdLmlzX3JlYWQgPSBlbGVtZW50LmNoZWNrZWQ7XG5cblx0XHRcdGNvbnN0IG5ld1JlYWRTdGF0dXNEYXRhID0ge1xuXHRcdFx0XHRpc19yZWFkOiBjdXJyZW50Qm9va3NbaW5kZXhdLmlzX3JlYWQsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBmZXRjaFVSTCA9IGAvYXBpL2Jvb2tzLyR7Ym9vay5pZH1gO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwge1xuXHRcdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1JlYWRTdGF0dXNEYXRhKSxcblx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0cmVuZGVyUHJvZ3Jlc3NCYXIoKTtcblx0XHRcdFx0cmVuZGVyQm9va3MoKTtcblx0XHRcdFx0Ly8gLy8gZGlyZWN0IGxvZ2dlZC1pbiB1c2VyIHRvIGhvbWUgcGFnZVxuXHRcdFx0XHQvLyBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KFwiRmFpbGVkIHRvIHVwZGF0ZSBib29rIHJlYWQgc3RhdHVzLlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVuZGVyQm9va3MoKTtcblx0XHR9KTtcblxuXHRcdGJvb2tDYXJkLmFwcGVuZChcblx0XHRcdGNsb3NlQnRuLFxuXHRcdFx0ZWRpdEJ0bixcblx0XHRcdGJvb2tDb3ZlckltZyxcblx0XHRcdGJvb2tUaXRsZSxcblx0XHRcdGJvb2tBdXRob3IsXG5cdFx0XHRib29rSXNibixcblx0XHRcdHBhZ2VzQ291bnQsXG5cdFx0XHRib29rRWRpdGlvbixcblx0XHRcdHB1Ymxpc2hEYXRlLFxuXHRcdFx0ZmV0Y2hCdG4sXG5cdFx0XHRyZWFkVG9nZ2xlTGFiZWwsXG5cdFx0XHR0b2dnbGVDb250cm9sTGFiZWxcblx0XHQpO1xuXHRcdGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xuXHR9XG59O1xuIiwiLy9VU0VSIENPTlNUUlVDVE9SXG5leHBvcnQgY29uc3QgVXNlciA9IGZ1bmN0aW9uICh7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkge1xuXHRyZXR1cm4ge1xuXHRcdHVzZXJuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdHBhc3N3b3JkLFxuXHR9O1xufTtcblxuLy8gQ0xBU1MgVkVSU0lPTiAvL1xuLy8gY2xhc3MgVXNlciB7XG4vLyBcdGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbi8vIFx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4vLyBcdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuLy8gXHRcdHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbi8vIFx0fVxuLy8gfVxuIiwiaW1wb3J0IG9wZW5Cb29rTGlnaHRJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvYm9vay1vcGVuLXBhZ2UtdmFyaWFudC1vdXRsaW5lX2xpZ2h0LnN2Z1wiXG5pbXBvcnQgb3BlbkJvb2tEYXJrSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2Jvb2stb3Blbi1wYWdlLXZhcmlhbnQtb3V0bGluZS5zdmdcIlxuaW1wb3J0IGZhdmljb25MaWdodEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9mYXZpY29uX2xpZ2h0Lmljb1wiXG5pbXBvcnQgZmF2aWNvbkRhcmtJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmF2aWNvbi5pY29cIlxuXG5jb25zdCBERUZBVUxUX1RIRU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG5sZXQgY3VycmVudFRoZW1lID0gREVGQVVMVF9USEVNRTtcblxuY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci1jb250YWluZXJcIik7XG5jb25zdCBoZXJvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm8tY29udGFpbmVyXCIpO1xuY29uc3QgYm9va1NlY3Rpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1jb250YWluZXJcIik7XG5jb25zdCBhZGRCb29rRm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfYm9va19zZWN0aW9uXCIpO1xuY29uc3QgZmF2aWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZpY29uXCIpO1xuY29uc3Qgc2l0ZUxvZ29FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvXCIpO1xuY29uc3QgdGhlbWVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lLXRvZ2dsZVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRUaGVtZShuZXdUaGVtZSkge1xuXHRjdXJyZW50VGhlbWUgPSBuZXdUaGVtZTtcblx0aWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcblx0XHRoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcblx0XHRoZXJvRWwuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG5cdFx0Ym9va1NlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcblx0XHRhZGRCb29rRm9ybUVsLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuXHRcdGZhdmljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdmljb25MaWdodEljb24pO1xuXHRcdHNpdGVMb2dvRWwuc2V0QXR0cmlidXRlKFxuXHRcdFx0XCJzcmNcIixcblx0XHRcdG9wZW5Cb29rTGlnaHRJY29uXG5cdFx0KTtcblx0XHR0aGVtZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG50aGVtZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRpZiAoZWxlbWVudC5jaGVja2VkKSB7XG5cdFx0aGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0aGVyb0VsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGJvb2tTZWN0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0YWRkQm9va0Zvcm1FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRmYXZpY29uRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBmYXZpY29uTGlnaHRJY29uKTtcblx0XHRzaXRlTG9nb0VsLnNldEF0dHJpYnV0ZShcblx0XHRcdFwic3JjXCIsXG5cdFx0XHRvcGVuQm9va0xpZ2h0SWNvblxuXHRcdCk7XG5cdFx0c2V0Q3VycmVudFRoZW1lKFwiZGFya1wiKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcblx0fSBlbHNlIHtcblx0XHRoZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRoZXJvRWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG5cdFx0Ym9va1NlY3Rpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcblx0XHRhZGRCb29rRm9ybUVsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuXHRcdGZhdmljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdmljb25EYXJrSWNvbik7XG5cdFx0c2l0ZUxvZ29FbC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcInNyY1wiLFxuXHRcdFx0b3BlbkJvb2tEYXJrSWNvblxuXHRcdCk7XG5cdFx0c2V0Q3VycmVudFRoZW1lKFwibGlnaHRcIik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuXHR9XG59KTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvbWFnbmlmeS13aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL2Jvb2std2FsbC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9wbHVzLWJsYWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAvKiBtYWluIHRoZW1lICovXFxuICAgIC0td2hpdGU6IHdoaXRlO1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOGY5ZmE7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZTllY2VmO1xcblxcbiAgICAtLXByaW1hcnktZGFyay1ibHVlOiAjM2EwY2EzO1xcbiAgICAtLXByaW1hcnktbGlnaHQtYmx1ZTogIzRjYzlmMDtcXG4gICAgLS1wcmltYXJ5LWRhcmstcHVycGxlOiAjNzIwOWI3O1xcbiAgICAtLXNlY29uZGFyeS1taWQtYmx1ZTogIzQzNjFlZTtcXG5cXG4gICAgLS1oaWdobGlnaHQtcGluazogI2Y3MjU4NTtcXG5cXG4gICAgLS1ibGFjazogIzAwMDtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyMTI1Mjk7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcmstZ3JheTogIzk3OWRhYztcXG4gICAgLyogREFSSyBNT0RFIEJFTE9XICovXFxuICAgIC8qIE9USEVSIFRIRU1FIEJFTE9XICovXFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuLyogREFSSyBNT0RFICovXFxuI2hlYWRlci1jb250YWluZXIuZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4M2RlZywgdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpIDgwJSwgdmFyKC0tc2Vjb25kYXJ5LW1pZC1ibHVlKSk7IFxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbiNoZWFkZXItY29udGFpbmVyLmRhcmsgLmJvb2stdG90YWxzIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG4jaGVhZGVyLWNvbnRhaW5lci5kYXJrICNzZWFyY2gtaWNvbiB7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuZGl2I2hlcm8tY29udGFpbmVyLmRhcmsge1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KTtcXG4gICAgICovXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7IFxcbn1cXG4jYm9vay1jb250YWluZXIuZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuI29yZGVyX2J5LFxcbiNvcmRlcl9kaXJlY3Rpb24sXFxuaGVhZGVyLmRhcmsgPiAuaGVhZGVyID4gLmhhbWJ1cmdlciA+IC5iYXIgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcblxcbi5kYXJrICogLm5hdi1saW5rIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG5cXG4uZGFyayAqIC5hZGQtYm9vay1mb3JtLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG4uZGFyayAqICNhZGQtYm9vay1wbHVzIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuLyogLS0tLUNPTlRBSU5FUiAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBkaXNwbGF5OmdyaWQ7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpOyAqL1xcbn1cXG4vKiB0YXJnZXQgcGFnZSBzZWN0aW9ucyAqL1xcbi5jb250YWluZXIgPiAqIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpOyAqL1xcbn1cXG4vKiB0YXJnZXQgd3JhcHBlcnMgd2l0aGluIHBhZ2Ugc2VjdGlvbnMgKi9cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogIDEwcHg7XFxufVxcbi8qIC0tLS1IRUFERVIgKi9cXG4jaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpIDgwJSwgdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKSk7IFxcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDEwcHggLTE1cHggdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIC8qXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsbWluLWNvbnRlbnQpIG1pbm1heCg3NXB4LDFmcik7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNzVweCkgbWlubWF4KDc1cHgsMWZyKTsgKi9cXG4gICAgLypncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgKi9cXG59XFxuLmhlYWRlciAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLG1pbi1jb250ZW50KSBtaW5tYXgoNzVweCwxZnIpOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgobWluLWNvbnRlbnQsIDc1cHgpKTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw3NXB4KSBtaW5tYXgoNzVweCwxZnIpOyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciAuYWRkLWJvb2ssXFxuLmFkZC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIC8qIG1heC13aWR0aDogNzVweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmFkZC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC1waW5rKTtcXG59XFxuLmFkZC1ib29rLWZvcm0tb3Blbjpob3ZlcixcXG4uYWRkLWJvb2stZm9ybS1vcGVuOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tb3Blbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG4uYWRkLWJvb2stZm9ybS1vcGVuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVxcblxcbiNhZGQtYm9vay1wbHVzIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLnRoZW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogVE9HR0xFIEJVVFRPTiAqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpO1xcbiAgICAvKiB0cmFuc2l0aW9uIHRvIGNvbG9yIG9uY2UgY2hlY2tlZCAqL1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSxcXG4ucmVhZC10b2dnbGUtc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuLyogdHJhbnNpdGlvbiBvZiBzd2l0Y2ggYmFja2dyb3VuZCBjb2xvciAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG4vKiB0cmFuc2l0aW9uIG9mIC5zbGlkZXI6YmVmb3JlIC0gdGhlIHRvZ2dsZSBzd2l0Y2ggY2lyY2xlICovXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlLFxcbmlucHV0OmNoZWNrZWQgKyAucmVhZC10b2dnbGUtc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlLFxcbi5yZWFkLXRvZ2dsZS1zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udG9nZ2xlLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIFJFQUQgVE9HR0xFICovXFxuLnNpbmdsZS1ib29rIC5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgYm90dG9tOiA0cHg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAucmVhZC10b2dnbGUtc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAucmVhZC10b2dnbGUtc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpOyBcXG59XFxuXFxuLyogTkFWSUdBVElPTiAqL1xcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXIgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5oZWFkZXIgdWwgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm5hdi1saW5rIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5uYXYtbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbi5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXIge1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIG1hcmdpbjogNXB4IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogXFxufn4gIEhFUk8gU0VDVElPTiB+flxcbiovXFxuI2hlcm8tY29udGFpbmVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi8qIC5oZXJvIHtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7O1xcbiAgIFxcbn0gKi9cXG4uaGVhZGVyICNzZWFyY2gtc2VjdGlvbixcXG4uaGVybyAjc2VhcmNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XFxufVxcbi5oZWFkZXIgI2Jvb2stc2VhcmNoLFxcbi5oZXJvICNib29rLXNlYXJjaCB7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxufVxcblxcblxcbi5ib29rLXRvdGFscyxcXG4uYm9vay10b3RhbHMtaGVybyB7XFxuICAgIGJvcmRlcjogdmFyKC0taGlnaGxpZ2h0LXBpbmspIDFweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuLmJvb2stcHJvZ3Jlc3MtYmFyLFxcbi5ib29rLXByb2dyZXNzLWJhci1oZXJvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogLjNyZW0gMDtcXG59XFxuLnByb2dyZXNzLWJhcixcXG4ucHJvZ3Jlc3MtYmFyLWhlcm8ge1xcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodC1waW5rKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBcXG5+fiAgQk9PSyBTRUNUSU9OIH5+XFxuKi9cXG5cXG4jYm9vay1jb250YWluZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAzOCwgMjA3KTsgKi9cXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuXFxuLmJvb2stc2VjdGlvbiB7XFxuICAgIC8qIGdyaWQtY29sdW1uOiA7ICovXFxuICAgIHBhZGRpbmc6MXJlbTtcXG59XFxuXFxuLmJvb2stc29ydC1zdGF0dXMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uYm9vay1zZWN0aW9uIC5zb3J0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5ib29rLXNlY3Rpb24gLnNvcnQgc2VsZWN0IHtcXG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSg5MywgMTA0LCAxMTYsIDAuNSkgMXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuLmJvb2stc2VjdGlvbiAuc3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uc3RhdHVzIC5yZWFkX2NvbG9yIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKSAwJSwgdmFyKC0taGlnaGxpZ2h0LXBpbmspIDEwMCUpO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbn1cXG4uc3RhdHVzIC51bnJlYWRfY29sb3Ige1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSkgMTAwJSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxufVxcbi8qIFxcbiAgICBCT09LIENBUkRTXFxuKi9cXG4uYm9vay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNjYWxlLWluLWNlbnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG4gICAgYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG59XFxuXFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKSwgMCAycHggNHB4IC0xcHggcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSkgMTAwJSk7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayA+ICoge1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stdGl0bGUsXFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIC5ib29rLWF1dGhvciB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgXFxuICAgIG1heC13aWR0aDogMjBjaDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnJlYWQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpIDAlLCB2YXIoLS1oaWdobGlnaHQtcGluaykgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLm5vdC1yZWFkIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodCkgMCUsIHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpIDEwMCUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5yZW1vdmUtYm9vayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5lZGl0LWJvb2stZm9ybS1vcGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDM1cHg7XFxuICAgIC8qIHdpZHRoOiAxMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDIwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuZmV0Y2gtYm9vay1kYXRhLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiA2NXB4O1xcbiAgICAvKiB3aWR0aDogMTBweDsgKi9cXG4gICAgaGVpZ2h0OiAyMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLmJvb2stY292ZXItaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHJpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5yZWFkX3RvZ2dsZV9sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNjVweDtcXG4gICAgYm90dG9tOiA3LjVweDtcXG59XFxuLyogXFxuICAgIEZPUk0gU0VDVElPTlxcbiovXFxuLmFkZF9ib29rX3NlY3Rpb24sXFxuLmxvZ2luX3NlY3Rpb24sXFxuLnNpZ251cF9zZWN0aW9uLFxcbi5lZGl0X2Jvb2tfc2VjdGlvbixcXG4uZWRpdF91c2VyX3NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBoaWRlIGZvciBub3cgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LWJvb2stZm9ybSxcXG4ubG9naW4tZm9ybSxcXG4uc2lnbnVwLWZvcm0sXFxuLmVkaXQtYm9vay1mb3JtLFxcbi5lZGl0LXVzZXItZm9ybSB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QzZDNkMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmNsb3NlLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxufVxcbi5jbG9zZS1mb3JtOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLFxcbiAgICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5ldy1ib29rLWZvcm0gaDQsXFxuLmxvZ2luLWZvcm0gaDQsIFxcbi5zaWdudXAtZm9ybSBoNCxcXG4uZWRpdC1ib29rLWZvcm0gaDQsXFxuLmVkaXQtdXNlci1mb3JtIGg0IHtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtLjhyZW07XFxufVxcblxcbi5lZGl0LXVzZXItZm9ybSAuZXhpc3RpbmctZXJyLW1zZyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm5ldy1ib29rLWZvcm0gaW5wdXQsXFxuLmxvZ2luLWZvcm0gaW5wdXQsXFxuLnNpZ251cC1mb3JtIGlucHV0LFxcbi5lZGl0LWJvb2stZm9ybSBpbnB1dCxcXG4uZWRpdC11c2VyLWZvcm0gaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogLjdyZW07XFxufVxcblxcbi5lcnItbXNnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2xvZ2luLWVyci1uby11c2VyLWVtYWlsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAvKiBwYWRkaW5nOiAuMXJlbSAuMnJlbTsgKi9cXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7ICBcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuLnJlbW92ZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jZWRpdC1ib29rLWlkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubmV3LWJvb2stYnV0dG9ucyxcXG4ubG9naW4tYnV0dG9ucyxcXG4uc2lnbnVwLWJ1dHRvbnMsXFxuLmVkaXQtYm9vay1idXR0b25zLFxcbi5lZGl0LXVzZXItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5uZXctYm9vay1idXR0b25zIGJ1dHRvbixcXG4ubG9naW4tYnV0dG9ucyBidXR0b24sXFxuLnNpZ251cC1idXR0b25zIGJ1dHRvbixcXG4uZWRpdC1ib29rLWJ1dHRvbnMgYnV0dG9uLFxcbi5lZGl0LXVzZXItYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyLCAxMzIsIDE5OSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgICBjb2xvcjogcmdiYSgyLCAxMzIsIDE5OSwgMC44KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIC8qIG1hcmdpbjogMjBweDsgKi9cXG4gICAgcGFkZGluZzogbWluKDc1cHgsMS4ycmVtKSAyLjhyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5ldy1ib29rLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5uZXctYm9vay1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4ubG9naW4tYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLmxvZ2luLWJ1dHRvbnMgYnV0dG9uOmZvY3VzLFxcbi5zaWdudXAtYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLnNpZ251cC1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4uZWRpdC1ib29rLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5lZGl0LWJvb2stYnV0dG9ucyBidXR0b246Zm9jdXMsXFxuLmVkaXQtdXNlci1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4uZWRpdC11c2VyLWJ1dHRvbnMgYnV0dG9uOmZvY3VzIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggcmdiYSgyLCAxMzIsIDE5OSwgMC44KSBpbnNldDtcXG59XFxuXFxuLmVtcHR5X2xpYnJhcnlfc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KSB7XFxuICAgIC8qIC5oZWFkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw1MHB4KSBtaW5tYXgoNzVweCwxZnIpO1xcbiAgICB9ICovXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ2FwOiAuMnJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjg4MXB4KSB7XFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMil7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDEpe1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgfVxcbiAgICAubmF2LW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xcbiAgICAgICAgdG9wOiAxMDhweDtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB9XFxuICAgIC5kYXJrICogLm5hdi1tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIH1cXG4gICAgLm5hdi1pdGVtIHtcXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xcbiAgICB9XFxuICAgIC5uYXYtbGluayB7XFxuICAgICAgICBjb2xvcjojMGM0YTZlO1xcbiAgICB9XFxuICAgIC5uYXYtbWVudS5hY3RpdmUge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDo4ODFweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMixtaW4tY29udGVudCkgNWZyO1xcbn1cXG5cXG4gICAgLmhlYWRlciAjc2VhcmNoLXNlY3Rpb24sIFxcbiAgICAuaGVhZGVyIC5ib29rLXRvdGFscyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNzVweCkgbWlubWF4KDc1cHgsMWZyKTsgICovXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLG1pbi1jb250ZW50KSBtaW5tYXgoNzVweCwxZnIpOyBcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICAjaGVyby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbiAgICAuaGVybyB7XFxuICAgICAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTg1cHgsIDFmcikpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwxZnIpOzsgKi9cXG4gICAgLyogZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgfVxcbiAgICAjc2VhcmNoLXNlY3Rpb24taGVybyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICNib29rLWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYycHgpO1xcbiAgICB9XFxuXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMzAwcHgpKTtcXG4gICAgfVxcblxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciAuYm9vay1jb3Zlci1pbWcge1xcbiAgICAgICAgdG9wOiAzNXB4O1xcbiAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgfVxcblxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stdGl0bGUsXFxuICAgIC5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayAuYm9vay1hdXRob3Ige1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMGNoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6MTA4MXB4KSB7XFxuIC5oZXJvIHtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgKi9cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gfVxcbn1cXG5cXG5cXG4vKiBDT0RFIEZPUiBORVcgQk9PSyBCVVRUT04gXFxuXFxuIC5uZXctYm9vayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTM1ZGVnLFxcbiAgICAgIHJnYigzMywgMTUwLCAyNDMpIDAlLFxcbiAgICAgIHJnYigyMSwgMTAxLCAxOTIpIDEwMCVcXG4gICAgKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcblxcbiAgICBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIGJyZWFrLXBvaW50cygnbWQnKSB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XFxuICAgICAgfVxcbiAgICB9XFxuICB9Ki9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xpYnJhcnlTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHdCQUF3QjtJQUN4QiwwQkFBMEI7O0lBRTFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDZCQUE2Qjs7SUFFN0IseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qixv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UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLE1BQU07UUFDTixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtJQUNBLDZDQUE2QztBQUNqRDs7SUFFSTs7UUFFSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksNkRBQTZEO1FBQzdELDZEQUE2RDtRQUM3RCxTQUFTO0lBQ2I7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJOzJEQUNtRDtJQUN2RCwrQ0FBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVDtJQUNBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7SUFDYjs7SUFFQTtRQUNJLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLDREQUE0RDtJQUNoRTs7SUFFQTtRQUNJLFNBQVM7UUFDVCxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBOztRQUVJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtDQUNDO0lBQ0csMkNBQTJDO0lBQzNDLG1CQUFtQjtDQUN0QjtBQUNEOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQ0lcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAvKiBtYWluIHRoZW1lICovXFxuICAgIC0td2hpdGU6IHdoaXRlO1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOGY5ZmE7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZTllY2VmO1xcblxcbiAgICAtLXByaW1hcnktZGFyay1ibHVlOiAjM2EwY2EzO1xcbiAgICAtLXByaW1hcnktbGlnaHQtYmx1ZTogIzRjYzlmMDtcXG4gICAgLS1wcmltYXJ5LWRhcmstcHVycGxlOiAjNzIwOWI3O1xcbiAgICAtLXNlY29uZGFyeS1taWQtYmx1ZTogIzQzNjFlZTtcXG5cXG4gICAgLS1oaWdobGlnaHQtcGluazogI2Y3MjU4NTtcXG5cXG4gICAgLS1ibGFjazogIzAwMDtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyMTI1Mjk7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcmstZ3JheTogIzk3OWRhYztcXG4gICAgLyogREFSSyBNT0RFIEJFTE9XICovXFxuICAgIC8qIE9USEVSIFRIRU1FIEJFTE9XICovXFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuLyogREFSSyBNT0RFICovXFxuI2hlYWRlci1jb250YWluZXIuZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4M2RlZywgdmFyKC0tcHJpbWFyeS1kYXJrLWJsdWUpIDgwJSwgdmFyKC0tc2Vjb25kYXJ5LW1pZC1ibHVlKSk7IFxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbiNoZWFkZXItY29udGFpbmVyLmRhcmsgLmJvb2stdG90YWxzIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG4jaGVhZGVyLWNvbnRhaW5lci5kYXJrICNzZWFyY2gtaWNvbiB7XFxuICAgIGNvbnRlbnQ6IHVybCguLi9hc3NldHMvaWNvbnMvbWFnbmlmeS13aGl0ZS5wbmcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbmRpdiNoZXJvLWNvbnRhaW5lci5kYXJrIHtcXG4gICAgLyogYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JheSk7XFxuICAgICAqL1xcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvYm9vay13YWxsLWJhY2tncm91bmQuanBnKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlOyBcXG59XFxuI2Jvb2stY29udGFpbmVyLmRhcmsge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxufVxcbiNvcmRlcl9ieSxcXG4jb3JkZXJfZGlyZWN0aW9uLFxcbmhlYWRlci5kYXJrID4gLmhlYWRlciA+IC5oYW1idXJnZXIgPiAuYmFyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbn1cXG5cXG4uZGFyayAqIC5uYXYtbGluayB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuXFxuLmRhcmsgKiAuYWRkLWJvb2stZm9ybS1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG59XFxuLmRhcmsgKiAjYWRkLWJvb2stcGx1cyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi4vYXNzZXRzL2ljb25zL3BsdXMtYmxhY2sucG5nXFxcIik7XFxufVxcbi8qIC0tLS1DT05UQUlORVIgKi9cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZGlzcGxheTpncmlkOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTsgKi9cXG59XFxuLyogdGFyZ2V0IHBhZ2Ugc2VjdGlvbnMgKi9cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTsgKi9cXG59XFxuLyogdGFyZ2V0IHdyYXBwZXJzIHdpdGhpbiBwYWdlIHNlY3Rpb25zICovXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogIGF1dG87XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6ICAxMHB4O1xcbn1cXG4vKiAtLS0tSEVBREVSICovXFxuI2hlYWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSA4MCUsIHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSkpOyBcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAxMHB4IC0xNXB4IHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICAvKlxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LG1pbi1jb250ZW50KSBtaW5tYXgoNzVweCwxZnIpO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDc1cHgpIG1pbm1heCg3NXB4LDFmcik7ICovXFxuICAgIC8qZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICovXFxufVxcbi5oZWFkZXIgIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyxtaW4tY29udGVudCkgbWlubWF4KDc1cHgsMWZyKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KG1pbi1jb250ZW50LCA3NXB4KSk7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNzVweCkgbWlubWF4KDc1cHgsMWZyKTsgKi9cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgLmFkZC1ib29rLFxcbi5hZGQtYm9vay1mb3JtLW9wZW4ge1xcbiAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAvKiBtYXgtd2lkdGg6IDc1cHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi5hZGQtYm9vay1mb3JtLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQtcGluayk7XFxufVxcbi5hZGQtYm9vay1mb3JtLW9wZW46aG92ZXIsXFxuLmFkZC1ib29rLWZvcm0tb3Blbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5hZGQtYm9vay1mb3JtLW9wZW46Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuLmFkZC1ib29rLWZvcm0tb3BlbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbn1cXG5cXG4jYWRkLWJvb2stcGx1cyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi50aGVtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIFRPR0dMRSBCVVRUT04gKi9cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyLFxcbi5yZWFkLXRvZ2dsZS1zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KTtcXG4gICAgLyogdHJhbnNpdGlvbiB0byBjb2xvciBvbmNlIGNoZWNrZWQgKi9cXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUsXFxuLnJlYWQtdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbi8qIHRyYW5zaXRpb24gb2Ygc3dpdGNoIGJhY2tncm91bmQgY29sb3IgKi9cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuLyogdHJhbnNpdGlvbiBvZiAuc2xpZGVyOmJlZm9yZSAtIHRoZSB0b2dnbGUgc3dpdGNoIGNpcmNsZSAqL1xcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSxcXG5pbnB1dDpjaGVja2VkICsgLnJlYWQtdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kLFxcbi5yZWFkLXRvZ2dsZS1zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSxcXG4ucmVhZC10b2dnbGUtc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRvZ2dsZS10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBSRUFEIFRPR0dMRSAqL1xcbi5zaW5nbGUtYm9vayAuc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHJpZ2h0OiA3cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnJlYWQtdG9nZ2xlLXNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSk7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnJlYWQtdG9nZ2xlLXNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKTsgXFxufVxcblxcbi8qIE5BVklHQVRJT04gKi9cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGVhZGVyIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaGVhZGVyIHVsIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5uYXYtbGluayB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ibHVlKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4uaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYmFyIHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBtYXJnaW46IDVweCBhdXRvO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIFxcbn5+ICBIRVJPIFNFQ1RJT04gfn5cXG4qL1xcbiNoZXJvLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ibHVlKTsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvYm9vay13YWxsLWJhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4vKiAuaGVybyB7XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpOztcXG4gICBcXG59ICovXFxuLmhlYWRlciAjc2VhcmNoLXNlY3Rpb24sXFxuLmhlcm8gI3NlYXJjaC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xcbn1cXG4uaGVhZGVyICNib29rLXNlYXJjaCxcXG4uaGVybyAjYm9vay1zZWFyY2gge1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbn1cXG5cXG5cXG4uYm9vay10b3RhbHMsXFxuLmJvb2stdG90YWxzLWhlcm8ge1xcbiAgICBib3JkZXI6IHZhcigtLWhpZ2hsaWdodC1waW5rKSAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIG1hcmdpbjogLjVyZW07XFxufVxcbi5ib29rLXByb2dyZXNzLWJhcixcXG4uYm9vay1wcm9ncmVzcy1iYXItaGVybyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW46IC4zcmVtIDA7XFxufVxcbi5wcm9ncmVzcy1iYXIsXFxuLnByb2dyZXNzLWJhci1oZXJvIHtcXG4gICAgLyogd2lkdGg6IDEwJTsgKi9cXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQtcGluayk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogXFxufn4gIEJPT0sgU0VDVElPTiB+flxcbiovXFxuXFxuI2Jvb2stY29udGFpbmVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMzgsIDIwNyk7ICovXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxufVxcblxcbi5ib29rLXNlY3Rpb24ge1xcbiAgICAvKiBncmlkLWNvbHVtbjogOyAqL1xcbiAgICBwYWRkaW5nOjFyZW07XFxufVxcblxcbi5ib29rLXNvcnQtc3RhdHVzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmJvb2stc2VjdGlvbiAuc29ydCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4uYm9vay1zZWN0aW9uIC5zb3J0IHNlbGVjdCB7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIHJnYmEoOTMsIDEwNCwgMTE2LCAwLjUpIDFweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxufVxcbi5ib29rLXNlY3Rpb24gLnN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLnN0YXR1cyAucmVhZF9jb2xvciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQtYmx1ZSkgMCUsIHZhcigtLWhpZ2hsaWdodC1waW5rKSAxMDAlKTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW46IDAuMnJlbTtcXG59XFxuLnN0YXR1cyAudW5yZWFkX2NvbG9yIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodCkgMCUsIHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpIDEwMCUpO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbn1cXG4vKiBcXG4gICAgQk9PSyBDQVJEU1xcbiovXFxuLmJvb2stY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LDFmcikpO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zY2FsZS1pbi1jZW50ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxuICAgIGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxufVxcblxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3JlbSAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSksIDAgMnB4IDRweCAtMXB4IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodCkgMCUsIHZhcigtLXNlY29uZGFyeS1kYXJrLWdyYXkpIDEwMCUpO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgPiAqIHtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIC5ib29rLXRpdGxlLFxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5zaW5nbGUtYm9vayAuYm9vay1hdXRob3Ige1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IFxcbiAgICBtYXgtd2lkdGg6IDIwY2g7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5yZWFkIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1saWdodC1ibHVlKSAwJSwgdmFyKC0taGlnaGxpZ2h0LXBpbmspIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5ub3QtcmVhZCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpIDAlLCB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmF5KSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAucmVtb3ZlLWJvb2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAuZWRpdC1ib29rLWZvcm0tb3BlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgICAvKiB3aWR0aDogMTBweDsgKi9cXG4gICAgaGVpZ2h0OiAyMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG59XFxuLmJvb2stY2FyZC1jb250YWluZXIgLmZldGNoLWJvb2stZGF0YS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogNjVweDtcXG4gICAgLyogd2lkdGg6IDEwcHg7ICovXFxuICAgIGhlaWdodDogMjA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcbi5ib29rLWNhcmQtY29udGFpbmVyIC5ib29rLWNvdmVyLWltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICByaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uYm9vay1jYXJkLWNvbnRhaW5lciAucmVhZF90b2dnbGVfbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDY1cHg7XFxuICAgIGJvdHRvbTogNy41cHg7XFxufVxcbi8qIFxcbiAgICBGT1JNIFNFQ1RJT05cXG4qL1xcbi5hZGRfYm9va19zZWN0aW9uLFxcbi5sb2dpbl9zZWN0aW9uLFxcbi5zaWdudXBfc2VjdGlvbixcXG4uZWRpdF9ib29rX3NlY3Rpb24sXFxuLmVkaXRfdXNlcl9zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogaGlkZSBmb3Igbm93ICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1ib29rLWZvcm0sXFxuLmxvZ2luLWZvcm0sXFxuLnNpZ251cC1mb3JtLFxcbi5lZGl0LWJvb2stZm9ybSxcXG4uZWRpdC11c2VyLWZvcm0ge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkM2QzZDM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5jbG9zZS1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbn1cXG4uY2xvc2UtZm9ybTpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybV90aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbixcXG4gICAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctYm9vay1mb3JtIGg0LFxcbi5sb2dpbi1mb3JtIGg0LCBcXG4uc2lnbnVwLWZvcm0gaDQsXFxuLmVkaXQtYm9vay1mb3JtIGg0LFxcbi5lZGl0LXVzZXItZm9ybSBoNCB7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLS44cmVtO1xcbn1cXG5cXG4uZWRpdC11c2VyLWZvcm0gLmV4aXN0aW5nLWVyci1tc2cge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5uZXctYm9vay1mb3JtIGlucHV0LFxcbi5sb2dpbi1mb3JtIGlucHV0LFxcbi5zaWdudXAtZm9ybSBpbnB1dCxcXG4uZWRpdC1ib29rLWZvcm0gaW5wdXQsXFxuLmVkaXQtdXNlci1mb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC43cmVtO1xcbn1cXG5cXG4uZXJyLW1zZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNsb2dpbi1lcnItbm8tdXNlci1lbWFpbCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogcGFkZGluZzogLjFyZW0gLjJyZW07ICovXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzOyAgXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcbi5yZW1vdmVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI2VkaXQtYm9vay1pZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm5ldy1ib29rLWJ1dHRvbnMsXFxuLmxvZ2luLWJ1dHRvbnMsXFxuLnNpZ251cC1idXR0b25zLFxcbi5lZGl0LWJvb2stYnV0dG9ucyxcXG4uZWRpdC11c2VyLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubmV3LWJvb2stYnV0dG9ucyBidXR0b24sXFxuLmxvZ2luLWJ1dHRvbnMgYnV0dG9uLFxcbi5zaWdudXAtYnV0dG9ucyBidXR0b24sXFxuLmVkaXQtYm9vay1idXR0b25zIGJ1dHRvbixcXG4uZWRpdC11c2VyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMiwgMTMyLCAxOTksIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gICAgY29sb3I6IHJnYmEoMiwgMTMyLCAxOTksIDAuOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAvKiBtYXJnaW46IDIwcHg7ICovXFxuICAgIHBhZGRpbmc6IG1pbig3NXB4LDEuMnJlbSkgMi44cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5uZXctYm9vay1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4ubmV3LWJvb2stYnV0dG9ucyBidXR0b246Zm9jdXMsXFxuLmxvZ2luLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5sb2dpbi1idXR0b25zIGJ1dHRvbjpmb2N1cyxcXG4uc2lnbnVwLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5zaWdudXAtYnV0dG9ucyBidXR0b246Zm9jdXMsXFxuLmVkaXQtYm9vay1idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4uZWRpdC1ib29rLWJ1dHRvbnMgYnV0dG9uOmZvY3VzLFxcbi5lZGl0LXVzZXItYnV0dG9ucyBidXR0b246aG92ZXIsXFxuLmVkaXQtdXNlci1idXR0b25zIGJ1dHRvbjpmb2N1cyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuOCkgaW5zZXQ7XFxufVxcblxcbi5lbXB0eV9saWJyYXJ5X3NlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxuICAgIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDo0ODBweCkge1xcbiAgICAvKiAuaGVhZGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTBweCkgbWlubWF4KDc1cHgsMWZyKTtcXG4gICAgfSAqL1xcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdhcDogLjJyZW07XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDo4ODFweCkge1xcbiAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDIpe1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgxKXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMyl7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XFxuICAgIH1cXG4gICAgLm5hdi1tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgICAgIHRvcDogMTA4cHg7XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgfVxcbiAgICAuZGFyayAqIC5uYXYtbWVudSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICB9XFxuICAgIC5uYXYtaXRlbSB7XFxuICAgICAgICBtYXJnaW46IDE2cHggMDtcXG4gICAgfVxcbiAgICAubmF2LWxpbmsge1xcbiAgICAgICAgY29sb3I6IzBjNGE2ZTtcXG4gICAgfVxcbiAgICAubmF2LW1lbnUuYWN0aXZlIHtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6ODgxcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsbWluLWNvbnRlbnQpIDVmcjtcXG59XFxuXFxuICAgIC5oZWFkZXIgI3NlYXJjaC1zZWN0aW9uLCBcXG4gICAgLmhlYWRlciAuYm9vay10b3RhbHMge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRlciB7XFxuICAgICAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDc1cHgpIG1pbm1heCg3NXB4LDFmcik7ICAqL1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMixtaW4tY29udGVudCkgbWlubWF4KDc1cHgsMWZyKTsgXFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgI2hlcm8tY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIH1cXG4gICAgLmhlcm8ge1xcbiAgICAgICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE4NXB4LCAxZnIpKTsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsMWZyKTs7ICovXFxuICAgIC8qIGdyaWQtYXV0by1mbG93OiBjb2x1bW47ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG4gICAgI3NlYXJjaC1zZWN0aW9uLWhlcm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAjYm9vay1jb250YWluZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MnB4KTtcXG4gICAgfVxcblxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LDMwMHB4KSk7XFxuICAgIH1cXG5cXG4gICAgLmJvb2stY2FyZC1jb250YWluZXIgLmJvb2stY292ZXItaW1nIHtcXG4gICAgICAgIHRvcDogMzVweDtcXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJvb2stY2FyZC1jb250YWluZXIgLnNpbmdsZS1ib29rIC5ib29rLXRpdGxlLFxcbiAgICAuYm9vay1jYXJkLWNvbnRhaW5lciAuc2luZ2xlLWJvb2sgLmJvb2stYXV0aG9yIHtcXG4gICAgICAgIG1heC13aWR0aDogMTBjaDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjEwODFweCkge1xcbiAuaGVybyB7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7ICovXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuIH1cXG59XFxuXFxuXFxuLyogQ09ERSBGT1IgTkVXIEJPT0sgQlVUVE9OIFxcblxcbiAubmV3LWJvb2sge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDEzNWRlZyxcXG4gICAgICByZ2IoMzMsIDE1MCwgMjQzKSAwJSxcXG4gICAgICByZ2IoMjEsIDEwMSwgMTkyKSAxMDAlXFxuICAgICk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG5cXG4gICAgc3BhbiB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBicmVhay1wb2ludHMoJ21kJykge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgb3BhY2l0eSAwLjI1cztcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpYnJhcnlTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpYnJhcnlTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkJvb2siLCJhZGRCb29rU2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlckFkZEJvb2tGb3JtIiwic2V0QXR0cmlidXRlIiwiYWRkQm9va0J0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhck5ld0Jvb2tGb3JtIiwiYm9va0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJjbGVhck5ld0Jvb2tGb3JtQnRuIiwiY2xvc2VOZXdCb29rRm9ybSIsImNsb3NlTmV3Qm9va0Zvcm1CdG4iLCJib29rVGl0bGVJbnB1dCIsImJvb2tBdXRob3JJbnB1dCIsImJvb2tJU0JOSW5wdXQiLCJib29rUGFnZXNJbnB1dCIsImJvb2tFZGl0aW9uSW5wdXQiLCJib29rRGF0ZUlucHV0IiwiYm9va1JlYWRTdGF0dXNJbnB1dCIsImFkZEJvb2tUb0xpYnJhcnkiLCJuZXdCb29rIiwidGl0bGUiLCJ0cmltIiwiYXV0aG9yIiwiaXNibiIsInBhZ2VzIiwiZWRpdGlvbiIsInB1Ymxpc2hfZGF0ZSIsImlzX3JlYWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJyZW5kZXJCb29rcyIsImFsZXJ0IiwiYWRkQm9va0Zvcm1CdG4iLCJjbGVhckVkaXRCb29rRm9ybSIsImNsZWFyRWRpdEJvb2tGb3JtQnRuIiwiY2xvc2VFZGl0Qm9va0Zvcm0iLCJjbG9zZUVkaXRCb29rRm9ybUJ0biIsImJvb2tUaXRsZUVkaXRJbnB1dCIsImJvb2tBdXRob3JFZGl0SW5wdXQiLCJib29rSVNCTkVkaXRJbnB1dCIsImJvb2tQYWdlc0VkaXRJbnB1dCIsImJvb2tFZGl0aW9uRWRpdElucHV0IiwiYm9va0RhdGVFZGl0SW5wdXQiLCJib29rUmVhZFN0YXR1c0VkaXRJbnB1dCIsImVkaXRCb29rTGlicmFyeSIsIm5ld0Jvb2tVcGRhdGUiLCJib29rSUQiLCJkYXRhc2V0IiwiYm9va0lkIiwiZmV0Y2hVUkxFZGl0IiwiZWRpdEJvb2tGb3JtQnRuIiwiVXNlciIsInVzZXJuYW1lSW5wdXQiLCJlbWFpbElucHV0IiwicGFzc3dvcmRJbnB1dCIsImVkaXRVc2VyU2VjdGlvbiIsImV4aXN0aW5nVXNlckRhdGFHbG9iYWwiLCJyZW5kZXJFZGl0VXNlckZvcm0iLCJyZXNwb25zZVVzZXJEYXRhIiwicmVzcG9uc2VVc2VyIiwianNvbiIsImV4aXN0aW5nVXNlckRhdGEiLCJlbWFpbCIsInVzZXJuYW1lIiwic2V0dGluZ3NCdG4iLCJjbGVhckVkaXRVc2VyRm9ybSIsInVzZXJJbnB1dHMiLCJjbGVhckVkaXRVc2VyRm9ybUJ0biIsImNsb3NlRWRpdFVzZXJGb3JtIiwiY2xvc2VFZGl0VXNlckZvcm1CdG4iLCJlZGl0VXNlciIsImV4aXN0aW5nRXJyTXNnIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwibmV3VXNlclVwZGF0ZSIsInBhc3N3b3JkIiwibGVuZ3RoIiwidGV4dENvbnRlbnQiLCJleGlzdGluZ1VzZXJSZXNwb25zZSIsImV4aXN0aW5nRW1haWwiLCJleGlzdGluZ1VzZXJuYW1lIiwidXNlcklkIiwiaWQiLCJlZGl0VXNlckZvcm1CdG4iLCJmZXRjaEJvb2tJbmZvIiwicXVlcnkiLCJsaWJVcmxBUEkiLCJjbGVhblF1ZXJ5U3RyIiwic3BsaXQiLCJqb2luIiwibGliQVBJUXVlcnlTdHIiLCJyZXNwb25zZUxpYnJhcnlEYXRhIiwicmVzcG9uc2VMaWJyYXJ5IiwiY29uc29sZSIsImxvZyIsImhhbWJ1cmdlciIsIm5hdk1lbnUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW5kZXJQcm9ncmVzc0JhciIsImN1cnJlbnRCb29rc0RhdGEiLCJjdXJyZW50Qm9va3MiLCJjdXJyZW50Qm9va3NSZWFkQ291bnQiLCJmaWx0ZXIiLCJib29rIiwiY3VycmVudEJvb2tzVG90YWxDb3VudCIsImJvb2tSZWFkRGlzcGxheSIsImJvb2tUb3RhbERpc3BsYXkiLCJib29rUmVhZERpc3BsYXlIZXJvIiwiYm9va1RvdGFsRGlzcGxheUhlcm8iLCJwcm9ncmVzc0JhciIsInByb2dyZXNzQmFySGVybyIsInByb2dyZXNzV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsIm1hZ25pZnlCbGFja0ljb24iLCJzcmMiLCJtYWduaWZ5V2hpdGVJY29uIiwib3BlbkJvb2tJY29uIiwicGx1c1doaXRlSWNvbiIsIndpbmRvdyIsIm9ubG9hZCIsImxvZ291dCIsImxvY2F0aW9uIiwicmVwbGFjZSIsImJvb2tDb3ZlclBsYWNlaG9sZGVySW1nIiwic2VhcmNoVGVybSIsImJvb2tDb250YWluZXIiLCJpbm5lckhUTUwiLCJsb3dlclNlYXJjaFRlcm0iLCJmaWx0ZXJlZEN1cnJlbnRCb29rcyIsImluY2x1ZGVzIiwiaSIsImJvb2tDYXJkIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNsb3NlQnRuIiwiZmV0Y2hVUkwiLCJlZGl0QnRuIiwiZXZlbnQiLCJib29rQ2FyZENoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNoaWxkTm9kZXMiLCJleGlzdGluZ0Jvb2tJbmZvIiwic2xpY2UiLCJmaXJzdENoaWxkIiwiY2hlY2tlZCIsImJvb2tfaWQiLCJib29rQ292ZXJJbWciLCJib29rVGl0bGUiLCJib29rQXV0aG9yIiwibGFiZWxBdXRob3IiLCJhdXRob3JEaXNwbGF5IiwiYXBwZW5kIiwiYm9va0lzYm4iLCJsYWJlbElzYm4iLCJpc2JuRGlzcGxheSIsInBhZ2VzQ291bnQiLCJsYWJlbFBhZ2VzIiwiYm9va1BhZ2VzIiwiYm9va0VkaXRpb24iLCJsYWJlbEVkaXRpb24iLCJlZGl0aW9uRGlzcGxheSIsInB1Ymxpc2hEYXRlIiwibGFiZWxEYXRlIiwiZGF0ZURpc3BsYXkiLCJmZXRjaEJ0biIsImJvb2tEYXRhUmVzcG9uc2UiLCJib29rRGF0YSIsImRvY3MiLCJmZXRjaGVkQm9va0RhdGEiLCJhdXRob3JfbmFtZSIsImZpcnN0X3B1Ymxpc2hfeWVhciIsImNvdmVyX2ltZ19zcmMiLCJyZXBsYWNlQm9va0RhdGEiLCJyZWFkVG9nZ2xlTGFiZWwiLCJ0b2dnbGVDb250cm9sTGFiZWwiLCJ0b2dnbGVDb250cm9sQ2hlY2tib3giLCJ0b2dnbGVDb250cm9sU3BhbiIsImVsZW1lbnQiLCJjb250YWlucyIsInJlbW92ZSIsImluZGV4IiwiZ2V0QXR0cmlidXRlIiwibmV3UmVhZFN0YXR1c0RhdGEiLCJhcHBlbmRDaGlsZCIsIm9wZW5Cb29rTGlnaHRJY29uIiwib3BlbkJvb2tEYXJrSWNvbiIsImZhdmljb25MaWdodEljb24iLCJmYXZpY29uRGFya0ljb24iLCJERUZBVUxUX1RIRU1FIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRUaGVtZSIsImhlYWRlckVsIiwiaGVyb0VsIiwiYm9va1NlY3Rpb25FbCIsImFkZEJvb2tGb3JtRWwiLCJmYXZpY29uRWwiLCJzaXRlTG9nb0VsIiwidGhlbWVUb2dnbGUiLCJzZXRDdXJyZW50VGhlbWUiLCJuZXdUaGVtZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
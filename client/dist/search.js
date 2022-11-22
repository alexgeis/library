(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["search"],{

/***/ "./src/js/library/search.js":
/*!**********************************!*\
  !*** ./src/js/library/search.js ***!
  \**********************************/
/***/ (() => {

// SEARCH BAR
// async function renderSearch(search) {
// 	if (search === "") renderBooks();

// 	// const allBooksData = await fetch("/api/books");
// 	// console.log({ allBooksData });
// 	// const allBooks = await allBooksData.json();

// 	// const filterBooks = allBooks.filter((book) => {
// 	// 	const lowerTitle = book.title.toLowerCase();
// 	// 	const lowerSearch = search.toLowerCase();
// 	// 	return lowerTitle.includes(lowerSearch);
// 	// });

// 	// const filterBooks = [];
// 	// for (let i = 0; i < allBooks.length; i++) {
// 	// 	const book = allBooks[i];
// 	// 	let lowerTitle = book.title.toLowerCase();
// 	// 	let lowerSearch = search.toLowerCase();
// 	// 	if (lowerTitle.includes(lowerSearch)) {
// 	// 		filterBooks.push(book);
// 	// 	}
// 	// }

// 	// setCurrentBooks(filterBooks);
// 	renderBooks(search);
// }

const searchInput = document.querySelector("#book-search");
searchInput.addEventListener("keyup", e => {
  let currentVal = e.target.value;
  // renderSearch(currentVal);
  renderBooks(currentVal);
});
const searchInputHero = document.querySelector("#book-search-hero");
searchInputHero.addEventListener("keyup", e => {
  let currentVal = e.target.value;
  // renderSearch(currentVal);
  renderBooks(currentVal);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/search.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDMURGLFdBQVcsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDNUMsSUFBSUMsVUFBVSxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztFQUMvQjtFQUNBQyxXQUFXLENBQUNILFVBQVUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFDRixNQUFNSSxlQUFlLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQ25FTyxlQUFlLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQ2hELElBQUlDLFVBQVUsR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7RUFDL0I7RUFDQUMsV0FBVyxDQUFDSCxVQUFVLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xpYnJhcnkvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNFQVJDSCBCQVJcbi8vIGFzeW5jIGZ1bmN0aW9uIHJlbmRlclNlYXJjaChzZWFyY2gpIHtcbi8vIFx0aWYgKHNlYXJjaCA9PT0gXCJcIikgcmVuZGVyQm9va3MoKTtcblxuLy8gXHQvLyBjb25zdCBhbGxCb29rc0RhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvYm9va3NcIik7XG4vLyBcdC8vIGNvbnNvbGUubG9nKHsgYWxsQm9va3NEYXRhIH0pO1xuLy8gXHQvLyBjb25zdCBhbGxCb29rcyA9IGF3YWl0IGFsbEJvb2tzRGF0YS5qc29uKCk7XG5cbi8vIFx0Ly8gY29uc3QgZmlsdGVyQm9va3MgPSBhbGxCb29rcy5maWx0ZXIoKGJvb2spID0+IHtcbi8vIFx0Ly8gXHRjb25zdCBsb3dlclRpdGxlID0gYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpO1xuLy8gXHQvLyBcdGNvbnN0IGxvd2VyU2VhcmNoID0gc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4vLyBcdC8vIFx0cmV0dXJuIGxvd2VyVGl0bGUuaW5jbHVkZXMobG93ZXJTZWFyY2gpO1xuLy8gXHQvLyB9KTtcblxuLy8gXHQvLyBjb25zdCBmaWx0ZXJCb29rcyA9IFtdO1xuLy8gXHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEJvb2tzLmxlbmd0aDsgaSsrKSB7XG4vLyBcdC8vIFx0Y29uc3QgYm9vayA9IGFsbEJvb2tzW2ldO1xuLy8gXHQvLyBcdGxldCBsb3dlclRpdGxlID0gYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpO1xuLy8gXHQvLyBcdGxldCBsb3dlclNlYXJjaCA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpO1xuLy8gXHQvLyBcdGlmIChsb3dlclRpdGxlLmluY2x1ZGVzKGxvd2VyU2VhcmNoKSkge1xuLy8gXHQvLyBcdFx0ZmlsdGVyQm9va3MucHVzaChib29rKTtcbi8vIFx0Ly8gXHR9XG4vLyBcdC8vIH1cblxuLy8gXHQvLyBzZXRDdXJyZW50Qm9va3MoZmlsdGVyQm9va3MpO1xuLy8gXHRyZW5kZXJCb29rcyhzZWFyY2gpO1xuLy8gfVxuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1zZWFyY2hcIik7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblx0bGV0IGN1cnJlbnRWYWwgPSBlLnRhcmdldC52YWx1ZTtcblx0Ly8gcmVuZGVyU2VhcmNoKGN1cnJlbnRWYWwpO1xuXHRyZW5kZXJCb29rcyhjdXJyZW50VmFsKTtcbn0pO1xuY29uc3Qgc2VhcmNoSW5wdXRIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXNlYXJjaC1oZXJvXCIpO1xuc2VhcmNoSW5wdXRIZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRsZXQgY3VycmVudFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXHQvLyByZW5kZXJTZWFyY2goY3VycmVudFZhbCk7XG5cdHJlbmRlckJvb2tzKGN1cnJlbnRWYWwpO1xufSk7XG4iXSwibmFtZXMiOlsic2VhcmNoSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRWYWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckJvb2tzIiwic2VhcmNoSW5wdXRIZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==
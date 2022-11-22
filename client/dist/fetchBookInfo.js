(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["fetchBookInfo"],{

/***/ "./src/js/library/fetchBookInfo.js":
/*!*****************************************!*\
  !*** ./src/js/library/fetchBookInfo.js ***!
  \*****************************************/
/***/ (() => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/fetchBookInfo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hCb29rSW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLGFBQWEsR0FBRyxNQUFPQyxLQUFLLElBQUs7RUFDdEMsTUFBTUMsU0FBUyxHQUFHLHVDQUF1QztFQUN6RCxNQUFNQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hELE1BQU1DLGNBQWMsR0FBR0osU0FBUyxHQUFHQyxhQUFhO0VBRWhELE1BQU1JLG1CQUFtQixHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsY0FBYyxDQUFDO0VBQ3ZELE1BQU1HLGVBQWUsR0FBRyxNQUFNRixtQkFBbUIsQ0FBQ0csSUFBSSxFQUFFO0VBRXhEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsZUFBZSxDQUFDO0VBQzVCLE9BQU9BLGVBQWU7QUFDdkIsQ0FBQztBQUVEVCxhQUFhLENBQUMsbUJBQW1CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9mZXRjaEJvb2tJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoQm9va0luZm8gPSBhc3luYyAocXVlcnkpID0+IHtcblx0Y29uc3QgbGliVXJsQVBJID0gXCJodHRwOi8vb3BlbmxpYnJhcnkub3JnL3NlYXJjaC5qc29uP3E9XCI7XG5cdGNvbnN0IGNsZWFuUXVlcnlTdHIgPSBxdWVyeS5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG5cdGNvbnN0IGxpYkFQSVF1ZXJ5U3RyID0gbGliVXJsQVBJICsgY2xlYW5RdWVyeVN0cjtcblxuXHRjb25zdCByZXNwb25zZUxpYnJhcnlEYXRhID0gYXdhaXQgZmV0Y2gobGliQVBJUXVlcnlTdHIpO1xuXHRjb25zdCByZXNwb25zZUxpYnJhcnkgPSBhd2FpdCByZXNwb25zZUxpYnJhcnlEYXRhLmpzb24oKTtcblxuXHRjb25zb2xlLmxvZyhyZXNwb25zZUxpYnJhcnkpO1xuXHRyZXR1cm4gcmVzcG9uc2VMaWJyYXJ5O1xufTtcblxuZmV0Y2hCb29rSW5mbyhcImxvcmQgb2YgdGhlIHJpbmdzXCIpO1xuIl0sIm5hbWVzIjpbImZldGNoQm9va0luZm8iLCJxdWVyeSIsImxpYlVybEFQSSIsImNsZWFuUXVlcnlTdHIiLCJzcGxpdCIsImpvaW4iLCJsaWJBUElRdWVyeVN0ciIsInJlc3BvbnNlTGlicmFyeURhdGEiLCJmZXRjaCIsInJlc3BvbnNlTGlicmFyeSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["logout"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/library/logout.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHLFlBQVk7RUFDMUIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtJQUNqREMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFO01BQUUsY0FBYyxFQUFFO0lBQW1CO0VBQy9DLENBQUMsQ0FBQztFQUVGLElBQUlILFFBQVEsQ0FBQ0ksRUFBRSxFQUFFO0lBQ2hCQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztFQUMvQixDQUFDLE1BQU07SUFDTkMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0VBQzVCO0FBQ0QsQ0FBQztBQUVESCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFWCxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvanMvbGlicmFyeS9sb2dvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9sb2dvdXRcIiwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHR9KTtcblxuXHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcblx0fSBlbHNlIHtcblx0XHRhbGVydChcIkZhaWxlZCB0byBsb2cgb3V0LlwiKTtcblx0fVxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ291dCk7XG4iXSwibmFtZXMiOlsibG9nb3V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsImRvY3VtZW50IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
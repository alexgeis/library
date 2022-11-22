(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["login"],{

/***/ "./src/js/login/login.js":
/*!*******************************!*\
  !*** ./src/js/login/login.js ***!
  \*******************************/
/***/ (() => {

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginSubmitBtn = document.querySelector(".login-submit-btn");
const loginUserHandler = async function (e) {
  e.preventDefault();
  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();

  // CODE TO VALIDATE EMPTY INPUTS

  if (usernameInput && passwordInput) {
    const loginUserData = {
      usernameInput,
      passwordInput
    };
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(loginUserData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    if (response.ok) {
      // direct logged-in user to home page
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};
loginSubmitBtn.addEventListener("submit", loginUserHandler);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/login/login.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBRWxFLE1BQU1HLGdCQUFnQixHQUFHLGdCQUFnQkMsQ0FBQyxFQUFFO0VBQzNDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtFQUNsQixNQUFNQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDQyxJQUFJLEVBQUU7RUFDM0MsTUFBTUMsYUFBYSxHQUFHUixRQUFRLENBQUNNLEtBQUssQ0FBQ0MsSUFBSSxFQUFFOztFQUUzQzs7RUFFQSxJQUFJRixhQUFhLElBQUlHLGFBQWEsRUFBRTtJQUNuQyxNQUFNQyxhQUFhLEdBQUc7TUFDckJKLGFBQWE7TUFDYkc7SUFDRCxDQUFDO0lBRUQsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtNQUNoREMsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sYUFBYSxDQUFDO01BQ25DTyxPQUFPLEVBQUU7UUFBRSxjQUFjLEVBQUU7TUFBbUI7SUFDL0MsQ0FBQyxDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixRQUFRLENBQUM7SUFFckIsSUFBSUEsUUFBUSxDQUFDUyxFQUFFLEVBQUU7TUFDaEI7TUFDQXJCLFFBQVEsQ0FBQ3NCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUMvQixDQUFDLE1BQU07TUFDTkMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0lBQzNCO0VBQ0Q7QUFDRCxDQUFDO0FBQ0RyQixjQUFjLENBQUNzQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVyQixnQkFBZ0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9qcy9sb2dpbi9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBsb2dpblN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tc3VibWl0LWJ0blwiKTtcblxuY29uc3QgbG9naW5Vc2VySGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgdXNlcm5hbWVJbnB1dCA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgcGFzc3dvcmRJbnB1dCA9IHBhc3N3b3JkLnZhbHVlLnRyaW0oKTtcblxuXHQvLyBDT0RFIFRPIFZBTElEQVRFIEVNUFRZIElOUFVUU1xuXG5cdGlmICh1c2VybmFtZUlucHV0ICYmIHBhc3N3b3JkSW5wdXQpIHtcblx0XHRjb25zdCBsb2dpblVzZXJEYXRhID0ge1xuXHRcdFx0dXNlcm5hbWVJbnB1dCxcblx0XHRcdHBhc3N3b3JkSW5wdXQsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL2xvZ2luXCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShsb2dpblVzZXJEYXRhKSxcblx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuXHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0Ly8gZGlyZWN0IGxvZ2dlZC1pbiB1c2VyIHRvIGhvbWUgcGFnZVxuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsZXJ0KFwiRmFpbGVkIHRvIGxvZyBpbi5cIik7XG5cdFx0fVxuXHR9XG59O1xubG9naW5TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBsb2dpblVzZXJIYW5kbGVyKTtcbiJdLCJuYW1lcyI6WyJ1c2VybmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkIiwibG9naW5TdWJtaXRCdG4iLCJsb2dpblVzZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWVJbnB1dCIsInZhbHVlIiwidHJpbSIsInBhc3N3b3JkSW5wdXQiLCJsb2dpblVzZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJvayIsImxvY2F0aW9uIiwicmVwbGFjZSIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
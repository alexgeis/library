(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["signup"],{

/***/ "./src/js/login/signup.js":
/*!********************************!*\
  !*** ./src/js/login/signup.js ***!
  \********************************/
/***/ (() => {

const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signupSubmitBtn = document.querySelector(".signup-submit-btn");
const createUserHandler = async function (e) {
  e.preventDefault();
  const emailInput = email.value.trim();
  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();
  if (usernameInput === "") {
    // // CODE TO WARN USER
    // const signupEmailErrMsg = document.querySelector("#signup-err-no-email");
    // signupEmailErrMsg.setAttribute("style", "display: block;");
    // const timeoutAmt = 1000 * 3;
    // setTimeout(() => {
    // 	signupEmailErrMsg.setAttribute("style", "display: none;");
    // }, timeoutAmt);
  }
  if (password) {
    const newUser = {
      emailInput,
      usernameInput,
      passwordInput
    };
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }

    // const userData = postData("/api/users", newUser);
    // setBookReadTotals();
    // renderBooks();
  }

  // const response = postData("/api/users");

  // // old logic
  // currentBooks.push(newUser);
  // setCurrentBooks(currentUsers);
  // console.log(currentUsers);
  // localStorage.setItem("books", JSON.stringify(currentBooks));
  // addBookSection.setAttribute("style", "display: none;");
  // setBookReadTotals();
  // renderBooks();
};

signupSubmitBtn.addEventListener("submit", createUserHandler);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/login/signup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDcEQsTUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUVwRSxNQUFNSSxpQkFBaUIsR0FBRyxnQkFBZ0JDLENBQUMsRUFBRTtFQUM1Q0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7RUFDbEIsTUFBTUMsVUFBVSxHQUFHVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO0VBQ3JDLE1BQU1DLGFBQWEsR0FBR1QsUUFBUSxDQUFDTyxLQUFLLENBQUNDLElBQUksRUFBRTtFQUMzQyxNQUFNRSxhQUFhLEdBQUdULFFBQVEsQ0FBQ00sS0FBSyxDQUFDQyxJQUFJLEVBQUU7RUFFM0MsSUFBSUMsYUFBYSxLQUFLLEVBQUUsRUFBRTtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0VBR0QsSUFBSVIsUUFBUSxFQUFFO0lBQ2IsTUFBTVUsT0FBTyxHQUFHO01BQ2ZMLFVBQVU7TUFDVkcsYUFBYTtNQUNiQztJQUNELENBQUM7SUFFRCxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQVksRUFBRTtNQUMxQ0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FBTyxDQUFDO01BQzdCTyxPQUFPLEVBQUU7UUFBRSxjQUFjLEVBQUU7TUFBbUI7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsSUFBSU4sUUFBUSxDQUFDTyxFQUFFLEVBQUU7TUFDaEJyQixRQUFRLENBQUNzQixRQUFRLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDL0IsQ0FBQyxNQUFNO01BQ05DLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUM1Qjs7SUFFQTtJQUNBO0lBQ0E7RUFDRDs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0QsQ0FBQzs7QUFDRHBCLGVBQWUsQ0FBQ3FCLGdCQUFnQixDQUFDLFFBQVEsRUFBRXBCLGlCQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2pzL2xvZ2luL3NpZ251cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBzaWdudXBTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1zdWJtaXQtYnRuXCIpO1xuXG5jb25zdCBjcmVhdGVVc2VySGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgZW1haWxJbnB1dCA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgdXNlcm5hbWVJbnB1dCA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcblx0Y29uc3QgcGFzc3dvcmRJbnB1dCA9IHBhc3N3b3JkLnZhbHVlLnRyaW0oKTtcblxuXHRpZiAodXNlcm5hbWVJbnB1dCA9PT0gXCJcIikge1xuXHRcdC8vIC8vIENPREUgVE8gV0FSTiBVU0VSXG5cdFx0Ly8gY29uc3Qgc2lnbnVwRW1haWxFcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZ251cC1lcnItbm8tZW1haWxcIik7XG5cdFx0Ly8gc2lnbnVwRW1haWxFcnJNc2cuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9jaztcIik7XG5cdFx0Ly8gY29uc3QgdGltZW91dEFtdCA9IDEwMDAgKiAzO1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0c2lnbnVwRW1haWxFcnJNc2cuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblx0XHQvLyB9LCB0aW1lb3V0QW10KTtcblx0fVxuXG5cdGlmIChwYXNzd29yZCkge1xuXHRcdGNvbnN0IG5ld1VzZXIgPSB7XG5cdFx0XHRlbWFpbElucHV0LFxuXHRcdFx0dXNlcm5hbWVJbnB1dCxcblx0XHRcdHBhc3N3b3JkSW5wdXQsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzXCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSxcblx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHR9KTtcblxuXHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsZXJ0KFwiRmFpbGVkIHRvIHNpZ24gdXAuXCIpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnN0IHVzZXJEYXRhID0gcG9zdERhdGEoXCIvYXBpL3VzZXJzXCIsIG5ld1VzZXIpO1xuXHRcdC8vIHNldEJvb2tSZWFkVG90YWxzKCk7XG5cdFx0Ly8gcmVuZGVyQm9va3MoKTtcblx0fVxuXG5cdC8vIGNvbnN0IHJlc3BvbnNlID0gcG9zdERhdGEoXCIvYXBpL3VzZXJzXCIpO1xuXG5cdC8vIC8vIG9sZCBsb2dpY1xuXHQvLyBjdXJyZW50Qm9va3MucHVzaChuZXdVc2VyKTtcblx0Ly8gc2V0Q3VycmVudEJvb2tzKGN1cnJlbnRVc2Vycyk7XG5cdC8vIGNvbnNvbGUubG9nKGN1cnJlbnRVc2Vycyk7XG5cdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEJvb2tzKSk7XG5cdC8vIGFkZEJvb2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cdC8vIHNldEJvb2tSZWFkVG90YWxzKCk7XG5cdC8vIHJlbmRlckJvb2tzKCk7XG59O1xuc2lnbnVwU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlVXNlckhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImVtYWlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNpZ251cFN1Ym1pdEJ0biIsImNyZWF0ZVVzZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxJbnB1dCIsInZhbHVlIiwidHJpbSIsInVzZXJuYW1lSW5wdXQiLCJwYXNzd29yZElucHV0IiwibmV3VXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsImxvY2F0aW9uIiwicmVwbGFjZSIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
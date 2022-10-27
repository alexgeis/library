const loginSection = document.querySelector(".login_section");
function renderLoginSection() {
	loginSection.setAttribute("style", "display: block;");
}

const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", renderLoginSection);

// NEW LOGIN FORM
const newLoginForm = document.querySelector(".login-form");
const closeLoginFormBtn = document.querySelector("#close-login-form");
const loginEmailForm = document.querySelector("#login-email");
const loginPasswordForm = document.querySelector("#login-password");
const loginFormBtn = document.querySelector("#login-btn");
const clearLoginFormBtn = document.querySelector("#clear-login-form");

const signupFromLoginBtn = document.querySelector("#signup-login-form");

function clearLoginForm() {
	loginEmailForm.value = "";
	loginPasswordForm.value = "";
}
function closeLoginForm() {
	loginSection.setAttribute("style", "display: none;");
}

//ADD USER FUNCTION
async function addUser() {
	const newUser = new User(loginEmailForm.value, loginPasswordForm.value);
	// if ((bookReadStatusForm.value === true))
	// const response = postData("/api/users");
	// console.log(response);

	// currentBooks.push(newUser);
	// setCurrentBooks(currentUsers);
	// console.log(currentUsers);
	// localStorage.setItem("books", JSON.stringify(currentBooks));
	// addBookSection.setAttribute("style", "display: none;");
	// setBookReadTotals();
	// renderBooks();
}

// newBookForm.addEventListener("submit", addUser);
loginFormBtn.addEventListener("click", addUser);
clearLoginFormBtn.addEventListener("click", clearLoginForm);
closeLoginFormBtn.addEventListener("click", closeLoginForm);

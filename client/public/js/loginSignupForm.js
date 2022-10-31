const loginSection = document.querySelector(".login_section");
const signupSection = document.querySelector(".signup_section");
function renderLoginSection() {
	signupSection.setAttribute("style", "display: none;");
	loginSection.setAttribute("style", "display: block;");
}

const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", renderLoginSection);

const newLoginForm = document.querySelector(".login-form");
const loginEmailForm = document.querySelector("#login-email");
const loginUsernameForm = document.querySelector("#login-username");
const loginPasswordForm = document.querySelector("#login-password");

const closeLoginFormBtn = document.querySelector("#close-login-form");
const clearLoginFormBtn = document.querySelector("#clear-login-form");

function clearLoginForm() {
	loginEmailForm.value = "";
	loginPasswordForm.value = "";
}
clearLoginFormBtn.addEventListener("click", clearLoginForm);
function closeLoginForm() {
	loginSection.setAttribute("style", "display: none;");
}
closeLoginFormBtn.addEventListener("click", closeLoginForm);

const loginToSignupBtn = document.querySelector("#login-to-signup-form");
loginToSignupBtn.addEventListener("click", renderSignupSection);

//ADD USER FUNCTION
const createUser = async function (e) {
	e.preventDefault();
	const email = loginEmailForm.value;
	const password = loginPasswordForm.value;
	const username = loginUsernameForm.value;

	const newUser = new User(email, password);

	const loginErrMsg = document.querySelector("#login-err-no-user-email");
	if (email === "" && username === "") {
		loginErrMsg.setAttribute("style", "display: block;");
	}

	// const response = postData("/api/users");

	// old logic
	currentBooks.push(newUser);
	setCurrentBooks(currentUsers);
	console.log(currentUsers);
	localStorage.setItem("books", JSON.stringify(currentBooks));
	addBookSection.setAttribute("style", "display: none;");
	setBookReadTotals();
	renderBooks();
};

const newPost = async function (event) {
	event.preventDefault();
	const title = document.querySelector('input[name="post-title"]').value;
	const body = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/post`, {
		method: "POST",
		body: JSON.stringify({
			title,
			body,
		}),
		headers: { "Content-Type": "application/json" },
	});

	document.location.replace("/dashboard");
};
const loginFormBtn = document.querySelector("#login-btn");
loginFormBtn.addEventListener("click", addUser);

// SIGNUP FORM
function renderSignupSection() {
	loginSection.setAttribute("style", "display: none;");
	signupSection.setAttribute("style", "display: block;");
}

const signupBtn = document.querySelector("#signup");
signupBtn.addEventListener("click", renderSignupSection);

// NEW SIGNUP FORM
const newSignupForm = document.querySelector(".signup-form");
const signupEmailForm = document.querySelector("#signup-email");
const signupPasswordForm = document.querySelector("#signup-password");
const signupFormBtn = document.querySelector("#signup-btn");

//ADD USER FUNCTION
// async function addUser() {
// 	const newUser = new User(signupEmailForm.value, signupPasswordForm.value);
// 	// if ((bookReadStatusForm.value === true))
// 	// const response = postData("/api/users");
// 	// console.log(response);

// 	// currentBooks.push(newUser);
// 	// setCurrentBooks(currentUsers);
// 	// console.log(currentUsers);
// 	// localStorage.setItem("books", JSON.stringify(currentBooks));
// 	// addBookSection.setAttribute("style", "display: none;");
// 	// setBookReadTotals();
// 	// renderBooks();
// }
const closeSignupFormBtn = document.querySelector("#close-signup-form");
const clearSignupFormBtn = document.querySelector("#clear-signup-form");

function clearSignupForm() {
	signupEmailForm.value = "";
	signupPasswordForm.value = "";
}
function closeSignupForm() {
	signupSection.setAttribute("style", "display: none;");
}

const signupToLoginBtn = document.querySelector("#signup-to-login-form");
signupToLoginBtn.addEventListener("click", renderLoginSection);

// // newBookForm.addEventListener("submit", addUser);
// signupFormBtn.addEventListener("click", addUser);
clearSignupFormBtn.addEventListener("click", clearSignupForm);
closeSignupFormBtn.addEventListener("click", closeSignupForm);

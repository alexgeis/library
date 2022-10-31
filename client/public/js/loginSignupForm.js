const loginSection = document.querySelector(".login_section");
const signupSection = document.querySelector(".signup_section");
function renderLoginSection() {
	signupSection.setAttribute("style", "display: none;");
	loginSection.setAttribute("style", "display: block;");
}

const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", renderLoginSection);

// const newLoginForm = document.querySelector(".login-form");

const clearLoginForm = () => {
	const loginInputs = document.querySelectorAll(".login-form-control");
	for (const input of loginInputs) {
		input.value = "";
	}
};
const clearLoginFormBtn = document.querySelector("#clear-login-form");
clearLoginFormBtn.addEventListener("click", clearLoginForm);

const closeLoginForm = () =>
	loginSection.setAttribute("style", "display: none;");
const closeLoginFormBtn = document.querySelector("#close-login-form");
closeLoginFormBtn.addEventListener("click", closeLoginForm);

const loginToSignupBtn = document.querySelector("#login-to-signup-form");
loginToSignupBtn.addEventListener("click", renderSignupSection);

const loginUser = async function (e) {
	e.preventDefault();
	const email = document.querySelector("#login-email").value;
	const username = document.querySelector("#login-username").value;
	const password = document.querySelector("#login-password").value;

	if (email === "" && username === "") {
		const loginForm = document.querySelector(".login-form");
		const loginErrMsg = document.createElement("small");
		loginErrMsg.classList.remove("removed");
		loginErrMsg.classList.add("err-msg");
		loginErrMsg.setAttribute("id", "login-err-no-user-email");
		loginErrMsg.textContent =
			"* Enter at least 1 of the following: email or username";

		loginForm.insertBefore(loginErrMsg, loginForm.childNodes[6]);

		const timeoutAmt = 1000 * 2;
		setTimeout(() => {
			loginErrMsg.classList.add("removed");
			loginErrMsg.addEventListener("transitionend", () =>
				loginForm.removeChild(loginErrMsg)
			);
		}, timeoutAmt);
	}

	if (password) {
		const newUser = {
			email,
			username,
			password,
		};

		const userData = await postData("/api/users", newUser);
		// setBookReadTotals();
		// renderBooks();
	}
};

const createUser = async function (e) {
	e.preventDefault();
	const email = document.querySelector("#signup-email").value;
	const username = document.querySelector("#signup-username").value;
	const password = document.querySelector("#signup-password").value;

	if (email === "") {
		const signupEmailErrMsg = document.querySelector("#signup-err-no-email");
		signupEmailErrMsg.setAttribute("style", "display: block;");

		const timeoutAmt = 1000 * 3;
		setTimeout(() => {
			signupEmailErrMsg.setAttribute("style", "display: none;");
		}, timeoutAmt);
	}

	if (password) {
		const newUser = {
			email,
			username,
			password,
		};

		const userData = postData("/api/users", newUser);
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
loginFormBtn.addEventListener("click", createUser);

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

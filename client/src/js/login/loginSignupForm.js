const loginSection = document.querySelector(".login_section");
const signupSection = document.querySelector(".signup_section");
function renderLoginSection() {
	signupSection.setAttribute("style", "display: none;");
	loginSection.setAttribute("style", "display: block;");
}

const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", renderLoginSection);

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
	const email = document.querySelector("#login-email").value.trim();
	const username = document.querySelector("#login-username").value.trim();
	const password = document.querySelector("#login-password").value.trim();

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

		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// direct logged-in user to home page
			document.location.replace("/");
		} else {
			alert("Failed to log in.");
		}

		// const userData = await postData("/api/users", newUser);
		// setBookReadTotals();
		// renderBooks();
	}
};

const loginFormBtn = document.querySelector("#login-btn");
// loginFormBtn.addEventListener("click", createUser);

// SIGNUP FORM
function renderSignupSection() {
	loginSection.setAttribute("style", "display: none;");
	signupSection.setAttribute("style", "display: block;");
}

const signupBtn = document.querySelector("#signup");
signupBtn.addEventListener("click", renderSignupSection);

const signupToLoginBtn = document.querySelector("#signup-to-login-form");
signupToLoginBtn.addEventListener("click", renderLoginSection);

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

		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: { "Content-Type": "application/json" },
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

function clearSignupForm() {
	const signupInputs = document.querySelectorAll(".signup-form-control");
	for (const input of signupInputs) {
		input.value = "";
	}
}
const clearSignupFormBtn = document.querySelector("#clear-signup-form");
clearSignupFormBtn.addEventListener("click", clearSignupForm);

function closeSignupForm() {
	signupSection.setAttribute("style", "display: none;");
}
const closeSignupFormBtn = document.querySelector("#close-signup-form");
closeSignupFormBtn.addEventListener("click", closeSignupForm);

const signupFormBtn = document.querySelector("#signup-btn");
// signupFormBtn.addEventListener("click", addUser);

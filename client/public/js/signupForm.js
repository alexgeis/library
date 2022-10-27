const signupSection = document.querySelector(".signup_section");
function renderSignupSection() {
	signupSection.setAttribute("style", "display: block;");
}

const signupBtn = document.querySelector("#signup");
signupBtn.addEventListener("click", renderSignupSection);

// NEW SIGNUP FORM
const newSignupForm = document.querySelector(".signup-form");
const closeSignupFormBtn = document.querySelector("#close-signup-form");
const signupEmailForm = document.querySelector("#signup-email");
const signupPasswordForm = document.querySelector("#signup-password");
const signupFormBtn = document.querySelector("#signup-btn");
const clearSignupFormBtn = document.querySelector("#clear-signup-form");

const signupFromSignupBtn = document.querySelector("#signup-signup-form");

function clearSignupForm() {
	signupEmailForm.value = "";
	signupPasswordForm.value = "";
}
function closeSignupForm() {
	signupSection.setAttribute("style", "display: none;");
}

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

// // newBookForm.addEventListener("submit", addUser);
// signupFormBtn.addEventListener("click", addUser);
clearSignupFormBtn.addEventListener("click", clearSignupForm);
closeSignupFormBtn.addEventListener("click", closeSignupForm);

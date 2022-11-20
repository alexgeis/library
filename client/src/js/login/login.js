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
			passwordInput,
		};

		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify(loginUserData),
			headers: { "Content-Type": "application/json" },
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

const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");

export const loginUserHandler = async function (e) {
	e.preventDefault();

	const username = usernameEl.value.trim();
	const password = passwordEl.value.trim();

	// CODE TO VALIDATE EMPTY INPUTS

	if (username && password) {
		const loginUserData = {
			username,
			password,
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

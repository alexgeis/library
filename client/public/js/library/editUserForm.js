const usernameInput = document.querySelector("#username-edit");
const emailInput = document.querySelector("#email-edit");
const passwordInput = document.querySelector("#password-edit");

const editUserSection = document.querySelector(".edit_user_section");
async function renderEditUserForm() {
	const responseUserData = await fetch("/api/users/user/ID");
	const responseUser = await responseUserData.json();

	let existingUserData = {
		email: responseUser.email,
		username: responseUser.username,
	};

	usernameInput.value = existingUserData.username;
	emailInput.value = existingUserData.email;

	editUserSection.setAttribute("style", "display: block;");
}
const settingsBtn = document.querySelector("#settings");
settingsBtn.addEventListener("click", renderEditUserForm);

// CLEAR EDIT USER FORM
function clearEditUserForm() {
	const userInputs = document.querySelectorAll(".user-form-control");
	for (const input of userInputs) {
		input.value = "";
	}
}
const clearEditUserFormBtn = document.querySelector("#clear-edit-user-form");
clearEditUserFormBtn.addEventListener("click", clearEditUserForm);

// CLOSE EDIT BOOK FORM
function closeEditUserForm() {
	document
		.querySelector(".edit_user_section")
		.setAttribute("style", "display: none;");
}
const closeEditUserFormBtn = document.querySelector("#close-edit-user-form");
closeEditUserFormBtn.addEventListener("click", closeEditUserForm);

// EDIT USER FUNCTION
async function editUser() {
	const newUserUpdate = new User({
		username: usernameInput.value.trim(),
		email: emailInput.value.trim(),
		password: passwordInput.value,
	});
	console.log({ newUserUpdate });
	console.log(newUserUpdate.email);

	const existingUserData = await fetch("/api/users/existing", {
		method: "POST",
		body: JSON.stringify(newUserUpdate),
		headers: { "Content-Type": "application/json" },
	});
	const existingUserResponse = await existingUserData.json();

	const existingErrMsg = document.querySelector(".existing-err-msg");
	if (
		existingUserResponse.existingEmail &&
		existingUserResponse.existingUsername
	) {
		existingErrMsg.style.visibility = "visible";
		existingErrMsg.textContent = "Username and email are both already taken";
	} else if (
		existingUserResponse.existingEmail &&
		!existingUserResponse.existingUsername
	) {
		existingErrMsg.style.visibility = "visible";
		existingErrMsg.textContent = "Email is already taken";
	} else if (
		!existingUserResponse.existingEmail &&
		existingUserResponse.existingUsername
	) {
		existingErrMsg.style.visibility = "visible";
		existingErrMsg.textContent = "Username is already taken";
	}

	const responseUserData = await fetch("/api/users/user/ID");
	const responseUser = await responseUserData.json();

	let userId = {
		id: responseUser.id,
	};

	const fetchURLEdit = `/api/users/${userId.id}`;
	const response = await fetch(fetchURLEdit, {
		method: "PUT",
		body: JSON.stringify(newUserUpdate),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		document
			.querySelector(".edit_user_section")
			.setAttribute("style", "display: none;");
		renderBooks();
	} else {
		alert("Failed to update user.");
	}
}

const editUserFormBtn = document.querySelector(".edit-user");
editUserFormBtn.addEventListener("click", editUser);

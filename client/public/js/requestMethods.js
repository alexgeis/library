//GET
async function getData(url = "") {
	const response = await fetch(url, {
		mode: "cors",
		credentials: "same-origin",
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

//POST
async function postData(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

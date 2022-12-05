//USER CONSTRUCTOR
export const User = function ({ username, email, password }) {
	return {
		username,
		email,
		password,
	};
};

// CLASS VERSION //
// class User {
// 	constructor(username, email, password) {
// 		this.username = username;
// 		this.email = email;
// 		this.password = password;
// 	}
// }

//USER CONSTRUCTOR
const User = function (_ref) {
  let {
    username,
    email,
    password
  } = _ref;
  return {
    username,
    email,
    password
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
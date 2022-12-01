const router = require("express").Router();
const path = require("path");
// const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
	try {
		// // BEFORE WEBPACK
		// res.sendFile(
		// 	path.join(__dirname, "..", "..", "client", "src", "html", "library.html")
		// );

		// WITH WEBPACK
		res.sendFile(
			path.join(__dirname, "..", "..", "client", "dist", "library.html")
		);

		// const userData = await User.findAll({
		//     attributes: { exclude: ["password"] },
		//     order: [["name", "ASC"]],
		// });
		// // Serialize data so the template can read it
		// const users = userData.map((project) => project.get({ plain: true }));

		//  // Pass serialized data and session flag into template
		// res.render("homepage", {
		// 	users,
		// 	logged_in: req.session.logged_in,
		// });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/signup", async (req, res) => {
	try {
		if (req.session.loggedIn) {
			res.redirect("/");
			return;
		}

		// // BEFORE WEBPACK
		// res.sendFile(
		// 	path.join(__dirname, "..", "..", "client", "src", "html", "signup.html")
		// );

		// WITH WEBPACK
		res.sendFile(
			path.join(__dirname, "..", "..", "client", "dist", "signup.html")
		);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	// res.sendFile(path.join(__dirname, "..", "..", "client", "src", "index.html"));
	res.sendFile(
		path.join(__dirname, "..", "..", "client", "dist", "index.html")
	);
});

module.exports = router;

const router = require("express").Router();
const { User, Book } = require("../../models");
const bcrypt = require("bcrypt");

// GET all users
router.get("/", async (req, res) => {
	try {
		// const userData = await User.findAll({
		// 	include: [{ model: Book }],
		// 	attributes: {
		// 		include: [
		// 			[
		// 				// Use plain SQL to add up the total book pages
		// 				sequelize.literal(
		// 					"(SELECT SUM(pages) FROM book WHERE book.user_id = user.id)"
		// 				),
		// 				//name of new column containing the result of aggregate function above
		// 				"totalPages",
		// 			],
		// 		],
		// 	},
		// });
		const userData = await User.findAll({
			include: [{ model: Book }],
		});
		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST create a new user
router.post("/", async (req, res) => {
	try {
		// if no password hashing
		// const userData = await User.create({
		// 	username: req.body.username,
		// 	email: req.body.email,
		// 	password: req.body.password,
		//   });
		// res.status(200).json(userData);

		// if password hashing
		const newUser = req.body;

		//TODO: currently this hashing is redundant with the model hooks hashing
		// hashed password                                  // salt
		newUser.password = await bcrypt.hash(req.body.password, 10);
		// create the newUser with the hashed password and save to DB
		const userData = await User.create(newUser, {
			individualHooks: true, // //TODO: double check if this is needed
		});

		// Set up sessions with a 'loggedIn' variable set to `true`
		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(userData);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

// GET one user
router.get("/:id", async (req, res) => {
	try {
		const userData = await User.findByPk(req.params.id, {
			include: [{ model: Book }],
			// attributes: {
			// 	include: [
			// 		[
			// 			// Use plain SQL to add up the total book pages
			// 			sequelize.literal(
			// 				"(SELECT SUM(pages) FROM book WHERE book.user_id = user.id)"
			// 			),
			// 			//name of new column containing the result of aggregate function above
			// 			"totalPages",
			// 		],
			// 	],
			// },
		});

		if (!userData) {
			res.status(404).json({ message: "No user with this id!" });
			return;
		}

		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// PUT update a user
router.put("/:id", async (req, res) => {
	try {
		const userData = await User.update(req.body, {
			where: {
				id: req.params.id,
			},
			// https://sequelize.org/docs/v6/other-topics/hooks/
			individualHooks: true,
		});
		if (!userData[0]) {
			res.status(404).json({ message: "No user with this id!" });
			return;
		}
		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE a user based on ID
router.delete("/:id", async (req, res) => {
	try {
		const userData = await User.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (!userData) {
			res.status(404).json({ message: "No user with this id!" });
			return;
		}
		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST user login
router.post("/login", async (req, res) => {
	try {
		// First we find one user record with an email address (or username) that matches the one provided by the user logging in
		let userData;
		if (req.body.email)
			userData = await User.findOne({ where: { email: req.body.email } });
		else if (!req.body.email && req.body.username)
			userData = await User.findOne({ where: { username: req.body.username } });

		// If an account with that email address or username doesn't exist, the user will recieve an error message
		if (!userData) {
			res.status(400).json({
				message: "Incorrect email, username, or password, please try again",
			});
			return;
		}
		// If the user does exist, we will use the checkPassword() instance method to compare the user's input to the password stored in the record
		const validPassword = await userData.checkPassword(req.body.password);
		// If checkPassword() evaluates as false, the user will receive an error message
		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}
		// If checkPassword() evaluates as true, the user will be logged in
		// Once the user successfully logs in, set up the sessions variable 'loggedIn'
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.loggedIn = true;

			res.redirect("/");
			// res
			// 	.status(200)
			// 	.json({ user: userData, message: "You are now logged in!" });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

// Logout
router.post("/logout", (req, res) => {
	// When the user logs out, destroy the session
	if (req.session.loggedIn) {
		req.session.destroy((err) => {
			if (err) return next(err);
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;

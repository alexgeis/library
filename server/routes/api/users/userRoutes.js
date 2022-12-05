const express = require("express");
const router = require("express").Router();
const path = require("path");
const { User, Book } = require("../../../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const withAuth = require("../../../utils/auth");

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

		console.log(req.body);
		//TODO: currently this hashing is redundant with the model hooks hashing
		// hashed password                                  // salt
		// newUser.password = await bcrypt.hash(req.body.password, 10);
		// create the newUser with the hashed password and save to DB
		const userData = await User.create(newUser, {
			individualHooks: true, // //TODO: double check if this is needed
		});

		req.session.regenerate(function (err) {
			if (err) next(err);

			// store user information in session
			req.session.user_id = userData.id;
			req.session.loggedIn = true;

			// save the session before redirection to ensure page
			// load does not happen before session is saved
			req.session.save(function (err) {
				if (err) return next(err);
				res.redirect("/");
			});
			// res.status(200).json(userData);
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

router.get("/user/ID", withAuth, async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				id: req.session.user_id,
			},
		});
		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/existing", withAuth, async (req, res) => {
	try {
		const userEmailData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		const userUsernameData = await User.findOne({
			where: {
				username: req.body.username,
			},
		});

		if (!userEmailData && !userUsernameData) {
			// res.status(404).json({ message: "No user with this id!" });
			res.status(200).json({ existingEmail: false, existingUsername: false });
			return;
		}

		if (userEmailData && !userUsernameData) {
			res.status(200).json({ existingEmail: true, existingUsername: false });
			return;
		} else if (userUsernameData && !userEmailData) {
			res.status(200).json({ existingEmail: false, existingUsername: true });
			return;
		} else {
			res.status(200).json({ existingEmail: true, existingUsername: true });
			return;
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// PUT update a user
router.put("/:id", withAuth, async (req, res) => {
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
router.delete("/:id", withAuth, async (req, res) => {
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
		const userData = await User.findOne({
			where: {
				[Op.or]: [
					// { email: req.body.username },
					{ username: req.body.username },
				],
			},
		});

		console.log(userData)
		// userData = await User.findOne({ where: { email: req.body.email } });

		// If an account with that email address or username doesn't exist, the user will recieve an error message
		if (!userData) {
			res.status(400).json({
				message: "Incorrect email, username, or password, please try again",
			});
			return;
		}
		// If the user does exist, we will use the checkPassword() instance method to compare the user's input to the password stored in the record
		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: "Incorrect email or password, please try again" });
			return;
		}
		// If checkPassword() evaluates as true, the user will be logged in
		req.session.regenerate(function (err) {
			if (err) next(err);

			// store user information in session
			req.session.user_id = userData.id;
			req.session.loggedIn = true;

			// save the session before redirection to ensure page
			// load does not happen before session is saved
			req.session.save(function (err) {
				if (err) return next(err);
				res.redirect("/");
			});
		});
	} catch (err) {
		console.error(err);
		res.status(400).json(err);
	}
});

// Logout
router.post("/logout", (req, res) => {
	req.session.loggedIn = false;
	req.session.save(function (err) {
		if (err) next(err);

		// regenerate the session, which is good practice to help
		// guard against forms of session fixation
		req.session.regenerate(function (err) {
			if (err) next(err);
			res.redirect("/");
		});
	});
});

module.exports = router;

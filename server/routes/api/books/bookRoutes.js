const router = require("express").Router();
const { Book, User } = require("../../../models");
const withAuth = require("../../../utils/auth");

// GET all books by current logged in user /api/books/
router.get("/", withAuth, async (req, res) => {
	try {
		const bookData = await Book.findAll({
			include: [{ model: User }],
			where: {
				user_id: req.session.user_id,
			},
		});
		res.status(200).json(bookData);
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});

// GET all books /api/books/
router.get("/getall", async (req, res) => {
	// Get all books from the book table
	try {
		const bookData = await Book.findAll();
		// 	{
		// 	include: [{ model: User }],
		// }
		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET a single book
router.get("/:id", async (req, res) => {
	// Find a single book by its id
	try {
		const bookData = await Book.findByPk(req.params.id, {
			include: [{ model: User }],
		});

		if (!bookData) {
			res.status(404).json({ message: "No book found with that id!" });
			return;
		}

		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET all paperback books
router.get("/paperbacks", async (req, res) => {
	try {
		const bookData = await Book.findAll({
			// Order by title in ascending order
			order: ["title"],
			include: [{ model: User }],
			where: {
				// Only get books that have this boolean set to TRUE
				is_paperback: true,
			},
			attributes: {
				// Don't include these fields in the returned data
				exclude: ["is_paperback", "edition"],
			},
		});

		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET a book
router.get("/:isbn", async (req, res) => {
	// Get one book from the book table
	try {
		const bookData = await Book.findOne({
			// Gets the book based on the isbn given in the request parameters
			where: {
				isbn: req.params.isbn,
			},
			include: [{ model: User }],
		});

		if (!bookData) {
			res.status(404).json({ message: "No book found with that id!" });
			return;
		}

		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// CREATE a book
router.post("/", withAuth, async (req, res) => {
	try {
		const newBook = await Book.create({
			title: req.body.title,
			author: req.body.author,
			isbn: req.body.isbn,
			pages: req.body.pages,
			edition: req.body.edition,
			publish_date: req.body.publish_date,
			is_read: req.body.is_read,
			user_id: req.session.user_id, // add user ID from session
		});
		res.status(200).json(newBook);
	} catch (err) {
		res.status(400).json(err);
	}
});

// PUT update a book
router.put("/:id", withAuth, async (req, res) => {
	try {
		const bookData = await Book.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!bookData[0]) {
			res.status(404).json({ message: "No book with this id!" });
			return;
		}
		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE a book
router.delete("/:id", async (req, res) => {
	try {
		const bookData = await Book.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!bookData) {
			res.status(404).json({ message: "No book found with that id!" });
			return;
		}

		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

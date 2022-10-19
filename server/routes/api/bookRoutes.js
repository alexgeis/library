const router = require("express").Router();
const { Book, User } = require("../../models");
// Import the model
const Book = require("../../models/Book");

// GET all books
router.get("/", async (req, res) => {
	// Get all books from the book table
	try {
		const bookData = await Book.findAll({
			include: [{ model: User }],
		});
		res.status(200).json(bookData);
	} catch (err) {
		res.status(500).json(err);
	}
});
// GET a single book
router.get("/:id", (req, res) => {
	// Find a single book by its primary key (book_id)
	Book.findByPk(req.params.id).then((bookData) => {
		res.json(bookData);
	});
});

// GET all paperback books
router.get("/paperbacks", (req, res) => {
	Book.findAll({
		// Order by title in ascending order
		order: ["title"],
		where: {
			// Only get books that have this boolean set to TRUE
			is_paperback: true,
		},
		attributes: {
			// Don't include these fields in the returned data
			exclude: ["is_paperback", "edition"],
		},
	}).then((bookData) => {
		res.json(bookData);
	});
});

// GET a book
router.get("/:isbn", (req, res) => {
	// Get one book from the book table
	Book.findOne({
		// Gets the book based on the isbn given in the request parameters
		where: {
			isbn: req.params.isbn,
		},
	}).then((bookData) => {
		res.json(bookData);
	});
});

// CREATE a book
router.post("/", (req, res) => {
	// Use Sequelize's `create()` method to add a row to the table
	// Similar to `INSERT INTO` in plain SQL

	//model creates our tables, but it's also how we're going to interact w/ our DB table
	//passed object corresponds to fields associated with books table - not all fields required (current constraints allow NULL)
	Book.create({
		title: req.body.title,
		author: req.body.author,
		is_paperback: true,
	})
		.then((newBook) => {
			// Send the newly created row as a JSON object
			res.json(newBook);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;

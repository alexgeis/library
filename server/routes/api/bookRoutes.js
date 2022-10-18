const router = require("express").Router();

// Import the model
const Book = require("../../models/Book");

// GET all books
router.get("/", (req, res) => {
	// Get all books from the book table
	Book.findAll().then((bookData) => {
		res.json(bookData);
	});
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
//http://localhost:3001/api/books
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

// CREATE multiple books
//http://localhost:3001/api/books/seed
router.post("/seed", (req, res) => {
	// Multiple rows can be created with `bulkCreate()` and an array
	// This could also be moved to a separate Node.js script to ensure it only happens once
	Book.bulkCreate([
		{
			title: "Make It Stick: The Science of Successful Learning",
			author: "Peter Brown",
			isbn: "978-0674729018",
			pages: 336,
			edition: 1,
			is_paperback: false,
		},
		{
			title:
				"Essential Scrum: A Practical Guide to the Most Popular Agile Process",
			author: "Kenneth Rubin",
			isbn: "978-0137043293",
			pages: 500,
			edition: 1,
			is_paperback: true,
		},
		{
			title: "The Pragmatic Programmer: Your Journey To Mastery",
			author: "David Thomas",
			isbn: "978-0135957059",
			pages: 352,
			edition: 2,
			is_paperback: false,
		},
		{
			title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
			author: "Donald Knuth",
			isbn: "978-0201896831",
			pages: 672,
			edition: 3,
			is_paperback: false,
		},
		{
			title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
			author: "Safiya Umoja Noble",
			isbn: "978-1479837243",
			pages: 256,
			edition: 1,
			is_paperback: true,
		},
	])
		.then(() => {
			res.send("Database seeded!");
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;

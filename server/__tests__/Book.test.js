const sequelize = require("../config/connection");
const Book = require("../models/Book");

test("Checks for null values", async () => {
	const book1 = {};

	const book2 = {
		title: "Gravity's Rainbow",
		author: "Thomas Pynchon",
		isbn: "9780099533214",
		pages: "760",
		edition: "1",
		publish_date: "1973",
		is_read: "true",
	};

	const newBook1 = Book.build(book1);
	const newBook2 = Book.build(book2);

	await expect(newBook1.validate()).rejects.toThrow("notNull");
	await expect(newBook2.validate()).resolves.not.toThrow();
});

test("Checks for book title and book author (required fields)", async () => {
	const book1 = {
		isbn: "9780099533934",
		pages: "593",
		edition: "3",
		publish_date: "1979",
		is_read: "false",
	};

	const book2 = {
		title: "Gravity's Rainbow",
		author: "Thomas Pynchon",
		isbn: "9780099533214",
		pages: "760",
		edition: "1",
		publish_date: "1973",
		is_read: "true",
	};

	const newBook1 = Book.build(book1);
	const newBook2 = Book.build(book2);

	await expect(newBook1.validate()).rejects.toThrow(
		"Validation - book title and author required"
	);
	await expect(newBook2.validate()).resolves.not.toThrow();
});

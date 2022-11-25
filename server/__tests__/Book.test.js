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

test("Checks for short passwords", async () => {
	const user1 = {
		username: "test",
		email: "test@test.com",
		password: "123",
	};

	const user2 = {
		username: "test",
		email: "test@test.com",
		password: "password123",
	};

	const newUser1 = User.build(user1);
	const newUser2 = User.build(user2);

	await expect(newUser1.validate()).rejects.toThrow(
		"Validation len on password failed"
	);
	await expect(newUser2.validate()).resolves.not.toThrow();
});

test("Checks for alphanumeric username", async () => {
	const user1 = {
		username: "test_123",
		email: "test@test.com",
		password: "123",
	};

	const user2 = {
		username: "test",
		email: "test@test.com",
		password: "password123",
	};

	const newUser1 = User.build(user1);
	const newUser2 = User.build(user2);

	await expect(newUser1.validate()).rejects.toThrow(
		"Validation isAlphanumeric on username failed"
	);
	await expect(newUser2.validate()).resolves.not.toThrow();
});

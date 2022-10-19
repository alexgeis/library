const Book = require("./Book");
const User = require("./User");

//1 to many relationships
// Define a User as having many Books, thus creating a foreign key in the `book` table
User.hasMany(Book, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

// The association can also be created from the Book side
Book.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = { User, Book };

const sequelize = require("../config/connection");
const { User, Book } = require("../models");

const userSeedData = require("./userSeedData.json");

const bookSeedData = require("./bookSeedData.json");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userSeedData);

	// // one to one relationship example
	// for (const { id } of users) {
	// 	// Need to include a valid driver_id when creating a license
	// 	const newLicense = await License.create({
	// 		driver_id: id,
	// 	});
	// }

	// one to many
	for (const book of bookSeedData) {
		const newBook = await Book.create({
			...book,
			// Attach a random user ID to each book
			user_id: users[Math.floor(Math.random() * users.length)].id,
		});
	}

	process.exit(0);
};

seedDatabase();

const sequelize = require("../config/connection");
const { User, Book } = require("../models");

const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userSeedData);

	for (const { id } of users) {
		// Need to include a valid driver_id when creating a license
		const newLicense = await License.create({
			driver_id: id,
		});
	}

	process.exit(0);
};

seedDatabase();

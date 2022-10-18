const sequelize = require("../config/connection");
const { User, Book } = require("../models");

const seedData = require("./seedData.json");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const drivers = await Driver.bulkCreate(seedData);

	for (const { id } of drivers) {
		// Need to include a valid driver_id when creating a license
		const newLicense = await License.create({
			driver_id: id,
		});
	}

	process.exit(0);
};

seedDatabase();

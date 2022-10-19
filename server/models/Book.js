const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isbn: {
			type: DataTypes.STRING,
		},
		pages: {
			type: DataTypes.INTEGER,
		},
		edition: {
			type: DataTypes.INTEGER,
		},
		is_paperback: {
			type: DataTypes.BOOLEAN,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "book",
	}
);

module.exports = Book;

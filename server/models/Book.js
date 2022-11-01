const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
			defaultValue: 1,
		},
		publish_date: {
			type: DataTypes.INTEGER,
		},
		is_read: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		insertion_date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
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

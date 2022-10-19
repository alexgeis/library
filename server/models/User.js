const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			// will only allow alphanumeric characters
			validate: {
				isAlphanumeric: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		hooks: {
			beforeCreate: async (newUserData) => {
				try {
					newReader.password = await bcrypt.hash(newReader.password, 10);
					return newReader;
				} catch (err) {
					console.log(err);
					return err;
				}
			},
			beforeUpdate: async (updatedUserData) => {
				try {
					if (updatedUserData.password) {
						updatedUserData.password = await bcrypt.hash(
							updatedUserData.password,
							10
						);
					}
					return updatedReader;
				} catch (err) {
					console.log(err);
					return err;
				}
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);

module.exports = User;

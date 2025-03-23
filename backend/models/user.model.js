module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM("System Administrator", "Normal User", "Store Owner"), defaultValue: "Normal User" }
  });
  return User;
};

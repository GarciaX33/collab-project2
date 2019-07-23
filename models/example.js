module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    description: DataTypes.TEXT
  });
  return Example;
};

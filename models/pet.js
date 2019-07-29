module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      petName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      breed: DataTypes.STRING,
      age: DataTypes.INTEGER,
      ownerName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [10, 10]
          }
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
      }
    });



    return Pet;
  };
module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      checkInDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
      },
      checkOutDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
      }
      
      
    });

    Reservation.associate = function(models) {
        // We're saying that a reservation should belong to an pet
        // A reservation can't be created without a pet due to the foreign key constraint
        Reservation.belongsTo(models.Pet, {
          foreignKey: {
            allowNull: false
          }
        });
      };
      
    return Reservation;
  };
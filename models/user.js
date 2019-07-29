module.exports = function(sequelize, DataTypes) {
 
    var User = sequelize.define('user', {
 
        username: {

            type: DataTypes.STRING

        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 

    User.associate = function(models) {
        // Associating pet with reservations
        // When a pet is deleted, also delete any associated reservations
        User.hasMany(models.Pet, {
          onDelete: "cascade"
        });
      };


    return User;
 
}
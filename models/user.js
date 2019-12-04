// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
 // const newLocal = Sequelize.NOW;
  var User = sequelize.define("User", {

    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      isUnique:true,
      allowNull: true
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    position: {
      type: DataTypes.STRING,
      isUnique: false,
      allowNull: true
    },

    start_date: {
      type: DataTypes.DATE,
      isUnique: false,
      allowNull:true,
      defaultValue: '2010-01-01'
    },


    ind_start_date: {
      type: DataTypes.DATE,
      isUnique: false,
      allowNull:true,
      defaultValue: '2010-01-01'
    },

    

    school: {
      type: DataTypes.STRING,
      isUnique: false,
      allowNull: true
    },

    degree: {
      type: DataTypes.STRING,
      isUnique: false,
      allowNull: true
    },

    certifications: {
      type: DataTypes.STRING,
      isUnique: false,
      allowNull: true
    }, 

    photo: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: true
    }
  });

  
  User.associate = function(models) {
    // Associating Member with Posts
    // When an Member is deleted, also delete any associated Posts
    User.hasMany(models.Report, {
      onDelete: "cascade"
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};

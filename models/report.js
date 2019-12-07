
// Creating our Report model
module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define("Report", {

    proj_name: {
      type: DataTypes.STRING
    },
    proj_address: {
      type: DataTypes.STRING
    },
    proj_city: {
      type: DataTypes.STRING
    },
    proj_county: {
      type: DataTypes.STRING
    },
    proj_state: {
      type: DataTypes.STRING
    },

    proj_desc: {
      type: DataTypes.TEXT
    },
    bldg_size: {
      type: DataTypes.INTEGER
    },
    proj_mgr: {
      type: DataTypes.STRING
    },
    proj_sup: {
      type: DataTypes.STRING
    },
    architect: {
      type: DataTypes.STRING
    },
    civil_eng: {
      type: DataTypes.STRING
    },
    mech_eng: {
      type: DataTypes.STRING
    },
    elec_eng: {
      type: DataTypes.STRING
    },
    plumb_eng: {
      type: DataTypes.STRING
    },
    land_arch: {
      type: DataTypes.STRING
    },
    int_design: {
      type: DataTypes.STRING
    },
    
    sched_start: {
      type: DataTypes.DATEONLY
    },
    sched_compl: {
      type: DataTypes.DATEONLY
    },
    actual_start: {
      type: DataTypes.DATEONLY
    },
    actual_compl: {
      type: DataTypes.DATEONLY
    },
    sched_reason: {
      type: DataTypes.TEXT
    },
    bldg_size: {
      type: DataTypes.INTEGER
    },
    init_budget: {
        type: DataTypes.INTEGER
    },
    final_budget: {
      type: DataTypes.INTEGER
    },
    budget_reason: {
      type: DataTypes.TEXT
    },
    
    sector: {
      type: DataTypes.TEXT
    },
    const_type: {
      type: DataTypes.TEXT
    },
   
    awards: {
      type: DataTypes.STRING
    },
    proj_challenges: {
      type: DataTypes.TEXT
    },
    proj_strengths: {
      type: DataTypes.TEXT
    }
    
  });

  
  Report.associate = function(models) {
    // We're saying that a Report should belong to a User
    // A Report can't be created without a User due to the foreign key constraint
    Report.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  
  return Report;
};

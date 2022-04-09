'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerModel = sequelize.define('customerModel', {
    Name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    userid: DataTypes.STRING,
    gender: DataTypes.STRING,
    activated:{
       type:DataTypes.BOOLEAN,
       default :false
    },
  }, {});
  customerModel.associate = function(models) {
    // associations can be defined here
     models.customerModel.hasMany(models.refreshSchema, { foreignKey: 'custId' });  
     models.customerModel.hasMany(models.Address, { foreignKey: 'custId' });  
    models.customerModel.hasMany(models.payment, { foreignKey: 'custId' });  

  };
  return customerModel;
};
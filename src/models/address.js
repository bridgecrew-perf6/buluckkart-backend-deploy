
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    orderId: DataTypes.INTEGER,
    custId: DataTypes.INTEGER,
    house: DataTypes.STRING,
    landmark: DataTypes.STRING,
    street: DataTypes.STRING,
    discrict: DataTypes.STRING,
    city: DataTypes.STRING,
    states: DataTypes.STRING,
    area: DataTypes.STRING,
    shipping: DataTypes.TEXT,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    models.Address.belongsTo(models.Order, { foreignKey: 'orderId' });  
    models.Address.hasMany(models.Cart, { foreignKey: 'addressId' });  
    models.Address.belongsTo(models.customerModel, { foreignKey: 'custId' });      
  };
  return Address;
};



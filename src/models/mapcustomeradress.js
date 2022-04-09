'use strict';
module.exports = (sequelize, DataTypes) => {
  const mapcustomeradress = sequelize.define('mapcustomeradress', {
    custId: DataTypes.INTEGER,
    addressType : DataTypes.STRING,
    house:DataTypes.STRING,
    street: DataTypes.STRING,
    landmark: DataTypes.STRING,
    area: DataTypes.STRING,
    city: DataTypes.STRING,
    discrict: DataTypes.STRING,
    states : DataTypes.STRING,
    pincode :DataTypes.INTEGER,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  mapcustomeradress.associate = function(models) {
    // associations can be defined here
  };
  return mapcustomeradress;
};
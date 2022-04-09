'use strict';
module.exports = (sequelize, DataTypes) => {
  const texStaticSettings = sequelize.define('texStaticSettings', {
    EnambleTex: DataTypes.BOOLEAN,
    GSTNumber : DataTypes.STRING,
    GSTState  : DataTypes.STRING,
    AllowCustomerGST:DataTypes.STRING,
    ApplyDiscountOnOrder: DataTypes.STRING,
    SetTax :DataTypes.STRING,
    fixChargeId :DataTypes.INTEGER


  }, {});
  texStaticSettings.associate = function(models) {
    // associations can be defined here
       models.texStaticSettings.belongsTo(models.texDynamicSettings, { foreignKey: 'fixChargeId' });
  };
  return texStaticSettings;
};
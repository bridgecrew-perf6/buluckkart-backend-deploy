'use strict';
module.exports = (sequelize, DataTypes) => {
  const texDynamicSettings = sequelize.define('texDynamicSettings', {
    Sort:DataTypes.INTEGER,
    FixedChargeLabel:DataTypes.STRING,
    FixedChargeAmount:DataTypes.INTEGER
  }, {});
  texDynamicSettings.associate = function(models) {
    // associations can be defined here
       models.texDynamicSettings.hasMany(models.texStaticSettings, { foreignKey: 'fixChargeId' });
  };
  return texDynamicSettings;
};
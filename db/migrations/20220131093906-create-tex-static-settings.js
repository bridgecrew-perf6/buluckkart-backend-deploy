'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('texStaticSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EnambleTex: {
        type:Sequelize.BOOLEAN
      },
      GSTNumber : {
        type:Sequelize.STRING
      },
      GSTState  : {
        type:Sequelize.STRING
      },
      AllowCustomerGST:{
        type:Sequelize.STRING
      },
      ApplyDiscountOnOrder: {
        type:Sequelize.STRING
      },
      SetTax :{
        type:Sequelize.STRING
      },
      fixChargeId :{
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('texStaticSettings');
  }
};
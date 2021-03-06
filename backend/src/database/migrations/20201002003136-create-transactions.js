'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tipotransacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      criptoqtd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtdreais: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dadosrecebedor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};
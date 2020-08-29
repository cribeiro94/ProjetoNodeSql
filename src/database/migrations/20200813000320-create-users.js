'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomecliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpfcliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpjcliente: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      razaosocial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endcliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telcliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bancocliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroconta: {
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
    return queryInterface.dropTable('users');
  }
};
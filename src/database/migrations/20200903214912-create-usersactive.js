'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
     'users',
     'ativo',
      { 
        type: Sequelize.BOOLEAN,
      },
    );
 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'ativo',
     );
  }
};

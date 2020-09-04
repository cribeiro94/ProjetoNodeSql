'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
     'users',
     'password',
      { 
        type: Sequelize.INTEGER,
      },
    );
 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'password',
     );
  }
};

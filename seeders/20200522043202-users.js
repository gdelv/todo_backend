'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'gman',
      email: "test@email.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'elias',
    email: "elias@email.com",
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});

  }
};

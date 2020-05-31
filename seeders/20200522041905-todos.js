'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'Clean Room',
      completed: true,
      userId: 1,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Wash Dishes',
      completed: false,
      userId: 2,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Water Lawn',
      completed: false,
      userId: 1,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'Clean Room',
      completed: true,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Wash Dishes',
      completed: false,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Water Lawn',
      completed: false,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
  }
};

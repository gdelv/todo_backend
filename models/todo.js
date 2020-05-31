'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Todo;
};
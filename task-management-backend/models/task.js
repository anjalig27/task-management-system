'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
// ...
const withPagination = require('sequelize-cursor-pagination');

const Counter = sequelize.define('counter', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  value: Sequelize.INTEGER,
});

const options = {
  methodName: 'paginate',
  primaryKeyField: 'id',
};

withPagination(options)(Counter);

import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';

const Class = sequelize.define('Class', {
  class_id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  module_id: {
    type: DataTypes.STRING(36),
    references: { model: 'Module', key: 'module_id' },
  },
  class_date: {
    type: DataTypes.DATE,
  },
  start_time: {
    type: DataTypes.TIME,
  },
  end_time: {
    type: DataTypes.TIME,
  },
  lecturer_id: {
    type: DataTypes.STRING(20),
    references: { model: 'Lecture', key: 'staff_id' },
  },
}, {
  tableName: 'class',
  timestamps: false,
});

export default Class;

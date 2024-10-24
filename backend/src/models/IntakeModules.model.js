import { DataTypes } from 'sequelize';
import sequelize from '../common/sequelize/connect.sequelize.js';

const IntakeModules = sequelize.define('ProgramModules', {
  course_id: {
    type: DataTypes.STRING(20),
    references: { model: 'Program', key: 'program_id' },
    primaryKey: true,
  },
  module_id: {
    type: DataTypes.STRING(36),
    references: { model: 'Module', key: 'module_id' },
    primaryKey: true,
  },
  sem_id: {
    type: DataTypes.STRING(36),
    references: { model: 'Semester', key: 'sem_id' },
    primaryKey: true,
  },
  intake: {
    type: DataTypes.DATE,
    references: { model: 'Intake', key: 'year' },
    allowNull: false,
  },
}, {
  tableName: 'program_modules',
  timestamps: false,
});

export default IntakeModules;

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('attendance', {
      attendance_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.STRING(20),
        references: {
          model: 'student',  // Name of the referenced table
          key: 'student_id'  // Key in the referenced table
        },
        onUpdate: 'CASCADE', // Optional: what to do on update
        onDelete: 'SET NULL', // Optional: what to do on delete
      },
      intake_module_id: {
        type: Sequelize.STRING(36),
        references: {
          model: 'intake_module',
          key: 'intake_module_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      class_id: {
        type: Sequelize.STRING(36),
        references: {
          model: 'class',
          key: 'class_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      class_date: {
        type: Sequelize.DATE,
      },
      attendance_status: {
        type: Sequelize.STRING(10),
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('attendance');
  }
};
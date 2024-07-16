'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Absens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jamMasuk: {
        type: Sequelize.DATE
      },
      fotoMasuk: {
        type: Sequelize.STRING
      },
      latMasuk: {
        type: Sequelize.STRING
      },
      langMasuk: {
        type: Sequelize.STRING
      },
      jamKeluar: {
        type: Sequelize.STRING
      },
      fotoKeluar: {
        type: Sequelize.STRING
      },
      fotoKeluar: {
        type: Sequelize.STRING
      },
      latKeluar: {
        type: Sequelize.STRING
      },
      langKeluar: {
        type: Sequelize.STRING
      },
      pegawaiId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pegawais",
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Absens');
  }
};
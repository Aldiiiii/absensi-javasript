'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pegawais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nip: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      tmpLahir: {
        type: Sequelize.STRING
      },
      tglLahir: {
        type: Sequelize.DATE
      },
      alamat: {
        type: Sequelize.TEXT
      },
      telepon: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      pendidikan: {
        type: Sequelize.STRING
      },
      tglMulaiKerja: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      noSpk: {
        type: Sequelize.STRING
      },
      tte: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
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
    await queryInterface.dropTable('Pegawais');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kegiatans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jamKegiatan: {
        type: Sequelize.DATE
      },
      detailKegiatan: {
        type: Sequelize.TEXT
      },
      kategoriKegiatanId: {
        type: Sequelize.INTEGER,
        references: {
          model: "KategoriKegiatans",
          key: "id"
        }
      },
      absenId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Absens",
          key: "id"
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
    await queryInterface.dropTable('Kegiatans');
  }
};
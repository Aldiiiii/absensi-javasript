'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
    {
      role: 'Admin'
    },
    {
      role: 'Subkordinator'
    },
    {
      role: 'Pegawai'
    }
   ]
   data.forEach(el => {
    el.createdAt = el.updatedAt = new Date()
   })

    await queryInterface.bulkInsert('Roles', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {})
  }
};

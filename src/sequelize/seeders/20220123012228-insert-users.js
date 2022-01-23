module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Elliot Alderson',
        phone: '1(877)300-7374',
        email: 'mrrobot@ecorp.us',
        cpf: '752.787.376-03',
        profile_id: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Yudi Tamashiro',
        phone: '4002-8922',
        email: 'yudihipehop@gmail.com',
        cpf: '820.233.956-15',
        profile_id: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);

  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

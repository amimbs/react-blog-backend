'use strict';
const { faker } = require('@faker-js/faker')

module.exports = {
  async up(queryInterface, Sequelize) {
    // npx sequelize-cli db:seed:all

    let blogPosts = [];
    for (let i = 0; i < 50; i++) {
      blogPosts.push({
        title: faker.hacker.phrase(),
        body: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('Blog_Posts', blogPosts)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

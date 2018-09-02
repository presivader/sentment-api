/**
 * Tweet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 const Promise = require('bluebird');

module.exports = {

  attributes: {

  },

  async saveBatch(tweets) {
    Promise.map(tweets.statuses, async (tweet) => {
      return await Tweet.create(tweet);
    }).then( (created) => {
      sails.log.info(`${created.length} tweets adicionados ao cache do banco de dados.`);
    })
  }
};

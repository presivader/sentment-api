/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  twitterApi: {
    consumer_key: 'qbX4SNnQxFPZQyLWWuNM7Caaq',
    consumer_secret: 'IKdCej6CzSY0bgJctPLv0Ukf8TgxJ5hM2zYpyYg1sLO4NILnqm',
    access_token_key: '42305202-EGpLIdrLySIqtKIfVGZLgcbs6CojxUSZEvJpUnc71',
    access_token_secret: '8bGu1eI3ncprosk8Xl8dzQUXXGmhGAj6dVnrIYADSeNIO'
  }
};

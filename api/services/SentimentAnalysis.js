var Twitter = require('twitter');
const _ = require('lodash');
var sentiment = require('sentiment-ptbr');
const cTable = require('console.table');

var client = new Twitter(sails.config.twitterApi);


module.exports = {

  getAnalysisData(tag) {
    let tweetsArray = [];

    client.get('search/tweets', {q: tag}, (error, tweets, response) => {

      if(error) {
          return Promise.reject(error);
      }

      Tweet.saveBatch(tweets);

      _.forEach(tweets.statuses, (tweet) => {
        let analysis = sentiment(tweet.text, {
          '#OBrasilFelizdeNovo': 5,
        });
        tweetsArray.push([tweet.text, tweet.user.location, tweet.retweet_count, analysis.score]);

        Sentment.create({
          text: tweet.text,
          location: tweet.user.location,
          retweet_count: tweet.retweet_count,
          score: analysis.score
        }).exec(function () {});

      });

      console.table(['Tweet', 'Local', 'Retweets', 'Score'], tweetsArray);

      return Promise.resolve(tweetsArray);
    });
  }
}

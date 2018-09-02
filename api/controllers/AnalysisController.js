/**
 * AnalysisController
 *
 * @description :: Server-side logic for managing analyses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	async find (req, res) {
		let tag = req.params.id;
		if(!tag) return res.badRequest('Tag inválida.');

		sails.log.info('Start search for ', tag);

		try {
			let response = await SentimentAnalysis.getAnalysisData(tag);

			return res.ok(`Ok, processando a tag ${tag}`);

		} catch(err) {
			return res.badRequest(err);
		}

	}
};

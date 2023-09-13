const Id = require("../../adapters/Id");
const buildMakeGuide = require("./guid");

const makeGuide = buildMakeGuide({ Id });

module.exports = makeGuide;

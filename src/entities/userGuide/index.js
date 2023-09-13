const Id = require("../../adapters/Id");
const buildMakeUserGuide = require("./userGuide");

const makeUserGuide = buildMakeUserGuide({ Id });

module.exports = makeUserGuide;

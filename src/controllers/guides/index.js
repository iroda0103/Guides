const {
  addGuide,
  listGuide,
  showGuide,
  removeGuide,
  editGuide,
} = require("../../use-cases/guides");

const makePostGuide = require("./postGuide");
const makeGetGuides = require("./getGuides");
const makePatchGuide = require("./patchGuide");
const makeGetGuide = require("./getGuide");
const makeDeleteGuide = require("./deleteGuide");

const postGuide = makePostGuide({ addGuide });
const getGuides = makeGetGuides({ listGuide });
const patchGuide = makePatchGuide({ editGuide });
const getGuide = makeGetGuide({ showGuide });
const deleteGuide = makeDeleteGuide({ removeGuide });

const guideController = Object.freeze({
  postGuide,
  getGuides,
  patchGuide,
  getGuide,
  deleteGuide,
});

module.exports = guideController;

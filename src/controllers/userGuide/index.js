const {
  addUserGuide,
  listUserGuide,
  readUserGuide,
} = require("../../use-cases/userGuides");

const makePostUserGuide = require("./postUserGuide");
const makeListUserGuide = require("./getUserGuides");
const makePostReadUserGuides = require("./postReadUserGuide");

const postUserGuide = makePostUserGuide({ addUserGuide });
const getUserGuides = makeListUserGuide({ listUserGuide });
const postReadUserGuide = makePostReadUserGuides({ readUserGuide });

const userGuideController = Object.freeze({
  postUserGuide,
  getUserGuides,
  postReadUserGuide,
});

module.exports = userGuideController;

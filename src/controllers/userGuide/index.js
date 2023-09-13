const {
  addUserGuide,
  listUserGuide,
  readUserGuide,
  bulkUserGuide
} = require("../../use-cases/userGuides");

const makePostUserGuide = require("./postUserGuide");
const makeListUserGuide = require("./getUserGuides");
const makePostReadUserGuides = require("./postReadUserGuide");
const makePostBulkUserGuide = require("./postBulkUserGuide");

const postUserGuide = makePostUserGuide({ addUserGuide });
const getUserGuides = makeListUserGuide({ listUserGuide });
const postReadUserGuide = makePostReadUserGuides({ readUserGuide });
const postBulkUserGuide = makePostBulkUserGuide({ bulkUserGuide });

const userGuideController = Object.freeze({
  postUserGuide,
  getUserGuides,
  postReadUserGuide,
  postBulkUserGuide
});

module.exports = userGuideController;

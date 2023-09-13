const userGuideDb = require("../../data-access/userGuidesDb");
const userDb = require("../../data-access/usersDb");
const guideDb = require("../../data-access/guidesDb");
const makeAddUserGuide = require("./addUserGuide");
const makeListUserGuide = require("./listUserGuide");
const makeReadUserGuide = require("./readUserGuide");
const makeBulkUserGuide = require("./postBulk");

const addUserGuide = makeAddUserGuide({ userGuideDb, userDb, guideDb });
const bulkUserGuide = makeBulkUserGuide({ userGuideDb, userDb, guideDb });
const listUserGuide = makeListUserGuide({ userGuideDb });
const readUserGuide = makeReadUserGuide({ userGuideDb });

const guideUseCases = Object.freeze({
  addUserGuide,
  listUserGuide,
  readUserGuide,
  bulkUserGuide
});

module.exports = guideUseCases;

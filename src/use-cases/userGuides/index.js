const userGuideDb = require("../../data-access/userGuidesDb");
const userDb = require("../../data-access/usersDb");
const guideDb = require("../../data-access/guidesDb");
const makeAddUserGuide = require("./addUserGuide");
const makeListUserGuide = require("./listUserGuide");

const addUserGuide = makeAddUserGuide({ userGuideDb, userDb, guideDb });
const listUserGuide = makeListUserGuide({ userGuideDb });

const guideUseCases = Object.freeze({
  addUserGuide,
  listUserGuide,
});

module.exports = guideUseCases;

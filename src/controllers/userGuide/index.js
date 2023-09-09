const { addUserGuide,listUserGuide } = require("../../use-cases/userGuides");

const makePostUserGuide = require("./postUserGuide");
const makeListUserGuide=require('./getUserGuides')

const postUserGuide = makePostUserGuide({ addUserGuide });
const getUserGuides=makeListUserGuide({listUserGuide})

const userGuideController = Object.freeze({
  postUserGuide,
  getUserGuides
});

module.exports = userGuideController;

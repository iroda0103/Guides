const guideDb = require("../../data-access/guidesDb");
const makeAddGuide = require("./addGuide");
const makeListGuide = require("./listGuide");
const makeShowGuide = require("./showGuide");
const makeRemoveGuide = require("./removeGuide");
const makeEditGuide=require('./editGuide')

const addGuide = makeAddGuide({ guideDb });
const listGuide = makeListGuide({ guideDb });
const showGuide = makeShowGuide({ guideDb });
const removeGuide = makeRemoveGuide({ guideDb });
const editGuide=makeEditGuide({guideDb})

const guideUseCases = Object.freeze({
  addGuide,
  listGuide,
  showGuide,
  removeGuide,
  editGuide
});

module.exports = guideUseCases;

const db = require("../../index.js");
const userModel = require("../models/userModel");
const guideModel = require("../models/guideModel.js");

// data
const usersSeed = require("./user-seed");
const guidesSeed = require("./guide-seed.js");

(async () => {
  await db.connect();

  const users = await usersSeed();
  const guides = await guidesSeed();

  await userModel.create(users);
  await guideModel.create(guides);

  console.log("SEED COMPLETED");
})().catch((err) => {
  console.log("SEED ERROR: ", err);
});

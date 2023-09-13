const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postUserGuide = expressCb(controllers.postUserGuide, {
  checkLogin: true,checkRoles: ["admin"]
});
const getUserGuides = expressCb(controllers.getUserGuides, {
  checkLogin: true
});
const postReadUserGuide = expressCb(controllers.postReadUserGuide, {
  checkLogin: true
});
const postBulkUserGuide = expressCb(controllers.postBulkUserGuide, {
  checkRoles: ["admin"]
});

const router = express.Router();

router.post("/user_guides", postUserGuide);
router.get("/user_guides", getUserGuides);
router.post("/user_guides/:id/read", postReadUserGuide);
router.post("/user_guides/bulk", postBulkUserGuide);

module.exports = router;

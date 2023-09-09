const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postUserGuide = expressCb(controllers.postUserGuide);
const getUserGuides = expressCb(controllers.getUserGuides);
const postReadUserGuide = expressCb(controllers.postReadUserGuide);

const router = express.Router();

router.post("/user_guides", postUserGuide);
router.get("/user_guides", getUserGuides);
router.post("/user_guides/:id/read", postReadUserGuide);

module.exports = router;

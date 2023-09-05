const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postGuide = expressCb(controllers.postGuide);
const getGuides = expressCb(controllers.getGuides);
const getGuide = expressCb(controllers.getGuide);
const deleteGuide = expressCb(controllers.deleteGuide);
const patchGuide = expressCb(controllers.patchGuide);

const router = express.Router();

router.post("/guides", postGuide);
router.get("/guides", getGuides);
router.get("/guides/:id", getGuide);
router.patch("/guides/:id", patchGuide);
router.delete("/guides/:id", deleteGuide);

module.exports = router;

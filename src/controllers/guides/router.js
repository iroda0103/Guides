const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postGuide = expressCb(controllers.postGuide, { checkRoles: ["admin"] });
const getGuides = expressCb(controllers.getGuides, { checkLogin: true });
const getGuide = expressCb(controllers.getGuide, { checkLogin: true });
const patchGuide = expressCb(controllers.patchGuide, { checkRoles: ["admin"] });
const deleteGuide = expressCb(controllers.deleteGuide, {
  checkRoles: ["admin"]
});

const router = express.Router();

router.post("/guides", postGuide);
router.get("/guides", getGuides);
router.get("/guides/:id", getGuide);
router.patch("/guides/:id", patchGuide);
router.delete("/guides/:id", deleteGuide);

module.exports = router;

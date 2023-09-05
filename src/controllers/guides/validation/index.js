const { postGuideSchema } = require("./postGuide");
const { patchGuideSchema } = require("./patchGuide");
const { getGuideSchema } = require("./getGuide");
const { deleteGuideSchema } = require("./deleteGuide");
const { getGuidesSchema } = require("./getGuides");

module.exports = {
  postGuideSchema,
  patchGuideSchema,
  getGuideSchema,
  deleteGuideSchema,
  getGuidesSchema,
};

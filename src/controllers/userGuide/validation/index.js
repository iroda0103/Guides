const { postUserGuideSchema } = require("./postUserGuide");
const { getUserGuidesSchema } = require("./getUserGuides");
const { postReadUserGuideSchema } = require("./postReadUserGuide");
const { postBulkUserGuideSchema } = require("./postBulkUserGuide");

module.exports = {
  postUserGuideSchema,
  getUserGuidesSchema,
  postReadUserGuideSchema,
  postBulkUserGuideSchema
};

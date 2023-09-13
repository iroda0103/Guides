const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { postBulkUserGuideSchema } = require("./validation");

module.exports = function makePostBulkUserGuide({ bulkUserGuide }) {
  return async function postBulkUserGuide(httpRequest) {
    try {
      const validator = httpValidator(
        { body: httpRequest.body },
        postBulkUserGuideSchema
      );
      const { error, body } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const body_new = body.user_ids.map((user_id) => {
        return { user_id, guide_id: body.guide_id };
      });

      const data = await bulkUserGuide(body_new);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201,
        body: { data }
      };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: mapErrorToStatus(e),
        body: {
          message: e.message
        }
      };
    }
  };
};

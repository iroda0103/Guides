const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { postReadUserGuideSchema } = require("./validation");

module.exports = function makePostReadUserGuides({ readUserGuide }) {
  return async function postReadUserGuides(httpRequest) {
    try {
      const validator = httpValidator(
        { params: httpRequest.params },
        postReadUserGuideSchema
      );
      const { error, params } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await readUserGuide({
        id: httpRequest.params.id,
        user: httpRequest.user.id,
        completed: true
      });
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { ...data }
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

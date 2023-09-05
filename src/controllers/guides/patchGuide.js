const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { patchGuideSchema } = require("./validation");

module.exports = function makePatchGuide({ editGuide }) {
  return async function patchGuide(httpRequest) {
    try {
      const validator = httpValidator(
        { body: httpRequest.body, params: httpRequest.params },
        patchGuideSchema
      );
      const { error, body, params } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await editGuide({ ...params, ...body });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { data },
      };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: mapErrorToStatus(e),
        body: {
          message: e.message,
        },
      };
    }
  };
};

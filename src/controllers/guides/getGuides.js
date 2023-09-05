const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { getGuidesSchema } = require("./validation");

module.exports = function makeGetGuides({ listGuide }) {
  return async function getGuides(httpRequest) {
    try {
      const validator = httpValidator(
        { query: httpRequest.query },
        getGuidesSchema
      );
      const { error, query } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await listGuide({ ...query });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { ...data },
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

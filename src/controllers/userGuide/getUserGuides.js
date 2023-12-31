const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { getUserGuidesSchema } = require("./validation");

module.exports = function makeGetUserGuides({ listUserGuide }) {
  return async function getUserGuides(httpRequest) {
    try {
      const validator = httpValidator(
        { query: httpRequest.query },
        getUserGuidesSchema
      );
      const { error, query } = await validator.validate();

      const queryFilters = query.filters ? query.filters : {};

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await listUserGuide({
        ...query,
        filters: { user_id: httpRequest.user.id, ...queryFilters }
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

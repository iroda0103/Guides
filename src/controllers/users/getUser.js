const httpValidator = require("../../shared/validator");
const { getUserSchema } = require("./validation");

module.exports = function makeGetUser({ showUser }) {
  return async function getUsers(httpRequest) {
    try {
      const validator = httpValidator(
        { params: httpRequest.params },
        getUserSchema
      );
      const { error, params } = await validator.validate();

      if (error) {
        throw new Error(error);
      }

      const result = await showUser({ ...params });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { ...result },
      };
    } catch (e) {
      console.log(e);
      let statusCode = 500;

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode,
        body: { message: e.message },
      };
    }
  };
};

const httpValidator = require("../../shared/validator");
const { getUsersSchema } = require("./validation");

module.exports = function makeGetUsers({ listUser }) {
  return async function getUsers(httpRequest) {
    try {
      const validator = httpValidator(
        { query: httpRequest.query },
        getUsersSchema
      );
      const {error,query}=await validator.validate()

      if(error){
        throw new Error(error)
      }

      const result=await listUser({...query})

      return {
        headers: {
            'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: { ...result },
    }
    } catch (e) {
      console.log(e);
      let statusCode = 500

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

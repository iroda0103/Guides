const model = require("./mongo/models/userModel");

const userDb = Object.freeze({
  insert,
});

async function insert({ id: _id, ...info }) {
  const result = await model.create({ _id, ...info });
  const { _id: id, res } = result;
  return { id, ...info };
}

module.exports = userDb;

const model = require("./mongo/models/userModel");
const UserGuide = require("./mongo/models/userGuideModel");

const userDb = Object.freeze({
  insert,
  findAll,
  findById,
  findOne,
  remove,
  update
});

async function insert({ id: _id, ...info }) {
  const result = await model.create({ _id, ...info });
  const { _id: id, res } = result;
  return { id, ...info };
}

async function findAll({ filters, q, page, sort }) {
  const filter = { ...filters };

  if (q) {
    filter.$or = [
      { first_name: { $regex: `.*${q}.*`, $options: "i" } },
      { last_name: { $regex: `.*${q}.*`, $options: "i" } },
      { username: { $regex: `.*${q}.*`, $options: "i" } }
    ];
  }

  let dbQuery = model.find(filter);

  const total = await dbQuery.clone().count().exec();

  if (page) {
    dbQuery.limit(page.limit).skip(page.offset);
  }

  if (sort) {
    dbQuery.sort({ [sort.by]: sort.order == "asc" ? 1 : -1 });
  }

  const result = await dbQuery.lean();

  const res = result.map((user) => {
    const { _id: id, ...info } = user;
    return { id, ...info };
  });

  return { data: res, total };
}

async function findById({ id: _id }) {
  const result = await model
    .findById({ _id })
    .populate("guides")
    .lean({ virtuals: true });

  if (!result) {
    return null;
  }

  const todo_guides = result.guides.filter((guide) => !guide.completed).length;
  const read_guides = result.guides.filter((guide) => guide.completed).length;

  const { _id: id, guides, ...info } = result;
  const total_guides = guides.length;

  return { id, ...info, total_guides, todo_guides, read_guides };
}

async function findOne(filter) {
  const result = await model.findOne(filter).lean();

  if (!result) {
    return null;
  }

  const { _id: id, ...info } = result;
  return { id, ...info };
}

async function remove({ id: _id }) {
  await UserGuide.deleteMany({ user_id: _id });
  return model.deleteOne({ _id }).lean();
}

async function update({ id: _id, ...data }) {
  const result = await model
    .findOneAndUpdate({ _id }, data, { new: true })
    .lean();
  const { _id: id, ...res } = result;

  return { id, ...res };
}

module.exports = userDb;

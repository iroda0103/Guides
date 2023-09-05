const model = require("./mongo/models/guideModel");

const guideDb = Object.freeze({
  insert,
  findAll,
  findById,
  findOne,
  remove,
  update,
});

async function insert({ id: _id, ...info }) {
  const result = await model.create({ _id, ...info });
  const { _id: id, res } = result;
  return { id, ...info };
}

async function findAll({ q, page, sort }) {
  const filter = {};

  if (q) {
    filter.title = { $regex: `.*${q}.*`, $options: "i" };
  }

  let dbQuery = model.find(filter).lean();

  const total = await dbQuery.clone().count().exec();

  if (page) {
    dbQuery.limit(page.limit).skip(page.offset);
  }

  if (sort) {
    dbQuery.sort({ [sort.by]: sort.order == "asc" ? 1 : -1 });
  }

  const result = await dbQuery;

  const res=result.map(guide=>{
    let {_id:id,...info}=guide
    return {id,...info}
  })

  return { data: res, total };
}

async function findById({ id: _id }) {
  const result = await model.findById({ _id }).lean();

  if (!result) {
    return null;
  }

  const { _id: id, ...info } = result;
  return { id, ...info };
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
  return model.deleteOne({ _id }).lean();
}

async function update({ id: _id, ...data }) {
  const result = await model
    .findOneAndUpdate({ _id }, data, { new: true })
    .lean();
  const { _id: id, ...res } = result;

  return { id, ...res };
}

module.exports = guideDb;

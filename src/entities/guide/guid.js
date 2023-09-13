const { InvalidPropertyError } = require("../../shared/errors");

module.exports = function buildMakeGuide({ Id }) {
  return function makeGuide({
    id = Id.makeId(),
    title,
    content,
    notify = false
  } = {}) {
    if (!title) {
      throw new InvalidPropertyError(
        "Tartib-qoidada yaroqli title bo'lishi shart."
      );
    }

    if (!content) {
      throw new InvalidPropertyError(
        "Tartib-qoidada yaroqli content bo'lishi shart."
      );
    }

    if (!id) {
      throw new InvalidPropertyError("Qoidada yaroqli id bo'lishi shart.");
    }

    return Object.freeze({
      getId: () => id,
      getTitle: () => title,
      getContent: () => content,
      getNotify: () => notify
    });
  };
};

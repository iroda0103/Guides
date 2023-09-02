module.exports = function buildMakeUser({ Id, Hash }) {
  return function makeUser({
    id = Id.makeId(),
    first_name,
    last_name,
    role,
    age,
    username,
    password,
  } = {}) {
    console.log(id, first_name, last_name, role, age, username, password);
    if (!id) {
      throw new Error("Foydalanuvchida yaroqli id bo'lishi shart.");
    }
    if (!role) {
      throw new Error("Foydalanuvchida yaroqli rol (role) bo'lishi shart.");
    }
    if (!["admin", "employee"].includes(role)) {
      throw new Error("Foydalanuvchida yaroqli role bo'lishi kk");
    }

    return Object.freeze({
      getId: () => id,
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getRole: () => role,
      getUsername: () => username,
      getPassword: () => password,
      getAge: () => age,
      hashPassword,
      comparePassword,
    });

    function hashPassword() {
      password = Hash.generate(password);
    }

    function comparePassword(plain) {
      return Hash.compare(plain, password);
    }
  };
};

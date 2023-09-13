const { hashSync } = require("bcryptjs");

module.exports = async () => [
  {
    first_name: "John",
    last_name: "Doe",
    role: "admin",
    age: 18,
    username: "admin01",
    password: hashSync("1234", 10)
  },
  {
    first_name: "James",
    last_name: "Bengtsson",
    role: "admin",
    age: 18,
    username: "admin02",
    password: hashSync("1234", 10)
  },
  {
    first_name: "Leona",
    last_name: "Vigne",
    role: "employee",
    age: 18,
    username: "employee",
    password: hashSync("1234", 10)
  }
];

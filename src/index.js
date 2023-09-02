const express = require("express");
const router = require("./controllers");
const { connect } = require("./data-access");

const app = express();

app.use(express.json());
app.use(router);

connect()
  .then(() => {
    console.log("Ma'lumotlar omboriga ulandi");
  })
  .catch((e) => {
    console.log("Ma'lumotlar omborida ulanishda xatolik.", e);
  });

app.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti");
});

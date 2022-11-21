const app = require("./app");

const dotenv = require("dotenv");
const connectedDatabase = require("./config/database");

//config

dotenv.config({ path: "config/config.env" });

//Connecting to database

connectedDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

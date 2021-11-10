const express = require("express");
const cors = require("cors");
const initializer = require("./src/helpers");
const user = require("./src/routes/user");
const app = express();

initializer();
app.use(cors());
app.use(express.json());
app.use("/api/users", user);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

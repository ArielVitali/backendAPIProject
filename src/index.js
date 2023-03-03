const express = require("express");
const router = require("./routes/router");

const app = express();

//middlewares
app.use(express.json());

router(app);

module.exports = app;

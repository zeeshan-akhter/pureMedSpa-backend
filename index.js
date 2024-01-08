require("./db/db.connect");
require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberRoutes = require("./routes/number.route");
const logAllRequestsMiddleWare = require("./middlewares/logger.middleware");

const app = express();
const { corsOptions } = require("./middlewares/cors.middleware");
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(logAllRequestsMiddleWare);
app.use("/numbers", numberRoutes);

app.get("/", (req, res) => {
  res.send("Hey! API is running....");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

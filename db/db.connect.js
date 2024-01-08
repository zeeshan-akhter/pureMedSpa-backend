const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch((error) => {
    console.error("MONGODB Connection error:", error);
  });

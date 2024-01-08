const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://pureMedSpa:m9rTN8ZWsfSdakSg@cluster0.wj8adqr.mongodb.net/?retryWrites=true&w=majority";

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

const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/users";
const connectToMongo = async () => {
  mongoose.connect(mongoURL);
};

module.exports = connectToMongo;

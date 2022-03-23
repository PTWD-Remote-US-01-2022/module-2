const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    nationality: String,
    birthday: String,
    pictureUrl: String
  },
  {
    timestamps: true
  }
);

// const Author = model("Author", authorSchema);
// module.exports = Author;
module.exports = model("Author", authorSchema);

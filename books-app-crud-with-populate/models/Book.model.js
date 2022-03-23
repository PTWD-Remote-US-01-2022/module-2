const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    // title: {type: String, unique: true},
    title: String,
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author"
    },
    rating: Number
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
  }
);

module.exports = model("Book", bookSchema);

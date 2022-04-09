const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Username is required."]
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email is required."],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      lowercase: true
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."]
    },
    profileImg: {
      type: String,
      default:"https://mpchsschool.in/wp-content/uploads/2019/10/default-profile-picture.png"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);

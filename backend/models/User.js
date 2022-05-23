const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

import ROLES from './Role'

const userSchema = mongoose.Schema({
   
    fullname: {
      type: String,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    rol: {
      type: String,
      enum : Object.keys(ROLES),
      default: ROLES.SALESMAN
    },
 
    cc: String,
    address: String,
    phone: String
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

userSchema.statics.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePass = async (password, receivedPass) => {
  return await bcrypt.compare(password, receivedPass);
};

export default mongoose.model("User", userSchema);
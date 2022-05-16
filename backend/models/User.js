const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
   
    username: {
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
      enum : ['SALESMAN','ADMIN'],
      default: 'SALESMAN'
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
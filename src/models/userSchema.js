const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: String, 
    enum: ['admin', 'client'],
      
    toke: String,  
    remembertoken: String,
  },
  {
    versionKey: false,
    timestamps: true
  } 
 
)


module.exports = model("User", userSchema);


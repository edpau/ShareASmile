const mongoose = require("./index");

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now, required: true },
  addressCity: { type: String, default: "London", required: false }, //TODO change back to required: ture
  addressCountry: { type: String, default: "United Kingdom", required: true },//TODO change back to required: ture


  listedShare: [{type: mongoose.Types.ObjectId,  ref: "Item" }], //Todo fix: array of id

  //userPhoto: {type:String} //TODO fix:fileName?
  //likedShare: {type: } //Todo fix: array of id
  
  /*
  !this data I don't want other users to see
  "profile": {
    "firstName": { type: String, required: true },
    "lastName": { type: String, required: true },
  }
  */
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("./index");

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now, required: true },
  addressCity: { type: String, default: "London", required: false }, //TODO change back to required: true
  addressCountry: { type: String, default: "United Kingdom", required: true },//TODO change back to required: true
  userImageURL: {type: String, default: "https://res.cloudinary.com/dtssx2anj/image/upload/v1695488858/pr0ecobii6rekn5mkfqe.jpg", required: false},


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

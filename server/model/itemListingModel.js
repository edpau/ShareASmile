const mongoose = require("./index");

const { Schema } = mongoose;

const itemListingSchema = new Schema({
  itemName: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
  description: { type: String, default: "It is a toy", required: false }, //TODO change back to required: ture
  shareMethod: { type: String, default: "Meet Up", required: false }, //TODO change back to required: ture, make it into drop list
  category:  { type: String, default: "Toys", required: false }, //TODO change back to required: ture, make it into drop list
  //image: ["string"],//TODO fix it
  //Lister: ObjectId (reference to user), //TODO fix it
  //condition: { type: String, default: "New", required: true },//TODO change back to required: ture, make it into drop list
  //likedByUsers:{} //TODO it is an array of users id who liked it

});

const Item = mongoose.model("Item", itemListingSchema);

module.exports = Item;

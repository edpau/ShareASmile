const Item = require("../model/itemListingModel");
const User = require("../model/userModel");

async function getItems(req, res) {
  try {
    const result = await Item.find({}).populate("lister");
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

// getUserItems is for testing purpose
async function getUserItems(req, res) {
  try {
    const ss = await Item.where({lister: "650d69e16c9b8c1eadb250f4"})
    console.log(ss, "ss")
    const result = await Item.where({lister: "650d69e16c9b8c1eadb250f4"}).find({}).populate("lister", "userName");
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function addItem(req, res) {
  const item = req.body;
  //   if (!event || !event.title || !event.date || !event.venue) {
  //     res.send({errorMessage: "missing parameter"});
  //     res.status(400);
  //   }

  try {
    const result = await Item.create(item);
   
    console.log(item,"item")

    //this can update one
    //const re = await User.updateOne({_id: result.lister}, {listedShare: result._id})
    
    await User.updateOne({_id: result.lister}, { $push: {listedShare: result._id}})

    

    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

// getUserItems is for testing purpose
module.exports = { getItems, addItem, getUserItems };

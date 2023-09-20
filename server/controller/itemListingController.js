const Item = require("../model/itemListingModel");

async function getItems(req, res) {
  try {
    const result = await Item.find({});
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
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getItems, addItem };
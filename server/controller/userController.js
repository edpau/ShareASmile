const User = require("../model/userModel");

async function getUsers(req, res) {
  try {
    const result = await User.find({});
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function addUser(req, res) {
  const user = req.body;
//   if (!event || !event.title || !event.date || !event.venue) {
//     res.send({errorMessage: "missing parameter"});
//     res.status(400);
//   }

  try {
    const result = await User.create(user);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getUsers, addUser };

const express = require("express");
const router = express.Router();
const userController = require("./controller/userController");
const itemListingController = require("./controller/itemListingController")

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);

router.get("/items", itemListingController.getItems);
router.post("/items", itemListingController.addItem);


// getUserItems is for testing purpose
router.get("/UserItems", itemListingController.getUserItems);



module.exports = router;

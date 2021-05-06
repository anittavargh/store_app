var express = require("express");
var router = express.Router();

/** imports */

const categoryController = require("../controllers/category");


router.post("/add-category", categoryController.add);
router.get("/get-categories", categoryController.get)
// router.post("/book", bookTicket.book);
// router.post("/cancel", cancelTicket.cancel);

module.exports = router;

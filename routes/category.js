var express = require("express");
var router = express.Router();

/** imports */

const categoryController = require("../controllers/category");


router.post("/add-category", categoryController.add);
router.get("/get-category", categoryController.get)


module.exports = router;

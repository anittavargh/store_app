var express = require("express");
var router = express.Router();

/** imports */

const sortController = require("../controllers/sort");


router.get("/newest/:id", sortController.sortByNewest);
router.get("/price/low-high/:id", sortController.sortByPriceLowToHigh);
router.get("/price/high-low/:id", sortController.sortByPriceHighToLow);
router.get("/popular/:id", sortController.sortByPopular);


module.exports = router;
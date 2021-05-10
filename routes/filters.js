var express = require("express");
var router = express.Router();

/** imports */

const filtersController = require("../controllers/filters");


router.post("/price/:id", filtersController.filterByPrice);
router.post("/brand/:id", filtersController.filterByBrand);
router.post("/color/:id", filtersController.filterByColor);


module.exports = router;
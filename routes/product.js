var express = require("express");
var router = express.Router();

/** imports */

const productController = require("../controllers/product");
const rateController = require("../controllers/rate_product");


router.post("/add", productController.add);
router.get("/get", productController.get);


router.post("/rate-review/:id", rateController.add)
router.get("/rate-review/:id",rateController.get)


module.exports = router;

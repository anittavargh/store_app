const Product = require("../models/product");

//Filter by price
module.exports.filterByPrice = async (req, res, next) => {
  try {
    const id = req.params.id;
    const upperLimit = req.body.upper_limit;
    const lowerLimit = req.body.lower_limit;

    const filteredProductByPrice = await Product.find(
      { category_id: id, price: { $gt: lowerLimit, $lt: upperLimit } },
    );

    res.send({
      Status: 200,
      Message: "Success",
      Data: filteredProductByPrice,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

//Filter by brand
module.exports.filterByBrand = async (req, res, next) => {
    try {
      const id = req.params.id;
      const brand = req.body.brand;
  
      const filteredProductByBrand = await Product.find(
        { category_id: id, brand: brand },
      );
  
      res.send({
        Status: 200,
        Message: "Success",
        Data: filteredProductByBrand,
      });
    } catch (err) {
      console.log(err);
      res.send({
        Status: 400,
        Message: "Error",
      });
    }
  };
  
//Filter by color
module.exports.filterByColor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const color = req.body.color;
  
      const filteredProductByColor = await Product.find(
        { category_id: id, color: color },
      );
  
      res.send({
        Status: 200,
        Message: "Success",
        Data: filteredProductByColor,
      });
    } catch (err) {
      console.log(err);
      res.send({
        Status: 400,
        Message: "Error",
      });
    }
  };
  

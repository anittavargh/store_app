const Product = require("../models/product");

//Sort By newset first
module.exports.sortByNewest = async (req, res, next) => {
  try {
    const id = req.params.id;

    const products = await Product.find({ category_id: id }).sort({
      createdDate: "descending",
    });

    res.send({
      Status: 200,
      Message: "Success",
      Data: products,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

//Sort By Price - Low to High
module.exports.sortByPriceLowToHigh = async (req, res, next) => {
  try {
    const id = req.params.id;

    const products = await Product.find({
      category_id: id,
    }).sort({ price: "asc" });

    res.send({
      Status: 200,
      Message: "Success",
      Data: products,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

//Sort By Price - Hign to Low
module.exports.sortByPriceHighToLow = async (req, res, next) => {
  try {
    const id = req.params.id;

    const products = await Product.find({
      category_id: id,
    }).sort({ price: "desc" });

    res.send({
      Status: 200,
      Message: "Success",
      Data: products,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

// Sort by popularity
module.exports.sortByPopular = async (req, res, next) => {
  try {
    const id = req.params.id;

    const popularProductsIds = await Product.aggregate([
      { $unwind: "$review" },
      { $group: { _id: "$_id", length: { $sum: 1 } } },
      { $sort: { length: -1 } },
    ]);

    const products = popularProductsIds.map(async (product) => {
      const item = await Product.findOne({ _id: product._id });
      return item;
    });

    const unpackProducts = await Promise.all(products);

    res.send({
      Status: 200,
      Message: "Success",
      Data: unpackProducts,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

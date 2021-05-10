const Products = require("../models/product");
const Product = require("../models/product");

// Add rating and review for the product.

module.exports.add = async (req, res, next) => {
  try {
    const id = req.params.id;
    const review = req.body.review;
    const rating = req.body.rating;

    await Product.updateOne(
      { _id: id },
      { $push: { rating: { $each: [rating] }, review: { $each: [review] } } }
    );

    res.send({
      Status: 200,
      Message: "Success",
      Data: "Rating added to the product.",
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

// Get rating and review for the product.

module.exports.get = async (req, res, next) => {
  try {
    const id = req.params.id;
    let sum = 0;
    const getProduct = await Products.findOne({ _id: id });
    const sumRate = getProduct.rating.map((rate) => {
      sum = sum + rate;
      return sum;
    });

    avgRate = sum / sumRate.length;

    res.send({
      Status: 200,
      Message: "Success",
      Data: `Rating of the product: ${avgRate}, Reviews of the product: ${getProduct.review} `,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

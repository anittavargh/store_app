const Products = require("../models/product");
const Product = require("../models/product");

// Add new product to the store.

module.exports.add = async (req, res, next) => {
  try {
    const name = req.body.name;
    const categoryId = req.body.category_id;
    const price = req.body.price;
    const image = req.body.image;
    const brand = req.body.brand;
    const colour = req.body.color;
    const bandMaterial = req.body.band_material;
    const description = req.body.description;
    const salesPackage = req.body.sales_package;
    const modelNumber = req.body.model_number;
    const modelName = req.body.model_name;
    const dialColour = req.body.dial_colour;
    const review = req.body.review;
    const rating = req.body.rating;

    const newProduct = {
      name: name,
      category_id: categoryId,
      price: price,
      image: image,
      brand:brand,
      band_material: bandMaterial,
      color: colour,
      description: description,
      sales_package: salesPackage,
      model_number: modelNumber,
      model_name: modelName,
      dial_colour: dialColour,
      review: review,
      rating: rating
    };

    await new Product(newProduct).save();

    res.send({
      Status: 200,
      Message: "Success",
      Data: "New product has been added to category.",
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

// Get Categories of the store

module.exports.get = async (req, res, next) => {
  try {
    const getProduct = await Products.find().populate('category_id');

    res.send({
      Status: 200,
      Message: "Success",
      Data: getProduct,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

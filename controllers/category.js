const Categories = require("../models/categories");

// Add new category for the store.


module.exports.add = async (req, res, next) => {
  try {
    const name = req.body.name;
    const numberOfBrands = req.body.number_of_brands;

    const newCatogery = {
      name: name,
      number_of_brands: numberOfBrands,
    };

    await new Categories(newCatogery).save();

    res.send({
      Status: 200,
      Message: "Success",
      Data: "New cateogry has been added to store.",
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
    const getCategories = await Categories.find();

    res.send({
      Status: 200,
      Message: "Success",
      Data: getCategories,
    });
  } catch (err) {
    console.log(err);
    res.send({
      Status: 400,
      Message: "Error",
    });
  }
};

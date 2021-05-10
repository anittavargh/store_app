var mongoose = require("../configs/init.config");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
  },
  category_id: {
    type: Schema.ObjectId,
    ref: "category",
  },
  image: {
    type: String,
  },
  brand: {
    type: String,
  },
  band_material: {
    type: String,
  },
  color: {
    type: String,
  },
  display: {
    type: String
  },
  description: {
    type: String,
  },
  sales_package: {
    type: String,
  },
  model_number: {
    type: Number,
  },
  model_name: {
    type: String,
  },
  dial_colour: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Array,
  },
  brand: {
    type: String,
  },
  review: {
    type: Array,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

var Products = mongoose.model("product", productSchema);

module.exports = Products;

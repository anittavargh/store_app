var mongoose = require('../configs/init.config');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    name: {
        type: String
    },
    number_of_brands: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    }
});

var Categories= mongoose.model('category', categoriesSchema);

module.exports = Categories;
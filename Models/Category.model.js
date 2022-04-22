const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: String,
    description: String
});

const Category = mongoose.model('Categoey', categorySchema);

module.exports = Category;
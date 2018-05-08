var mongoose = require('mongoose');

// dinh nghia product schema
//schema : khai bao nhung cot du lieu trong mongodb
var ProductSchema   = new mongoose.Schema(
    {
      name: String,
      price: Number,
      quantity: Number,
      description: String
    },
    {
        versionKey: false
    }
);
// "ProductModel" , khai bao 1 doi tuong la ProductSchema , 'product la ten 1collection khai bao trong mongodb
// ProductSchema khai bao kieu du lieu tuong minh trong mongodb thong qua thu vien mongoose 
module.exports = mongoose.model('ProductModel', ProductSchema, 'product');


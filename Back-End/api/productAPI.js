var mongoose = require('mongoose');
var ProductModel = require('../models/ProductModel');

var productAPI = {

// #findall() :  cung cấp 1 hàm truy xuất kiểu dữ liệu nhận từ server và trả về
//  danh sách các sản phẩm dưới dạng json.
//  có nghĩa là từ ProductModel gọi tới hàm find , 
//  từ đó truy ra danh sách các sản phẩm ,
//   sau đó có 1 hàm dùng để xác định hàm find đó có đúng hoặc không,
//   nếu k đúng thì trả về lỗi ,
//   nếu đúng thì trả về danh sách tất cả các sản phẩm
    findAll: function (req, res) {
        ProductModel.find({}, {}, function (err, products) {
            if (err) {
                throw err;
            } else {
                res.status(200).json(products); }
        });
    },

    // tìm kiếm và trả về 1 đối tượng đơn dựa trên id 
    find: function (req, res) {
        ProductModel.findOne({ _id: req.params.id }, {}, function (err, product) {
            if (err) {res.status(500).json({error: err});
            } else {
                res.status(200).json(product);
            }
        });
    },

    // tạo mới một đối tượng dựa trên các thuộc tính đ
    create: function (req, res) {
        var productModel = new ProductModel({
            name: req.body.name,
            price: req.body.price,
            quantity :  req.body.quantity,
            description :  req.body.description
        });
        productModel.save(function (error) {
            if (!error) {
                res.status(200).json({
                    message: 'created'
                });
            } else {
                res.status(500).send({ error: error });
            }
        });
    },
    update: function (req, res) {
        ProductModel.findById(req.params.id, function (error, productModel) {
            productModel.name = req.body.name;
            productModel.price = req.body.price;
            productModel.quantity = req.body.quantity;
            productModel.description = req.body.description;
            productModel.save(function (err) {
                if (err) {
                    res.status(500).json({error: err});
                } else {
                    res.status(200).json({result: 'ok'});
                }
            });
        });
    },    
    delete: function (req, res) {
        ProductModel.findById(req.params.id, function (err, productModel) {
            if (err) {
                throw err;
            } else {
                productModel.remove(function (err) {
                    if (err) {
                        res.status(500).json({error: err});
                    } else {
                        res.status(200).json({result: 'ok'});
                    }
                });
            }
        });
    }
};

module.exports = productAPI;

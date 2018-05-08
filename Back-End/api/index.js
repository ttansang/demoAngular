var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//connect to mongodb syntax
mongoose.connect('mongodb://localhost:27017/mydemo', 
    { useMongoClient: true });

var productAPI = require('./productAPI.js');

// Product API
//  khi user gọi tới đường link này, thì sẽ map vào hàm findall trong productAPI để
//  để lấy data từ mongodb rồi show list product 
router.get('/product/find_all', productAPI.findAll);

// show detail sản phẩm
router.get('/product/find/:id', productAPI.find);

// tương tự => gọi hàm create
router.post('/product/create', productAPI.create);

router.put('/product/update/:id', productAPI.update);
router.put('/product/update2/:id', productAPI.update2);

router.delete('/product/delete/:id', productAPI.delete);

router.delete('/product/delete2/:id', productAPI.delete);

module.exports = router;

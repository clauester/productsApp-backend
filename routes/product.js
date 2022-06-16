const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('../controllers/productController')
const { model } = require('mongoose')
const api = express.Router()
const Product = require('../models/Product')


api.post('/products', upload.single('image'), addProduct)
api.get('/products',getProducts)
api.delete('/products/:id',(request, response) => {
  const id = request.params.id
  
  Product.findOneAndDelete({id: {id} }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted User : ", docs);
        response.status(204).end()
    }
});
  
})

module.exports = api
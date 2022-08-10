const express=require('express')
const router=express.Router()
const path=require('path')
const addProducts=require('../controllers/products')
const {addProduct}=require('../controllers/productsAdd')

router.get('/admin/add-product',addProducts)

router.post("/product",addProduct)

module.exports={router}

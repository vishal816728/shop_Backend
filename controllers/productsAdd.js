// const products=[]
const Product=require('../models/product.model')
var id=1
function addProduct(req,res){
       {
        console.log(req.body)
        // products.push({title:req.body.title})
        const product=new Product(id,req.body.title,req.body.description,req.body.image,req.body.price)
        console.log(product)
        product.save()
        res.redirect("/")
        id++
       }
}

module.exports={
    addProduct
}
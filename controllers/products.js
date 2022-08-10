const path=require('path')
    function addProducts(req,res){
        // res.sendFile(path.join(__dirname,'../','views','Add-product.html'))
        res.render('add-product',{pageTitle:"create Product"})
    }


    module.exports=addProducts
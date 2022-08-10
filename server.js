const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const {router} = require('./routes/admin')
const Product=require('./models/product.model')
const path=require('path')
const {engine}=require('express-handlebars')
const expressHbs=require('express-handlebars')
const errorpage=require('./controllers/errorpagecontroller')
// const sequelize=require('./utils/database')

// db.execute('select * from product').then(data=>console.log(data[0])).catch(err=>console.log(err))
// sequelize.sync().then(result=>{console.log(result)}).catch(err=>console.log(err))
app.engine('hbs',engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views"
}))
app.set('view engine','hbs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))

var productslist=Product.fetchAll()
console.log(productslist)
app.use(express.static(path.join(__dirname,'public')))

app.get("/product-delete/:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    for(let i=0;i<productslist.length;i++){
        if(productslist[i].id==id){
           productslist=Product.deleteItem(id)
        }
    }
    res.redirect("/")
})
app.get("/",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'/views/shop.html'))
    res.render('shop',{prods:productslist,hasProducts:productslist.length>0})
})

app.get("/product-details/:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    var part
    for (let i=0;i<productslist.length;i++){
            if(productslist[i].id==id){
                res.render('product-details.hbs',{pageTitle:"Product Details",particularObject:productslist[i]})
            }
    }
})



app.use("/",router)

app.use(errorpage)
app.listen(5000,()=>{
    console.log("app is listening on port 5000")
})


var products=[]
const path=require('path')
const fs=require('fs')
const db=require('../utils/database')

// ********************************** static method to load save update and delete files


module.exports=class Products{
    constructor(id,title,description,image,price){
        this.id=id
        this.title=title
        this.description=description
        this.price=price
        this.image=image
    }

    save(){
        products.push(this)
    }
    
    // we are using static because we want to use call fetchAll directly on product class but not as a instantiated  method
    static fetchAll(){
        return products
    }  

    static deleteItem(id){
        const updatedproducts=products.filter(prod=>prod.id!=id)
        products=updatedproducts
        return products
    }


}
console.log(products)

// mysql2 way

// module.exports=class Products{
//     constructor(id,title,description,image,price){
//         this.id=id
//         this.title=title
//         this.description=description
//         this.price=price
//         this.image=image
//     }

//     save(){
        // return   db.execute('insert into newproductstable(title,description,price,image) values (?,?,?,?)',[
        //        this.title,this.description,this.price,this.image
        //    ])
        // while working with sql make sure to use promises
//     }
    
//     // we are using static because we want to use call fetchAll directly on product class but not as a instantiated  method
//     static async fetchAll(){
//         await db.execute('select * from newproductstable').then(data=>products=(data[0])).catch(err=>console.log(err))
//         return products
        
//     }  
    //    static findbyId(id){
    //         return db.execute('select * from newproductstable where id=?',[id])
    //    }
//     static deleteItem(id){
        //    return db.execute('delete from newproductstable where id=?',[id])
//     }
// }




// sequelize way 

// const Sequelize=require('sequelize')
// const sequelize=require('../utils/database')

// const Product=sequelize.define('products',{
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     title:Sequelize.STRING,
//     description:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     price:{
//         type:Sequelize.DOUBLE,
//         allowNull:false
//     },
//     image:{
//         type:Sequelize.STRING,
//         allowNull:false
//     }
// })

// module.exports=Product



// Note mysql2 is more sql way of interacting to the sql database while sequelize is the more javascript way to sql databases
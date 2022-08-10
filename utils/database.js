// this how we connect to the mysql using mysql2

// const mysql=require('mysql2')

// const pool=mysql.createConnection(
//     {
//         host:'localhost',
//         user:'root',
//         database:'nodejsshopdb',
//         password:'12345'
//     }
// )


// module.exports=pool.promise()


// this is how connect to mysql using sequelize

const Sequelize=require('sequelize')
                            // databasename   user    password,options
const sequelize=new Sequelize('nodejsshopdb','root','12345',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize
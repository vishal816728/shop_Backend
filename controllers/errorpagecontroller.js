function errorpage(req,res,next){
    
        // res.status(404).sendFile(path.join(__dirname,'/views/PageNotFound.html'))
        res.status(401).render('PageNotFound',{pageTitle:"page not found coming from hbs"})
    
}

module.exports=errorpage
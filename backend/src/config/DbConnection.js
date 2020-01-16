const mogoonse = require('mongoose');


module.exports = (mongo_url) =>{
    try{        
        mogoonse.connect(mongo_url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }catch(err){
        console.log(err);
    }
}

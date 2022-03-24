const mongoose=require('mongoose');
const articlesSchema = mongoose.Schema({

    image : {type:String, required:true},
    actor : {type:String, required:true},
    date : {type:String, required:true},
    title : {type:String, required:true},
    content :{type:String, required:true},
   
    

});
module.exports =mongoose.model('Article',articlesSchema);


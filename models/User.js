const mongoose=require('mongoose');
const usersSchema = mongoose.Schema({

    pseudo : {type:String, required:true},
    Name : {type:String, required:true},
    ville : {type:String, required:true},
    email : {type:String, required:true},
    password :{type:String, required:true},
    tel :{type:Number, required:true},
    

});
module.exports =mongoose.model('User',usersSchema);



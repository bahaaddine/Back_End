const mongoose=require('mongoose');
const adminsSchema = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    pasword: {type:String, required:true},
    tel: {type:Number, required:true}
    
});
module.exports =mongoose.model('Admin',adminsSchema);
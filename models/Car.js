const mongoose=require('mongoose');
const carsSchema = mongoose.Schema({
    mat1: {type:String, required:true},
    mat2: {type:String, required:true},
    Matricule:{type:String, required:true},
    id_user: {type:String, required:true},
    model: {type:String, required:true},
    
});
module.exports =mongoose.model('Car',carsSchema);

const Car=require('../models/Car');



exports.all=('/',(req,res)=>{
    Car.find()
 .then(cars=>res.status(200).json(cars))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

//recherche par id
exports.get=('/:id',(req,res,next)=>{
    Car.findOne({_id: req.params.id})
 .then(cars=>res.status(200).json(cars))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
//recherche avec id_user
exports.get=('/:id_user',(req,res,next)=>{
  Car.find({id_user: req.params.id})
.then(cars=>res.status(200).json(cars))
.catch(err=>res.status(400).json({error:err.message}));
   
});
//recherche par matricule
exports.get=('/:Matricule',(req,res,next)=>{
  Car.findOne({Matricule: req.params.id})
.then(cars=>res.status(200).json(cars))
.catch(err=>res.status(400).json({error:err.message}));
   
});

  // store a new course
  exports.create = (req, res, next) => {
    const car = new Car({
      ...req.body
    });
    car.save()
      .then(() => res.status(201).json({ message: 'car created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
exports.update=('/:id',(req,res,next)=>{
   
 Car.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
 .then(cars=>res.status(200).json({message:'car updated Seccesfuly'}))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
exports.delete=('/:id',(req,res,next)=>{
   
    Car.deleteOne({_id: req.params.id})
    .then(cars=>res.status(200).json({message:'car deleted Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
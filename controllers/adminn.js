const Admin=require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.pasword, 10)
  .then(hash => {
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      pasword: hash,
      tel:req.body.tel
    });
    admin.save()
                .then(() => res.status(201).json({
                  message: 'admin created !',
                  status: 201
                }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  Admin.findOne({ email: req.body.email })
      .then(admin => {
        if (!admin) {
          return res.status(401).json({ error: 'admin not found !' });
        }
        bcrypt.compare(req.body.pasword, admin.pasword)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Wrong password !' });
            }
            res.status(200).json({
              adminId: admin._id,
              token: jwt.sign(
                { adminId: admin._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};


exports.all=('/',(req,res)=>{
    Admin.find()
 .then(admins=>res.status(200).json(admins))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

exports.get=('/:id',(req,res,next)=>{
    Admin.findOne({_id: req.params.id})
 .then(admins=>res.status(200).json(admins))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

 
  exports.create = (req, res, next) => {
    const admin = new Admin({
      ...req.body
    });
    admin.save()
      .then(() => res.status(201).json({ message: 'Admin created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
exports.update=('/:id',(req,res,next)=>{
   
 Admin.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
 .then(admins=>res.status(200).json({message:'Admin updated Seccesfuly'}))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

exports.delete=('/:id',(req,res,next)=>{
   
    Admin.deleteOne({_id: req.params.id})
    .then(admins=>res.status(200).json({message:'Admin  deleted Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
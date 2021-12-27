const express = require('express');
const router = express.Router();
const adminController=require('./../controllers/adminn')
router.post('/signup', adminController.signup);
router.post('/login', adminController.login);
router.get('/', adminController.all);
router.get('/:id', adminController.get);
router.post('/', adminController.create);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);
module.exports=router;
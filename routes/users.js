const express = require('express');
const router = express.Router();
const userController=require('./../controllers/userr')
const auth = require('./../middleware/auth')

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile/:id', auth, userController.profile);
router.get('/', userController.all);
router.get('/:id', userController.get);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
module.exports=router;




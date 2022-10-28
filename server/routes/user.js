const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


//create find delete
router.get('/',userController.login);
router.get('/teachers',userController.view);
router.get('/adduser',userController.form);
router.post('/adduser',userController.create);
router.get('/students',userController.find);
router.post('/students',userController.found);
router.get('/:rollnumber',userController.delete);
router.get('/edituser/:rollnumber',userController.edit);
router.post('/edituser/:rollnumber', userController.update);

module.exports = router;

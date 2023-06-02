const express = require('express');
const userController = require('../controller/UserControllers');

const router = express.Router();




router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
const express = require('express');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.use(authController.authenticateUser);

router.get('/profile', (req, res) => {
  res.json({ message: `Welcome, ${req.user.name}!` });
});

module.exports = router;
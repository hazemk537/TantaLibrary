const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');


// Creates a new user
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a list of all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*
// Update a user byID
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }
    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/


// Delete a user by ID
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
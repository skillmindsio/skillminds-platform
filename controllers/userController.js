const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Logic for user registration
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Logic for user login
};

const getUserProfile = async (req, res) => {
  const userId = req.user.id;
  // Logic for getting user profile
};

module.exports = { registerUser, loginUser, getUserProfile };
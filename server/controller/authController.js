const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

exports.signup = async (req, res) => {
    const { email, phone, firstName, lastName, password, confirmPassword } = req.body;
  
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    try {
      // Check if user already exists with email or phone
      const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
      if (existingUser) {
        return res.status(409).json({ message: 'User with email or phone already exists' });
      }
  
      // Hash password and create new user
      const hash = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        phone,
        firstName,
        lastName,
        password: hash,
      });
      const savedUser = await user.save();
  
      // Create JWT token and send response
      const token = jwt.sign(
        {
          userId: savedUser._id,
          email: savedUser.email,
          phone: savedUser.phone,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create JWT token and send response
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
          phone: user.phone,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

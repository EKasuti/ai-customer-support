console.log('Starting server.js');

const express = require('express');
const cors = require('cors');
const { createUser, loginUser } = require('./firebase/services');
const admin = require('firebase-admin');

require('dotenv').config();

const app = express();

const allowedOrigins = ['http://localhost:8000'];

app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
}));
  
app.use(express.json());
  
// Logging middleware
app.use((req, res, next) => {
    next();
});
  
// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Ainvest API');
});

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Test endpoint working' });
});

// POST route for user signup
app.post('/api/auth/signup', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      console.log('Attempting to create user:', email);
      const result = await createUser(email, password);
      if (result.success) {
        res.status(201).json({ message: 'User created successfully', uid: result.uid });
      } else {
        console.error('Failed to create user:', result.error);
        res.status(400).json({ message: 'Failed to create user', error: result.error });
      }
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error', error: error.toString() });
    }
  });

  // POST route for user login
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const result = await loginUser(email, password);
      if (result.success) {
        res.status(200).json({ 
          message: 'Login successful', 
          user: result.user,
          token: result.token
        });
      } else {
        res.status(401).json({ message: 'Login failed', error: result.error });
      }
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error', error: error.toString() });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.toString() });
});

module.exports = app;

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


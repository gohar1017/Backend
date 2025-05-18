require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();

// Import routes - USE ./routes/ (not ../routes/)
const profileRoutes = require('./routes/profileRoutes');
const homeRoutes = require('./routes/homeRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');
const educationRoutes = require('./routes/educationRoutes');


// Use routes
app.use('/api/profile', profileRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/education', educationRoutes);


// Basic route for testing
app.get('/', (req, res) => {
  res.send('Portfolio Backend API');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available routes:');
  console.log(`- Profile: http://localhost:${PORT}/api/profile`);
  console.log(`- Home: http://localhost:${PORT}/api/home`);
  console.log(`- Skills: http://localhost:${PORT}/api/skills`);
  console.log(`- Contact: http://localhost:${PORT}/api/contact`);
  console.log(`- Education: http://localhost:${PORT}/api/education`);
});

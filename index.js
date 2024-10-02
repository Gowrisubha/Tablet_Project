// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://Subha-admin:8HwDCsK4EktIdnIa@cluster0.xhhtsqg.mongodb.net/miniprojectDB'; // Update with your MongoDB URI
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the Timetable schema (assuming fields like subject, day, time, etc.)
const timetableSchema = new mongoose.Schema({
  name: String,
  start_date: String,
  end_date: String,
  time: String,

});

// Create the model
const Timetable = mongoose.model('Timetable', timetableSchema);

// API endpoint to get all timetables
app.get('/api/timetable', async (req, res) => {
  try {
    const timetables = await Timetable.find().select('time'); // Get all fields from the collection
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timetable data', error });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

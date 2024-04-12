Backend (using Node.js with Express.js):// server.js

const express = require('express');
const bodyParser = require('body-parser');
const coursesRouter = require('./routes/courses');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/courses', coursesRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});// routes/courses.js

const express = require('express');
const router = express.Router();

// Sample data
const courses = [
  { id: 1, name: 'Board Exam Preparation' },
  { id: 2, name: 'Competitive Exam Preparation' },
  { id: 3, name: 'School Subjects' }
];

// Get all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// Get a specific course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

module.exports = router;Frontend (using HTML, CSS, and JavaScript):<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Catalog</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Available Courses</h1>
  <ul id="course-list"></ul>

  <script src="script.js"></script>
</body>
</html>/* styles.css */

body {
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
}// script.js

document.addEventListener('DOMContentLoaded', () => {
  const courseList = document.getElementById('course-list');

  // Fetch courses from backend
  fetch('http://localhost:3000/courses')
    .then(response => response.json())
    .then(courses => {
      courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course.name;
        courseList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching courses:', error));
});This is a basic setup to get you started. You'll need to install Node.js and Express.js for the backend, and for the frontend, just create the HTML, CSS, and JavaScript files and open the HTML file in a browser. Remember to replace the sample data and URLs with your actual data and endpoints.
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync database
db.sequelize.sync();

// Routes
const taskRoutes = require('./routes/task.routes');
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

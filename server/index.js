const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('150');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

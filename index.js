require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`Server Up running on port ${PORT}`);
});

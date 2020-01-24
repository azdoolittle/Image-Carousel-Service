const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001;


app.use(express.static('./public'));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
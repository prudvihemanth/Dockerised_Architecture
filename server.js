const express = require('express');
require('dotenv').config();

const logger = require('./src/utils/logger');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.listen(process.env.PORT, process.env.HOST);
logger.info(`Running on http://${process.env.HOST}:${process.env.PORT}`);

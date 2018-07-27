const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3000;

app.use(helmet());

app.use(morgan('dev'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/api', router);

app.listen(port, (error) => {
  if(error) console.error('Error listening on the port', error);
  console.log('Listening on port:', port);
});
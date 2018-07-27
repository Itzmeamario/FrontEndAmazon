const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customer-review', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected successfully to mongodb.');
});

module.exports = connection;
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {}
);

module.exports = mongoose.connection;

// evnvironment variable heroku uri
// NAME OF variablee MONGODB_URI
// mongodb+srv://admin-evince:<password>@cluster0.l8n2fme.mongodb.net/?retryWrites=true&w=majority

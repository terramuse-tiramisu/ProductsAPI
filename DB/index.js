var mongoose = require("mongoose");
var mongoUri = process.env.MONGOURL;
mongoose.Promise = Promise;

// Connect Mongoose to our local MongoDB via URI specified above
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to the Atelier API!')
});


module.exports = db;
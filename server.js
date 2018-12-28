const express = require("express");
const apiRouter = require('./routes/apiRoutes');
const mongoose = require('mongoose');
const PORT = 3001;

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);

mongoose.connect('mongodb://localhost/EventPlannerDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`);
});

app.listen(PORT, () => console.log("Server listening on port " + PORT));
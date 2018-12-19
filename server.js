const express = require("express");
const apiRouter = require('./routes/api');
const PORT = 3000;

const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');

const routes = require('./src/routes/router');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;

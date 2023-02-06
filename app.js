var express = require('express');
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express')

var indexRouter = require('./routes/index');
var cardsRouter = require('./routes/cards');
const docs = require('./docs');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs, { explorer: true }))
app.use('/', indexRouter);
app.use('/cards', cardsRouter);

module.exports = app;

const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRouter = require('./public/routes/apiRoutes');
const htmlRouter = require('./public/routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, public)));

app.use('/api', apiRouter);
app.use('/html', htmlRouter);
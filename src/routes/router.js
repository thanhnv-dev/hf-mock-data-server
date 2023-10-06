const express = require('express');
const providerRouter = require('./provider.routes.js');

const apiRoute = express();

apiRoute.use('/api/provider', providerRouter);

module.exports = apiRoute;

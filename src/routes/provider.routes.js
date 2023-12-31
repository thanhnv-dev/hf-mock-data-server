const express = require('express');
const postsController = require('../controllers/provider.controller.js');

const router = express.Router();

router.get('/service-single/:id', postsController.serviceSingle);
router.get('/service-child/:id', postsController.serviceChild);
router.get('/service-form/:id', postsController.serviceForm);

module.exports = router;
